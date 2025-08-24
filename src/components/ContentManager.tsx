import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Expand, Image, Video } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

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

const Projects = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchMediaItems();
  }, []);

  const fetchMediaItems = async () => {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setMediaItems(data || []);
    }
  };

  const isImageFile = (filePath: string) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(filePath);
  };

  const isVideoFile = (filePath: string) => {
    return /\.(mp4|webm|ogg|mov)$/i.test(filePath);
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
              projects
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Most of my projects are displayed on ReBooked Solutions Instagram page.
              All projects there are made by me. Follow us on Instagram and Facebook
              to see my latest creative work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mediaItems.map((item) => (
              <Card
                key={item.id}
                className="group bg-gradient-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-300"
              >
                <div
                  className="relative bg-muted/50 rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "auto" }}
                >
                  {isImageFile(item.file_path) ? (
                    <>
                      <Image className="absolute top-4 left-4 h-6 w-6 text-white/80 z-10" />
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative cursor-pointer group/expand">
                            <img
                              src={item.file_path}
                              alt={item.title}
                              className="w-full h-auto object-contain max-h-96"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/expand:opacity-100 transition-opacity flex items-center justify-center">
                              <Expand className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-4 bg-black/90 overflow-hidden">
                          <VisuallyHidden.Root asChild>
                            <DialogTitle>
                              {item.title} - Full Size View
                            </DialogTitle>
                          </VisuallyHidden.Root>
                          <div className="flex items-center justify-center max-h-[85vh] overflow-hidden">
                            <img
                              src={item.file_path}
                              alt={item.title}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : isVideoFile(item.file_path) ? (
                    <>
                      <Video className="absolute top-4 left-4 h-6 w-6 text-white/80 z-10" />
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative cursor-pointer group/expand">
                            <video
                              src={item.file_path}
                              className="w-full h-auto object-contain max-h-96 pointer-events-none"
                              muted
                              loop
                              autoPlay
                              playsInline
                              preload="metadata"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/expand:opacity-100 transition-opacity flex items-center justify-center">
                              <Expand className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-4 bg-black/90 overflow-hidden">
                          <VisuallyHidden.Root asChild>
                            <DialogTitle>
                              {item.title} - Full Size View
                            </DialogTitle>
                          </VisuallyHidden.Root>
                          <div className="flex items-center justify-center max-h-[85vh] overflow-hidden">
                            <video
                              src={item.file_path}
                              className="max-w-full max-h-full object-contain"
                              controls
                              autoPlay
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Upload className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
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

        </div>
      </div>
    </section>
  );
};

export default Projects;
