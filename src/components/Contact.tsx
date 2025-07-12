import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, MessageSquare, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "message sent! 🚀",
      description: "thanks for reaching out. i'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              let's build something
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got an idea? Let's turn it into reality. I'm always excited to work on interesting projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">
                  get in touch
                </h3>
                
                <div className="space-y-6">
                  <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 rounded-3xl">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">email</h4>
                          <p className="text-muted-foreground font-mono text-sm">alex@chen.dev</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 rounded-3xl">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">phone</h4>
                          <p className="text-muted-foreground font-mono text-sm">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 rounded-3xl">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">location</h4>
                          <p className="text-muted-foreground">san francisco, ca</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Availability Status */}
              <Card className="p-6 bg-gradient-card border-0 shadow-card rounded-3xl">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-foreground font-medium">available for work</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    currently accepting new projects and collaborations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      remote
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      freelance
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      full-time
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-3">
                <Button variant="minimal" className="w-full justify-start" size="lg">
                  <MessageSquare className="h-5 w-5 mr-3" />
                  schedule a call
                </Button>
                <Button variant="minimal" className="w-full justify-start" size="lg">
                  <Calendar className="h-5 w-5 mr-3" />
                  book consultation
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 bg-gradient-card border-0 shadow-card rounded-3xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-8 text-foreground">
                    send me a message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-secondary/50 border-border rounded-2xl h-12"
                          placeholder="your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-secondary/50 border-border rounded-2xl h-12"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-secondary/50 border-border rounded-2xl h-12"
                        placeholder="what's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full resize-none bg-secondary/50 border-border rounded-2xl"
                        placeholder="tell me about your project, ideas, or just say hello..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="glow" 
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      send message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;