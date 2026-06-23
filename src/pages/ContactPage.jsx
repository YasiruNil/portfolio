import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundSparkles from '../components/BackgroundSparkles';

const contactDetails = [
  {
    label: 'Email',
    value: 'yasirudam@gmail.com',
    href: 'mailto:yasirudam@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+94 72 955 0072',
    href: 'tel:+94729550072',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: '22/2 Undurugoda, Polgasowita, Sri Lanka',
    href: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-color-background flex-1 flex flex-col relative">
      <BackgroundSparkles />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="pt-32 pb-section-gap flex-1" id="main-content" tabIndex="-1">

          {/* Hero */}
          <section
            className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20"
            aria-labelledby="contact-heading"
          >
            <span className="font-label-mono text-label-mono text-color-primary-fixed-dim mb-4 block tracking-widest">
              GET IN TOUCH
            </span>
            <h1
              id="contact-heading"
              className="font-display-lg text-display-lg text-color-on-surface mb-6 leading-tight"
            >
              Let's build something <br />
              <span className="text-color-primary-container">great together.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-color-on-surface-variant max-w-2xl">
              Whether you have a project in mind or just want to connect — my inbox is always open.
            </p>
          </section>

          {/* Content grid */}
          <section
            className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
            aria-label="Contact details and form"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-gutter">

              {/* Contact info */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="font-label-mono text-label-mono text-color-primary-fixed-dim tracking-widest mb-6">
                  CONTACT INFO
                </h2>

                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="obsidian-card rounded-2xl p-5 flex items-start gap-4 hover:border-color-primary-fixed-dim transition-colors duration-300"
                  >
                    <span className="text-color-primary-fixed-dim mt-0.5 shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-label-mono text-label-mono text-color-on-surface-variant mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-body-md text-body-md text-color-on-surface hover:text-color-primary-fixed-dim transition-colors duration-200 break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body-md text-body-md text-color-on-surface">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact form */}
              <div className="lg:col-span-3">
                <h2 className="font-label-mono text-label-mono text-color-primary-fixed-dim tracking-widest mb-6">
                  SEND A MESSAGE
                </h2>

                {submitted ? (
                  <div className="obsidian-card rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 min-h-72">
                    <span className="text-color-primary-fixed-dim text-4xl" aria-hidden="true">✓</span>
                    <p className="font-headline-lg text-headline-lg text-color-on-surface">Message sent!</p>
                    <p className="font-body-md text-body-md text-color-on-surface-variant">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="obsidian-card rounded-2xl p-6 md:p-8 space-y-5"
                    noValidate
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-label-mono text-label-mono text-color-on-surface-variant mb-2"
                      >
                        NAME
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-color-surface-container rounded-xl px-4 py-3 font-body-md text-body-md text-color-on-surface placeholder:text-color-outline border border-color-outline-variant focus:border-color-primary-fixed-dim focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-label-mono text-label-mono text-color-on-surface-variant mb-2"
                      >
                        EMAIL
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-color-surface-container rounded-xl px-4 py-3 font-body-md text-body-md text-color-on-surface placeholder:text-color-outline border border-color-outline-variant focus:border-color-primary-fixed-dim focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-label-mono text-label-mono text-color-on-surface-variant mb-2"
                      >
                        MESSAGE
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        className="w-full bg-color-surface-container rounded-xl px-4 py-3 font-body-md text-body-md text-color-on-surface placeholder:text-color-outline border border-color-outline-variant focus:border-color-primary-fixed-dim focus:outline-none transition-colors duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-color-primary-fixed-dim text-color-on-primary font-label-mono text-label-mono tracking-widest py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>

            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}
