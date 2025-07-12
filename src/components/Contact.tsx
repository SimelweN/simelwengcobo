import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
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
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <p className="text-muted-foreground">john@example.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Location</h4>
                        <p className="text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <p className="text-muted-foreground mb-4">
                  Available for freelance work and full-time opportunities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    Freelance Available
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                    Remote Friendly
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-gradient-card border-0 shadow-card">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Send Me a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full resize-none"
                        placeholder="Tell me about your project, ideas, or just say hello..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
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