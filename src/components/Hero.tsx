import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Code, Coffee } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Digital Creator & Entrepreneur';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iaHNsKDE0MiA3NiUgMzYlIC8gMC4xKSIvPgo8L3N2Zz4K')] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Terminal-style intro */}
          <div className="mb-8 text-left max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-elegant font-mono text-sm">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-muted-foreground">~/portfolio</span>
              </div>
              <div className="space-y-2">
                <div className="text-primary">$ whoami</div>
                <div className="text-foreground">Simelwe Ngcobo</div>
                <div className="text-primary">$ cat role.txt</div>
                <div className="text-foreground">
                  {typedText}<span className="animate-pulse">|</span>
                </div>
                <div className="text-primary">$ ls skills/</div>
                <div className="text-muted-foreground">
                  react.js supabase canva capcut figma...
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent animate-slide-up">
            Simelwe Ngcobo
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            📍 South Africa | 19-year-old entrepreneur building digital solutions that help local youth businesses look clean, professional, and digital-ready.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Button 
              variant="glow" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-6"
            >
              <Code className="mr-2 h-5 w-5" />
              view work
            </Button>
            <Button 
              variant="minimal" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6"
            >
              <Coffee className="mr-2 h-5 w-5" />
              grab coffee
            </Button>
          </div>

          {/* Social Links - Floating */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-card hover:bg-accent transition-all duration-300 hover:scale-110 shadow-card hover:shadow-glow animate-float"
            >
              <Github className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </div>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-card hover:bg-accent transition-all duration-300 hover:scale-110 shadow-card hover:shadow-glow animate-float"
              style={{ animationDelay: '1s' }}
            >
              <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </div>
            </a>
            <a 
              href="mailto:simelwe@rebookedsolutions.co.za"
              className="group relative p-4 rounded-2xl bg-card hover:bg-accent transition-all duration-300 hover:scale-110 shadow-card hover:shadow-glow animate-float"
              style={{ animationDelay: '2s' }}
            >
              <Mail className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </div>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="p-3 rounded-full hover:bg-accent transition-all duration-300"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;