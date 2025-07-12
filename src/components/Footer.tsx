import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">
              John Doe
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full Stack Developer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a 
                href="mailto:john@example.com"
                className="p-2 rounded-full bg-background hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>API Development</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;