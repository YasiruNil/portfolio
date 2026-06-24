import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundSparkles from '../components/BackgroundSparkles';

const experiences = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Petvisor (USA)',
    period: '2025 — Present',
    bullets: [
      'Contributed to frontend tooling using Vue.js and React.',
      'Led code reviews and provided mentorship to junior developers.',
      'Collaborated with international and local developers for system improvements.',
    ],
    tags: ['Vue.js', 'React', 'Mentorship'],
    current: true,
  },
  {
    title: 'Senior Frontend Engineer',
    company: 'Mybudget (Australia)',
    period: '2022 — 2025',
    bullets: [
      'Contributed to frontend tooling using Angular and React for internal tools.',
      'Led code reviews and provided mentorship to junior developers.',
      'Integrated CI/CD pipelines using CircleCI for smoother deployments.',
    ],
    tags: ['RESTful APIs', 'Angular', 'React', 'CircleCI'],
    current: false,
  },
  {
    title: 'Fullstack Developer',
    company: 'Appspotr (Pvt)',
    period: '2020 — 2022',
    bullets: [
      'Contributed to backend and frontend services for a low-code app platform and mobile app development.',
      'Developed dashboards and admin tools for web platforms.',
      'Maintained Git workflows and participated in agile team environments.',
    ],
    tags: ['Low-code', 'Mobile', 'Dashboards', 'Git'],
    current: false,
  },
  {
    title: 'Software Engineer',
    company: 'Center for Employment, Entrepreneurship and Innovation Development (Pvt)',
    period: '2018 — 2020',
    bullets: [
      'Built full-stack web applications using ReactJS (frontend) and Node.js (backend).',
      'Designed and implemented database schemas in MySQL and MongoDB.',
      'Deployed and maintained static assets via AWS S3 buckets.',
    ],
    tags: ['React', 'Node.js', 'MySQL', 'MongoDB', 'AWS S3'],
    current: false,
  },
];

const skills = [
  { category: 'Backend', items: 'Node.js · Express.js · RESTful APIs' },
  { category: 'Frontend', items: 'React.js · Vue.js · AngularJS' },
  { category: 'Databases', items: 'MongoDB · MySQL' },
  { category: 'Cloud & DevOps', items: 'AWS (S3) · CircleCI (CI/CD)' },
  { category: 'Testing', items: 'Jasmine · Karma' },
];

export default function ExperiencePage() {
  return (
    <div className="bg-color-background flex-1 flex flex-col relative">
      <BackgroundSparkles />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="pt-32 pb-section-gap flex-1" id="main-content" tabIndex="-1">

          {/* Hero */}
          <section
            className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20"
            aria-labelledby="exp-hero-heading"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              <div className="md:col-span-8">
                <span className="font-label-mono text-label-mono text-color-primary-fixed-dim mb-4 block tracking-widest">
                  SYSTEM ARCHITECTURE & ENGINEERING
                </span>
                <h1
                  id="exp-hero-heading"
                  className="font-display-lg text-display-lg text-color-on-surface mb-6 leading-tight"
                >
                  Engineering digital <br />
                  <span className="text-color-primary-container">resilience & scale.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-color-on-surface-variant max-w-2xl">
                  A passionate Fullstack Engineer with solid experience building scalable web
                  applications. I bridge technical robustness with elegant user experience across
                  collaborative, cross-functional teams.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section
            className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24"
            aria-labelledby="exp-timeline-heading"
          >
            <span className="font-label-mono text-label-mono text-color-primary-fixed-dim mb-3 block tracking-widest">
              WORK HISTORY
            </span>
            <h2
              id="exp-timeline-heading"
              className="font-headline-lg text-headline-lg text-color-on-surface mb-12"
            >
              Experience
            </h2>

            <div className="relative">
              {/* vertical line */}
              <div
                className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-color-outline-variant"
                aria-hidden="true"
              />

              <ol className="space-y-12 pl-8 md:pl-20">
                {experiences.map((exp, i) => (
                  <li key={i} className="relative">
                    {/* dot */}
                    <span
                      className={`absolute -left-8 md:-left-14 -translate-x-1/2 top-1 flex items-center justify-center w-5 h-5 rounded-full border-2 ${
                        exp.current
                          ? 'border-color-primary-fixed-dim bg-color-primary-fixed-dim'
                          : 'border-color-outline-variant bg-color-background'
                      }`}
                      aria-hidden="true"
                    />

                    <div className="obsidian-card rounded-2xl p-6 md:p-8 hover:border-color-primary-fixed-dim transition-colors duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-headline-lg text-headline-lg text-color-on-surface leading-snug">
                            {exp.title}
                            {exp.current && (
                              <span className="ml-3 inline-block font-label-mono text-label-mono text-color-primary-fixed-dim bg-color-surface-container-high px-2 py-0.5 rounded-full align-middle">
                                CURRENT
                              </span>
                            )}
                          </h3>
                          <p className="font-body-md text-body-md text-color-primary-fixed-dim mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <span className="font-label-mono text-label-mono text-color-on-surface-variant whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-5" role="list">
                        {exp.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="flex gap-3 font-body-md text-body-md text-color-on-surface-variant"
                          >
                            <span className="text-color-primary-fixed-dim mt-1 shrink-0" aria-hidden="true">
                              ›
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-label-mono text-label-mono text-color-primary-fixed-dim bg-color-surface-container-high px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Skills */}
          <section
            className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
            aria-labelledby="exp-skills-heading"
          >
            <span className="font-label-mono text-label-mono text-color-primary-fixed-dim mb-3 block tracking-widest">
              CORE COMPETENCIES
            </span>
            <h2
              id="exp-skills-heading"
              className="font-headline-lg text-headline-lg text-color-on-surface mb-10"
            >
              Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {skills.map((s) => (
                <div key={s.category} className="obsidian-card rounded-2xl p-6 hover:border-color-primary-fixed-dim transition-colors duration-300">
                  <p className="font-label-mono text-label-mono text-color-primary-fixed-dim mb-2 tracking-widest">
                    {s.category.toUpperCase()}
                  </p>
                  <p className="font-body-md text-body-md text-color-on-surface-variant">{s.items}</p>
                </div>
              ))}
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}
