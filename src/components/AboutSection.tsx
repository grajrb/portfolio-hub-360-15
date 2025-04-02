import { Button } from '@/components/ui/button';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Me Section */}
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
              <a
                className="button button-hover-effect group"
                href="https://drive.google.com/file/d/1IhcDMgjX8ULmISPSpkidiMYeX7-2fD8Z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} className="mr-2" />
                Download Resume
              </a>
              <a
                className="button button-outline button-hover-effect"
                href="https://github.com/grajrb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} className="mr-2" />
                GitHub
              </a>
              <a
                className="button button-outline button-hover-effect"
                href="https://www.linkedin.com/in/gaurav-raj-095a8a129/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
              <Button variant="outline" asChild>
                <a
                  className="button button-outline button-hover-effect"
                  href="mailto:gauravupadhayay9801@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={18} className="mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>

          {/* Experience Section */}
          <div className="reveal-on-scroll delay-200">
            <h3 className="font-display text-2xl font-bold mb-6">Experience</h3>

            <div className="space-y-8">
              {/* Associate Software Engineer */}
              <div className="relative pl-8 border-l border-border/60">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-2">
                  <h4 className="font-semibold">Associate Software Engineer</h4>
                  <p className="text-sm text-muted-foreground">Bosch • 2 Years</p>
                </div>
                <p className="text-muted-foreground">
                  Created applications to optimize developer response times and improve workflows. Gained expertise in:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>C, C++, JavaScript, Linux</li>
                  <li>DevOps (CI/CD, Jenkins, SonarQube, Trivy Scanning)</li>
                  <li>Docker Hub, Docker, Kubernetes, OpenShift</li>
                  <li>Jira Cloud, Git, GitHub (Branching Strategy, Rebase, Stash, GitHub Actions)</li>
                  <li>TypeScript, Node.js, Electron.js, React.js</li>
                  <li>Python (Advanced), CMake, MSYS2, GCC</li>
                  <li>Web Development (Django, Swagger API, FastAPI, Celery)</li>
                  <li>Postgres DB, SQLite, Redis</li>
                  <li>System Design and Open Source Software (OSS)</li>
                </ul>
              </div>

              {/* Full Stack Developer (Intern) */}
              <div className="relative pl-8 border-l border-border/60">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-2">
                  <h4 className="font-semibold">Full Stack Developer (Intern)</h4>
                  <p className="text-sm text-muted-foreground">HighRadius</p>
                </div>
                <p className="text-muted-foreground">
                  Built fintech B2B cloud apps with end-to-end integration of UI components, data models, and ML systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};