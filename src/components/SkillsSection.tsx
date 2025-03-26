
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'GraphQL', level: 65 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 80 },
      { name: 'Jest', level: 75 },
      { name: 'Webpack', level: 70 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="section-title">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive overview of my technical abilities, tools, and technologies I specialize in.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={cn(
                "reveal-on-scroll",
                categoryIndex === 1 ? "delay-200" : categoryIndex === 2 ? "delay-400" : ""
              )}
            >
              <Card className="h-full border border-border/60">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold mb-6">{category.title}</h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%`, transitionDelay: '300ms' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 reveal-on-scroll delay-200">
          <Card className="text-center p-8 bg-secondary/50 border border-border/40">
            <h4 className="font-display text-4xl font-bold text-primary mb-2">3+</h4>
            <p className="text-muted-foreground text-sm">Years Experience</p>
          </Card>
          
          <Card className="text-center p-8 bg-secondary/50 border border-border/40">
            <h4 className="font-display text-4xl font-bold text-primary mb-2">20+</h4>
            <p className="text-muted-foreground text-sm">Projects Completed</p>
          </Card>
          
          <Card className="text-center p-8 bg-secondary/50 border border-border/40">
            <h4 className="font-display text-4xl font-bold text-primary mb-2">15+</h4>
            <p className="text-muted-foreground text-sm">Happy Clients</p>
          </Card>
          
          <Card className="text-center p-8 bg-secondary/50 border border-border/40">
            <h4 className="font-display text-4xl font-bold text-primary mb-2">5+</h4>
            <p className="text-muted-foreground text-sm">Open Source Contributions</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
