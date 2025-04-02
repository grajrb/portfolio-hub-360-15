import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Github, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    description: 'A full-featured online store built with React, Node.js, and MongoDB. Includes user authentication, product management, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/grajrb/EzCommerce',
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'An intuitive project management tool with drag-and-drop task organization, team collaboration features, and real-time updates.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/grajrb/Dashboard-Application',
  },
  {
    id: 3,
    title: 'Product-Recommendation Engine',
    description: 'This is a recommendation model which aims to provide the best combos of items. These combos of items can be used by the shop to provide any offers on them if brought together, so that the shop can make profits from it. It is a Market Basket Analysis using Apriori Algorithm',
    tags: ['React', 'Redux', 'Node.js', 'Chart.js'],
    githubUrl: 'https://github.com/grajrb/Product-Recommendation-Engine',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'A sleek weather application providing current conditions and forecasts. Includes location detection, saved locations, and detailed weather metrics.',
    tags: ['React', 'Weather API', 'Geolocation', 'CSS Animations'],
    githubUrl: 'https://github.com/grajrb/Weather-API',
  },
];

export const ProjectsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="section-title">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work showcasing my skills and experience in building digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "reveal-on-scroll",
                index % 2 === 1 ? "delay-200" : ""
              )}
            >
              <Card
                className={cn(
                  "overflow-hidden h-full transition-all duration-300 bg-card hover:shadow-lg border border-border/60",
                  hoveredCard === project.id ? "shadow-lg" : ""
                )}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader>
                  <CardTitle className="font-display text-xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium py-1 px-2 bg-secondary rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <a
                    className="button-hover-effect inline-flex items-center justify-center px-4 py-2 border border-border/60 rounded text-sm font-medium hover:shadow-lg transition-all duration-300"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal-on-scroll">
          <a
            className="button-hover-effect inline-flex items-center justify-center px-6 py-3 border border-border/60 rounded text-lg font-medium hover:shadow-lg transition-all duration-300"
            href="https://github.com/grajrb?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
          </a>
        </div>

        <div className="reveal-on-scroll delay-200">
          <Card className="h-full border border-border/60">
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">gauravupadhayay9801@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 7992425448</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Coimbatore</h4>
                    <p className="text-muted-foreground">Coimbatore, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              {/* Follow Me Section */}
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/grajrb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-hover-effect inline-flex items-center justify-center px-4 py-2 border border-border/60 rounded text-sm font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gaurav-raj-095a8a129/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-hover-effect inline-flex items-center justify-center px-4 py-2 border border-border/60 rounded text-sm font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin size={16} className="mr-1" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
