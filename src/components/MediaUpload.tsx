import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, X, Image, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface MediaUploadProps {
  onUploadComplete: () => void;
}

interface FileWithPreview extends File {
  preview?: string;
}

const MediaUpload = ({ onUploadComplete }: MediaUploadProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const validFiles = selectedFiles.filter(file => {
      const isImage = file.type.startsWith('image/');
      return isImage;
    });

    if (validFiles.length !== selectedFiles.length) {
      toast({
        title: "Invalid files",
        description: "Only image files are allowed",
        variant: "destructive",
      });
    }

    const filesWithPreview = validFiles.map(file => {
      const fileWithPreview = file as FileWithPreview;
      if (file.type.startsWith('image/')) {
        fileWithPreview.preview = URL.createObjectURL(file);
      }
      return fileWithPreview;
    });

    setFiles(prev => [...prev, ...filesWithPreview]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = prev.filter((_, i) => i !== index);
      // Clean up preview URL
      if (prev[index].preview) {
        URL.revokeObjectURL(prev[index].preview!);
      }
      return newFiles;
    });
  };

  const uploadFiles = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to upload",
        variant: "destructive",
      });
      return;
    }

    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please enter a title for your media",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      for (const file of files) {
        // Generate unique filename
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `media/${fileName}`;

        // Upload file to Supabase storage
        const { error: uploadError } = await supabase.storage
          .from('media')
          .upload(filePath, file);

        if (uploadError) {
          // If bucket doesn't exist, provide helpful error message
          if (uploadError.message.includes('bucket') || uploadError.message.includes('not found')) {
            throw new Error('Storage bucket not found. Please connect to Supabase and create a "media" bucket first.');
          }
          throw uploadError;
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('media')
          .getPublicUrl(filePath);

        // Insert record into database
        const { error: dbError } = await supabase
          .from('videos')
          .insert({
            title: files.length === 1 ? title : `${title} - ${file.name}`,
            description: description || null,
            file_path: publicUrl,
            file_size: file.size,
            thumbnail_url: file.type.startsWith('image/') ? publicUrl : null,
          });

        if (dbError) {
          throw dbError;
        }
      }

      toast({
        title: "Upload successful!",
        description: `${files.length} file(s) uploaded successfully`,
      });

      // Reset form
      setFiles([]);
      setTitle("");
      setDescription("");
      setIsOpen(false);
      onUploadComplete();

    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload files",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const isImageFile = (file: File) => file.type.startsWith('image/');

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Photos
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Upload Photos</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* File Selection */}
          <div>
            <Label htmlFor="file-upload">Select Files</Label>
            <div 
              className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Choose files to upload</p>
              <p className="text-muted-foreground">
                Drag and drop or click to select photos
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Supported formats: JPG, PNG, GIF
              </p>
            </div>
            <Input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Selected Files Preview */}
          {files.length > 0 && (
            <div>
              <Label>Selected Files ({files.length})</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                {files.map((file, index) => (
                  <Card key={index} className="relative group">
                    <CardContent className="p-2">
                      <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
                        {isImageFile(file) && (
                          <>
                            <Image className="absolute top-2 left-2 h-4 w-4 text-white z-10" />
                            {file.preview && (
                              <img
                                src={file.preview}
                                alt={file.name}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </>
                        )}
                        
                        <Button
                          size="sm"
                          variant="destructive"
                          className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeFile(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 truncate">
                        {file.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Title and Description */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title for your media"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>

          {/* Upload Button */}
          <div className="flex justify-end gap-3">
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              disabled={uploading}
            >
              Cancel
            </Button>
            <Button 
              onClick={uploadFiles}
              disabled={uploading || files.length === 0}
            >
              {uploading ? "Uploading..." : `Upload ${files.length} file(s)`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaUpload;
