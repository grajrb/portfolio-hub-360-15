
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    description: 'A full-featured online store built with React, Node.js, and MongoDB. Includes user authentication, product management, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/placeholder.svg',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'An intuitive project management tool with drag-and-drop task organization, team collaboration features, and real-time updates.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: '/placeholder.svg',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Fitness Tracking Application',
    description: 'A mobile-responsive web app for tracking workouts and nutrition. Features include progress visualization, custom workout plans, and social sharing.',
    tags: ['React', 'Redux', 'Node.js', 'Chart.js'],
    image: '/placeholder.svg',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'A sleek weather application providing current conditions and forecasts. Includes location detection, saved locations, and detailed weather metrics.',
    tags: ['React', 'Weather API', 'Geolocation', 'CSS Animations'],
    image: '/placeholder.svg',
    githubUrl: '#',
    liveUrl: '#',
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
                <div className="aspect-video overflow-hidden bg-secondary/70">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-500",
                      hoveredCard === project.id ? "scale-105" : ""
                    )}
                  />
                </div>
                
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
                  <Button variant="outline" size="sm" className="button-hover-effect">
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="button-hover-effect">
                    <span>View Project</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal-on-scroll">
          <Button size="lg" variant="outline" className="button-hover-effect">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
