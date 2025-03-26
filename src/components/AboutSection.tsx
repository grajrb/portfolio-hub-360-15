
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="reveal-on-scroll">
            <h2 className="section-title">
              About <span className="text-primary">Me</span>
            </h2>
            
            <p className="section-subtitle">
              A passionate full-stack developer with a keen eye for design and a commitment to creating seamless user experiences.
            </p>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                I specialize in building modern web applications using React, TypeScript, and Node.js. My approach to development combines technical excellence with a deep understanding of user needs.
              </p>
              <p>
                With experience across the entire development stack, I enjoy tackling complex problems and transforming ideas into elegant, functional solutions. Whether working on the frontend or backend, I prioritize clean code, performance, and accessibility.
              </p>
              <p>
                When not coding, I'm likely exploring new technologies, contributing to open source, or sharing knowledge through writing and mentoring.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="button-hover-effect group">
                <FileText size={18} className="mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className="button-hover-effect">
                <Github size={18} className="mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="button-hover-effect">
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          <div className="reveal-on-scroll delay-200">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6">Experience</h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l border-border/60">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="font-semibold">Senior Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">Company Name • 2021-Present</p>
                  </div>
                  <p className="text-muted-foreground">
                    Led the development of responsive web applications using React and TypeScript. Improved performance by 40% through code optimizations.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l border-border/60">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/80"></div>
                  <div className="mb-2">
                    <h4 className="font-semibold">Full Stack Developer</h4>
                    <p className="text-sm text-muted-foreground">Company Name • 2018-2021</p>
                  </div>
                  <p className="text-muted-foreground">
                    Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with design team to implement UI components.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l border-border/60">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/60"></div>
                  <div className="mb-2">
                    <h4 className="font-semibold">Junior Web Developer</h4>
                    <p className="text-sm text-muted-foreground">Company Name • 2016-2018</p>
                  </div>
                  <p className="text-muted-foreground">
                    Assisted in the development of responsive websites. Implemented frontend features using HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
