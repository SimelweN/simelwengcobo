import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, X, Plus, Trash2, Image, Video } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface MediaItem {
  id: string;
  title: string;
  description: string | null;
  file_path: string;
  thumbnail_url: string | null;
  created_at: string;
  file_size: number | null;
  duration: string | null;
}

const ContentManager = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploadData, setUploadData] = useState({
    title: '',
    description: '',
    file: null as File | null
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchMediaItems();
  }, []);

  const fetchMediaItems = async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch media items",
        variant: "destructive"
      });
    } else {
      setMediaItems(data || []);
    }
  };

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadData.file || !uploadData.title) return;

    setIsUploading(true);

    try {
      // Upload file to storage
      const fileExt = uploadData.file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `media/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('videos')
        .upload(filePath, uploadData.file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('videos')
        .getPublicUrl(filePath);

      // Save to database
      const { error: dbError } = await supabase
        .from('videos')
        .insert({
          title: uploadData.title,
          description: uploadData.description || null,
          file_path: publicUrl,
          file_size: uploadData.file.size,
          thumbnail_url: uploadData.file.type.startsWith('image/') ? publicUrl : null
        });

      if (dbError) throw dbError;

      toast({
        title: "Success",
        description: "Media uploaded successfully!"
      });

      setUploadData({ title: '', description: '', file: null });
      setShowUploadForm(false);
      fetchMediaItems();

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload media",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const deleteMediaItem = async (id: string, filePath: string) => {
    try {
      // Extract file path from URL for storage deletion
      const urlParts = filePath.split('/');
      const fileName = urlParts[urlParts.length - 1];
      const storageFilePath = `media/${fileName}`;

      // Delete from storage
      await supabase.storage
        .from('videos')
        .remove([storageFilePath]);

      // Delete from database
      const { error } = await supabase
        .from('videos')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Media deleted successfully!"
      });

      fetchMediaItems();

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete media",
        variant: "destructive"
      });
    }
  };

  const isImageFile = (filePath: string) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(filePath);
  };

  const isVideoFile = (filePath: string) => {
    return /\.(mp4|webm|ogg|mov)$/i.test(filePath);
  };

  return (
    <section id="content-manager" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              content manager
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload and manage your portfolio media - images and videos of your work.
            </p>
          </div>

          <div className="mb-12">
            {!showUploadForm ? (
              <Button 
                onClick={() => setShowUploadForm(true)}
                variant="glow"
                size="lg"
                className="mx-auto block"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add New Media
              </Button>
            ) : (
              <Card className="bg-gradient-card border border-border/50 rounded-3xl overflow-hidden max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground">Upload New Media</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowUploadForm(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <form onSubmit={handleFileUpload} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Title *
                      </label>
                      <Input
                        value={uploadData.title}
                        onChange={(e) => setUploadData({...uploadData, title: e.target.value})}
                        placeholder="Enter media title"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Description
                      </label>
                      <Textarea
                        value={uploadData.description}
                        onChange={(e) => setUploadData({...uploadData, description: e.target.value})}
                        placeholder="Enter description (optional)"
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        File *
                      </label>
                      <Input
                        type="file"
                        accept="image/*,video/*"
                        onChange={(e) => setUploadData({...uploadData, file: e.target.files?.[0] || null})}
                        required
                      />
                    </div>

                    <div className="flex space-x-4">
                      <Button 
                        type="submit" 
                        disabled={isUploading}
                        variant="glow"
                        className="flex-1"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {isUploading ? 'Uploading...' : 'Upload Media'}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <Card 
                key={item.id}
                className="group bg-gradient-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-300"
              >
                <div className="relative aspect-video bg-muted/50">
                  {isImageFile(item.file_path) ? (
                    <>
                      <Image className="absolute top-4 left-4 h-6 w-6 text-white/80" />
                      <img 
                        src={item.file_path} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </>
                  ) : isVideoFile(item.file_path) ? (
                    <>
                      <Video className="absolute top-4 left-4 h-6 w-6 text-white/80" />
                      <video 
                        src={item.file_path}
                        className="w-full h-full object-cover"
                        controls
                      />
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Upload className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteMediaItem(item.id, item.file_path)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                  )}
                  <div className="text-sm text-muted-foreground">
                    {new Date(item.created_at).toLocaleDateString()}
                    {item.file_size && (
                      <span className="ml-2">
                        • {(item.file_size / 1024 / 1024).toFixed(1)} MB
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {mediaItems.length === 0 && (
            <div className="text-center py-16">
              <Upload className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">No media yet</h3>
              <p className="text-muted-foreground mb-8">
                Start building your portfolio by uploading your first piece of work.
              </p>
              <Button 
                onClick={() => setShowUploadForm(true)}
                variant="glow"
                size="lg"
              >
                <Plus className="h-5 w-5 mr-2" />
                Upload Your First Media
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentManager;