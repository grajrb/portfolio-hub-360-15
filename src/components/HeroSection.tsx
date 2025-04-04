import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 animate-fade-in">
            <p className="inline-block py-1 px-3 bg-secondary text-foreground text-sm rounded-full mb-6 font-medium">
              Full Stack Developer
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance">
              <span className="text-balance">Crafting Digital Experiences with</span>
              <span className="text-primary"> Precision & Purpose</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl text-balance">
              I'm a full-stack developer focused on building products that are functionally elegant and beautifully crafted.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* View My Work Button */}
              <Button
                size="lg"
                className="button-hover-effect"
                onClick={() => {
                  const featuredProjects = document.getElementById('projects');
                  if (featuredProjects) {
                    featuredProjects.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View My Work
              </Button>

              {/* Contact Me Button */}
              <Button
                size="lg"
                variant="outline"
                className="button-hover-effect"
                asChild
              >
                <a href="mailto:gauravupadhayay9801@gmail.com">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content (Video) */}
          <div className="lg:col-span-2 flex justify-center animate-slide-in-right hidden lg:block">
            <div className="w-full max-w-md">
              <video
                src="/Asset/Java developer.mp4" // Path relative to the public directory
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 md:mt-32 animate-fade-in">
          <a
            href="#about"
            className="group flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};