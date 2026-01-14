import type { ReactNode } from "react";
import resumePdf from "../../assets/Resume_Villanueva.pdf";
import portraitImg from "../../assets/John 2x2.png";
import acadEaseMain from "../../assets/Acadease-Gravatar.png";
import acadEaseSchedule from "../../assets/AcadeaseSchedulingPage.png";
import acadEaseAI from "../../assets/AcadeaseAIFeatureSched.png";
import acadEaseLogin from "../../assets/AcadeaseteacherLogin.png";
import toriPreview from "../../assets/ToriWordpress.png";

const projects = [
  {
    title: "AcadEase",
    subtitle: "Capstone Project · Aug 2025",
    description:
      "Digital-first platform designed to simplify school management, scheduling, and academic administration while staying aligned with DepEd standards.",
    highlights: [
      "Role-based experiences for teachers, students, and administrators",
      "Scheduling flows with clear status states and guardrails",
      "AI-assisted suggestions to speed up planning and decision-making",
      "Built to be intuitive for busy school staff with minimal onboarding",
    ],
    images: [acadEaseMain, acadEaseSchedule, acadEaseAI, acadEaseLogin],
  },
  {
    title: "Tori · Multi-User Inventory & POS",
    subtitle: "Academic Project · Sep 2024",
    description:
      "Inventory and point-of-sale system focused on reliability and clear accountability across multiple user roles.",
    highlights: [
      "Real-time stock monitoring and low-inventory prompts",
      "POS workflows with receipt generation and audit-friendly logs",
      "Role-based permissions to keep sensitive actions controlled",
      "Crafted with an emphasis on smooth day-to-day operations",
    ],
    images: [toriPreview],
    link: "https://teamtori1.wordpress.com/",
  },
];

const experiences = [
  {
    role: "Graphic Department Assistant",
    org: "Legends Events",
    location: "Cagayan de Oro City, Philippines",
    timeline: "2023 – Present",
    points: [
      "Designed event graphics and marketing materials for social and print channels.",
      "Partnered with on-ground teams to keep visuals aligned with event logistics.",
    ],
  },
  {
    role: "Marshall",
    org: "Legends Events",
    location: "Cagayan de Oro City, Philippines",
    timeline: "2023 – Present",
    points: [
      "Managed crowd control and ensured smooth event flow.",
      "Solved on-site issues quickly to keep experiences safe and enjoyable.",
    ],
  },
];

const skillGroups = [
  {
    title: "Programming",
    items: ["HTML", "CSS", "Python", "Java", "JavaScript"],
  },
  {
    title: "Design",
    items: ["Adobe Photoshop", "Clip Studio Paint", "Krita", "Canva"],
  },
  {
    title: "Project & Event Management",
    items: [
      "Scheduling & coordination",
      "Crowd control",
      "Logistics planning",
      "On-site problem solving",
    ],
  },
  {
    title: "Communication",
    items: ["Fluent in English", "Strong verbal & written updates"],
  },
];

