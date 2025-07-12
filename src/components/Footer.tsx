import { Github, Linkedin, Mail, Heart, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 text-primary mb-6">
              <Terminal className="h-6 w-6" />
              <span className="text-xl font-bold">~/alex-chen</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              passionate full-stack developer crafting digital experiences that
              blend creativity with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-card hover:bg-accent transition-all duration-300 hover:scale-110 shadow-card hover:shadow-glow"
              >
                <Github className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-card hover:bg-accent transition-all duration-300 hover:scale-110 shadow-card hover:shadow-glow"
              >
                <Linkedin className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:alex@chen.dev"
                className="p-3 rounded-2xl bg-card hover:bg-accent transition-all duration-300 hover:scale-110 shadow-card hover:shadow-glow"
              >
                <Mail className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-6">navigation</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>web development</li>
              <li>ui/ux design</li>
              <li>api development</li>
              <li>technical consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm font-mono">
            © {currentYear} alex chen. all rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            built with <Heart className="h-4 w-4 mx-1 text-primary" /> using
            react & tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
