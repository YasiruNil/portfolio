import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundSparkles from '../components/BackgroundSparkles';

const projects = [
  {
    title: "Enterprise Cloud Dashboard",
    tags: ["NEXT.JS", "GRAPHQL", "KUBERNETES"],
    desc: "Architected a unified monitoring solution for multi-region cloud clusters, reducing incident response time by 40%.",
    img: "/project1.jpg",
    colSpan: "md:col-span-8"
  },
  {
    title: "Real-time Analytics",
    tags: ["GO", "GRPC"],
    desc: "High-throughput data ingestion engine processing 50k+ events/sec with sub-millisecond latency.",
    img: "/project2.jpg",
    colSpan: "md:col-span-4"
  },
  {
    title: "Serverless Logistics API",
    tags: ["AWS LAMBDA", "TERRAFORM"],
    desc: "Scalable backend for a global courier service handling 1M+ daily deliveries. Implemented automated CI/CD and IaC.",
    img: "/project3.jpg",
    colSpan: "md:col-span-8"
  },
  {
    title: "Threat Detection AI",
    tags: ["PYTHON", "PYTORCH"],
    desc: "AI-powered security layer identifying anomalous network traffic patterns with 98.4% accuracy.",
    img: "/project4.jpg",
    colSpan: "md:col-span-4"
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-color-background flex-1 flex flex-col relative">
      <BackgroundSparkles />
      <div className="relative z-10 flex flex-col flex-1">
      <Navbar />
      <main className="pt-40 pb-section-gap flex-1">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <header className="mb-20 max-w-3xl">
            <h1 className="font-display-lg text-display-lg text-color-primary-fixed-dim mb-8">
              Engineering <span className="text-color-on-surface">Impact.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-color-on-surface-variant leading-relaxed">
              A curated selection of technical solutions built with architectural integrity, focusing on scalability and performance.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {projects.map((project, idx) => (
              <article key={idx} className={`obsidian-card ${project.colSpan} rounded-xl overflow-hidden flex flex-col group`}>
                <div className="h-64 md:h-80 w-full overflow-hidden bg-color-surface-container-lowest">
                  <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" src={project.img} alt={project.title} />
                </div>
                <div className="p-10 relative z-10">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-color-surface-container-highest text-color-primary-fixed-dim rounded-full font-label-mono text-[12px]">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-color-on-surface mb-4">{project.title}</h3>
                  <p className="font-body-md text-body-md text-color-on-surface-variant mb-8">{project.desc}</p>
                  <div className="flex gap-6">
                    <a className="flex items-center gap-2 text-color-primary-fixed-dim font-label-mono text-label-mono group/link" href="#">
                      CASE STUDY <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </div>
  );
}