export function Welcome() {
  return (
    <main className="relative isolate overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-6 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute right-6 top-20 h-64 w-64 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-[#0f0f1a] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pt-14 md:pt-20">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CTASection />
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 shadow-[0_0_0_1px_rgba(244,212,58,0.28)] backdrop-blur">
          Open for OJT
          <span className="h-[1px] w-8 bg-yellow-300/60" />
          IT Student & Designer
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            John Rhey R. Villanueva
          </h1>
          <p className="max-w-3xl text-lg text-slate-200">
            Motivated Information Technology student with strong organizational,
            communication, and teamwork skills. I thrive in environments that
            blend design thinking with dependable engineering, and I am eager to
            contribute to teams working on real-world products.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:villanueva.johnrhey4@gmail.com"
            className="rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-500/30 transition hover:-translate-y-0.5 hover:shadow-yellow-400/40"
          >
            Let&apos;s collaborate
          </a>
          <a
            href={resumePdf}
            className="rounded-full border border-yellow-400/40 bg-white/5 px-5 py-3 text-sm font-semibold text-yellow-50 transition hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-white"
          >
            View résumé
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_60px_-36px_rgba(0,0,0,0.6)] backdrop-blur">
            <p className="text-sm text-yellow-200">Based in</p>
            <p className="text-lg font-semibold text-white">
              Cagayan de Oro City, Misamis Oriental
            </p>
            <p className="text-sm text-slate-300">Philippines</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_60px_-36px_rgba(0,0,0,0.6)] backdrop-blur">
            <p className="text-sm text-yellow-200">Contact</p>
            <p className="text-lg font-semibold text-white">09121413513</p>
            <p className="text-sm text-slate-300">villanueva.johnrhey4@gmail.com</p>
            <a
              href="https://www.linkedin.com/in/john-rhey-villanueva-7956a7340/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-yellow-100 transition hover:text-white"
            >
              LinkedIn
              <span aria-hidden className="text-base">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[260px] md:max-w-[320px] lg:max-w-[340px]">
        <div className="absolute -left-10 -top-12 h-32 w-32 rounded-full bg-yellow-300/10 blur-2xl" />
        <div className="relative rounded-[28px] border border-yellow-400/25 bg-white/5 p-4 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur">
          <div className="rounded-[22px] border border-white/10 bg-[#0c0c12]/80 p-6">
            <div className="overflow-hidden rounded-2xl border border-yellow-400/25 bg-[#0a0a0f] aspect-square">
              <img
                src={portraitImg}
                alt="John Rhey R. Villanueva"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Tag>Information Technology</Tag>
              <Tag>Graphic Design</Tag>
              <Tag>Open to OJT</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200">
            Projects
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Recent work that shaped my craft
          </h2>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] transition hover:border-yellow-400/25 hover:bg-white/10"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-yellow-100">
                {project.subtitle}
              </div>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-slate-300">{project.description}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-yellow-100 transition hover:-translate-y-0.5 hover:border-yellow-200/60 hover:text-white"
                >
                  View
                </a>
              )}
            </div>

            <ul className="mt-4 grid gap-2 text-sm text-slate-100/90">
              {project.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 rounded-2xl border border-white/5 bg-black/30 px-3 py-2"
                >
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_0_2px_rgba(244,212,58,0.25)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {project.images.length > 0 ? (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.images.map((image, index) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-2xl border border-yellow-400/25 bg-[#0b0b12] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_60px_-50px_rgba(244,212,58,0.8)]"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screen ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-[#0f0f16] to-[#0b0b11] p-4 text-sm text-slate-200">
                <p className="font-semibold text-white">Designed system flows</p>
                <p className="text-slate-300">
                  Crafted user journeys, stock controls, and POS interfaces with an
                  emphasis on clarity and day-to-day usability.
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200">
          Experience
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Where design, logistics, and people meet
        </h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_-48px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-yellow-200">
                    {exp.timeline}
                  </p>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-sm text-slate-300">
                    {exp.org} · {exp.location}
                  </p>
                </div>
                <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-yellow-100">
                  Events
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {exp.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-yellow-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_-48px_rgba(0,0,0,0.8)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-200">
            Education
          </p>
          <h3 className="mt-2 text-xl font-bold text-white">
            University of Science and Information Technology
          </h3>
          <p className="text-sm text-slate-300">
            Cagayan de Oro, Philippines · 2022 – 2026
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Bachelor of Science in Information Technology
          </p>
        </div>

        <div className="rounded-[24px] border border-yellow-400/25 bg-yellow-400/10 p-5 shadow-[0_20px_80px_-48px_rgba(0,0,0,0.8)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-100">
            Extra-curricular
          </p>
          <h3 className="mt-2 text-lg font-bold text-white">
            University Digital Arts – USTP CDO
          </h3>
          <p className="text-sm text-yellow-50">
            Active member collaborating on creative briefs and visual experiments.
          </p>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200">
        Skills
      </p>
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        Tools and strengths I bring to teams
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[22px] border border-white/10 bg-white/5 p-4 shadow-[0_18px_60px_-50px_rgba(0,0,0,0.9)]"
          >
            <p className="text-sm font-semibold text-yellow-200">{group.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="rounded-[28px] border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 via-yellow-300/10 to-white/5 p-6 shadow-[0_28px_80px_-48px_rgba(0,0,0,0.9)]">
      <div className="grid items-center gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-50">
            Let&apos;s build something memorable
          </p>
          <h3 className="text-2xl font-bold text-white">
            I&apos;m ready to contribute to your team.
          </h3>
          <p className="text-sm text-slate-100">
            Whether it&apos;s shipping a new feature, refining flows, or designing visuals
            for an event, I bring organized execution and collaborative energy.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=villanueva.johnrhey4@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-yellow-300 transition hover:-translate-y-0.5 hover:text-white"
          >
            Email me
          </a>
          <a
            href={resumePdf}
            className="rounded-full border border-black/20 bg-white/90 px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-100">
      {children}
    </span>
  );
}


