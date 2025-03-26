
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-muted-foreground mb-6">
              A showcase of my work and skills in design and development.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full hover:text-primary hover:bg-primary/10">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:text-primary hover:bg-primary/10">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:text-primary hover:bg-primary/10">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:text-primary hover:bg-primary/10">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">email@example.com</p>
              <p className="mb-2">San Francisco, CA</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
