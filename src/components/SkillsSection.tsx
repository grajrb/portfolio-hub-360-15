import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: '.NET Core', level: 70 },
      { name: 'Node.js', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Angular', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', level: 90 },
      { name: 'npm', level: 85 },
      { name: 'CMake', level: 70 },
      { name: 'MSYS2', level: 60 },
      { name: 'Git', level: 90 },
      { name: 'MATLAB', level: 65 },
      { name: 'Windows', level: 90 },
      { name: 'Linux', level: 80 },
      { name: 'Azure', level: 70 },
    ],
  },
  {
    title: 'DevOps & Databases',
    skills: [
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'GitHub Actions', level: 75 },
      { name: 'Docker (Basic)', level: 60 },
      { name: 'Postgres DB', level: 85 },
      { name: 'SQLite', level: 80 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'System Design', level: 75 },
      { name: 'Open Source Software (OSS)', level: 80 },
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
            <h4 className="font-display text-4xl font-bold text-primary mb-2">2+</h4>
            <p className="text-muted-foreground text-sm">Years Experience</p>
          </Card>
          
          <Card className="text-center p-8 bg-secondary/50 border border-border/40">
            <h4 className="font-display text-4xl font-bold text-primary mb-2">10+</h4>
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
