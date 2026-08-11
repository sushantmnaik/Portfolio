import Link from "next/link";
import {
  getFeaturedProjects,
  getAllProjects,
} from "@/lib/projects";
import { withVersions } from "@/lib/version";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sushant Naik | Developer & Creator",
  description:
    "Sushant Naik — developer, creator, problem solver and technology enthusiast.",
  alternates: {
    canonical: "/",
  },
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Flask",
  "PHP",
  "MySQL",
  "Firebase",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "Three.js",
  "GitHub",
];

const capabilities = [
  {
    icon: "</>",
    title: "WEB APPS",
    text: "Modern responsive applications",
  },
  {
    icon: "AI",
    title: "AI PROJECTS",
    text: "AI-powered tools & experiments",
  },
  {
    icon: "◈",
    title: "CREATIVE",
    text: "Design, editing & digital media",
  },
  {
    icon: "∞",
    title: "EXPERIMENTS",
    text: "Always building something new",
  },
];

const stats = [
  { value: "6+", label: "YEARS CODING" },
  { value: "20+", label: "TECHNOLOGIES" },
  { value: "∞", label: "IDEAS" },
];

export default async function HomePage() {
  const [allProjects, featured] = await Promise.all([
    getAllProjects(),
    getFeaturedProjects(),
  ]);

  const versioned = await withVersions(allProjects);

  const featuredVersioned = versioned.filter((item) =>
    featured.some((project) => project.id === item.project.id)
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#02030a] text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,183,255,0.12),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(145,0,255,0.10),transparent_25%),radial-gradient(circle_at_85%_20%,rgba(0,255,255,0.08),transparent_25%)]" />

        <div className="cyber-grid absolute inset-0 opacity-40" />

        <div className="scanlines absolute inset-0 opacity-[0.035]" />

        <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#00eaff] animate-pulse" />
        <div className="absolute left-[25%] top-[65%] h-1 w-1 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7] particle-1" />
        <div className="absolute left-[72%] top-[30%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#00eaff] particle-2" />
        <div className="absolute left-[86%] top-[72%] h-1 w-1 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7] particle-3" />
        <div className="absolute left-[55%] top-[15%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_15px_#00eaff] particle-4" />

      </div>


      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#02030a]/75 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <Link href="/" className="group flex items-center gap-3">

            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/50 bg-cyan-400/5">

              <span className="font-mono text-lg font-bold text-cyan-300">
                SN
              </span>

              <span className="absolute inset-0 rounded-lg border border-purple-500/30 animate-ping opacity-20" />

            </div>

            <div>
              <div className="font-mono text-sm font-bold tracking-widest text-white">
                SUSHANT<span className="text-cyan-400">.</span>NAIK
              </div>

              <div className="font-mono text-[9px] tracking-[0.3em] text-gray-500">
                DEVELOPER // CREATOR
              </div>
            </div>

          </Link>


          <nav className="hidden items-center gap-7 md:flex">

            <Link
              href="/"
              className="font-mono text-xs text-cyan-300"
            >
              HOME
            </Link>

            <Link
              href="/projects"
              className="font-mono text-xs text-gray-400 transition hover:text-cyan-300"
            >
              PROJECTS
            </Link>

            <Link
              href="/about"
              className="font-mono text-xs text-gray-400 transition hover:text-cyan-300"
            >
              ABOUT
            </Link>

            <Link
              href="/contact"
              className="rounded border border-purple-500/40 px-4 py-2 font-mono text-xs text-purple-300 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              CONTACT
            </Link>

          </nav>

        </div>

      </header>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-5">

        <div className="grid min-h-[calc(100vh-73px)] items-center gap-12 py-16 lg:grid-cols-[1fr_1.15fr_1fr]">


          {/* LEFT PANEL */}

          <div className="order-2 lg:order-1">

            <div className="hud-panel neon-cyan relative p-6">

              <div className="absolute -top-px left-8 h-px w-24 bg-cyan-400 shadow-[0_0_15px_#00eaff]" />

              <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">
                // ABOUT_ME
              </p>

              <h1 className="mt-4 text-4xl font-black italic tracking-tight sm:text-5xl">
                SUSHANT
                <span className="block text-cyan-400 neon-text">
                  NAIK
                </span>
              </h1>

              <p className="mt-5 font-mono text-sm leading-7 text-gray-400">
                Passionate developer building web applications,
                AI-powered experiences and creative digital projects.
              </p>


              <div className="mt-6 space-y-3">

                {[
                  ["</>", "Passionate Developer"],
                  ["◈", "Creative Thinker"],
                  ["λ", "Problem Solver"],
                  ["∞", "Always Learning"],
                ].map(([icon, text]) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 font-mono text-sm text-gray-300"
                  >
                    <span className="text-cyan-400">{icon}</span>
                    {text}
                  </div>
                ))}

              </div>

            </div>


            {/* QUOTE */}

            <div className="hud-panel mt-5 border-purple-500/40 p-5">

              <div className="text-2xl text-purple-400">
                “
              </div>

              <p className="font-mono text-xs uppercase leading-6 text-purple-300">
                THE ONLY WAY
                <br />
                TO DO GREAT WORK
                <br />
                IS TO LOVE WHAT YOU DO.
              </p>

              <p className="mt-3 font-mono text-[10px] text-gray-500">
                — STEVE JOBS
              </p>

            </div>

          </div>


          {/* CENTER CORE */}

          <div className="order-1 flex flex-col items-center justify-center lg:order-2">

            <div className="relative flex h-[330px] w-[330px] items-center justify-center sm:h-[410px] sm:w-[410px]">


              {/* outer rings */}

              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin-slow" />

              <div className="absolute inset-7 rounded-full border border-purple-500/20 animate-spin-reverse" />

              <div className="absolute inset-14 rounded-full border border-cyan-400/10" />


              {/* rotating orbit */}

              <div className="absolute inset-2 rounded-full orbit-line" />

              <div className="absolute inset-2 rounded-full orbit-dot" />


              {/* glow */}

              <div className="absolute h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />

              <div className="absolute h-32 w-32 rounded-full bg-purple-500/15 blur-3xl" />


              {/* CORE */}

              <div className="core relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/50 bg-[#050816]/90 shadow-[0_0_40px_rgba(0,234,255,0.35),inset_0_0_30px_rgba(0,234,255,0.1)]">

                <div className="text-center">

                  <div className="text-6xl font-black text-cyan-300 neon-text">
                    &lt;/&gt;
                  </div>

                  <div className="mt-2 font-mono text-[9px] tracking-[0.4em] text-purple-300">
                    BUILD
                  </div>

                  <div className="font-mono text-[9px] tracking-[0.4em] text-cyan-300">
                    CREATE
                  </div>

                  <div className="font-mono text-[9px] tracking-[0.4em] text-purple-300">
                    REPEAT
                  </div>

                </div>

              </div>


              {/* FLOATING BADGES */}

              <div className="floating-badge absolute -left-4 top-14 border-cyan-400/30 text-cyan-300">
                CODE
              </div>

              <div className="floating-badge absolute -right-4 top-24 border-purple-500/30 text-purple-300">
                AI
              </div>

              <div className="floating-badge absolute bottom-14 -left-2 border-purple-500/30 text-purple-300">
                CREATE
              </div>

              <div className="floating-badge absolute -right-5 bottom-20 border-cyan-400/30 text-cyan-300">
                SHIP
              </div>

            </div>


            <div className="mt-2 text-center">

              <div className="font-mono text-xs tracking-[0.5em] text-gray-600">
                SYSTEM ONLINE
              </div>

              <div className="mt-2 flex items-center justify-center gap-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />

                <span className="font-mono text-[10px] text-green-400">
                  AVAILABLE FOR NEW IDEAS
                </span>

              </div>

            </div>

          </div>


          {/* RIGHT PANEL */}

          <div className="order-3">

            <div className="mb-4 flex items-center justify-between">

              <h2 className="font-mono text-xl font-bold italic text-white">
                FEATURED
                <span className="text-cyan-400"> PROJECTS</span>
              </h2>

              <Link
                href="/projects"
                className="font-mono text-[10px] text-purple-400 hover:text-cyan-300"
              >
                VIEW_ALL →
              </Link>

            </div>


            <div className="space-y-4">

              {featuredVersioned.length > 0 ? (
                featuredVersioned.slice(0, 3).map((item) => (

                  <div
                    key={item.project.id}
                    className="project-panel group"
                  >

                    <div className="flex gap-4">

                      {item.project.imageUrl ? (
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-cyan-400/30 bg-black/50">

                          <img
                            src={item.project.imageUrl}
                            alt=""
                            className="h-full w-full object-contain p-2"
                          />

                        </div>
                      ) : (
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/5 font-mono text-xl text-purple-400">
                          &lt;/&gt;
                        </div>
                      )}


                      <div className="min-w-0 flex-1">

                        <div className="flex items-center justify-between gap-2">

                          <h3 className="truncate font-mono text-sm font-bold text-cyan-300">
                            {item.project.title.toUpperCase()}
                          </h3>

                          <span className="font-mono text-[9px] text-purple-400">
                            {item.version}
                          </span>

                        </div>

                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                          {item.project.description}
                        </p>

                        {item.project.projectUrl && (
                          <a
                            href={item.project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block font-mono text-[10px] text-cyan-400 hover:text-purple-400"
                          >
                            LAUNCH_PROJECT ↗
                          </a>
                        )}

                      </div>

                    </div>

                  </div>

                ))
              ) : (
                <div className="hud-panel p-6 text-center">
                  <p className="font-mono text-xs text-gray-500">
                    NO FEATURED PROJECTS
                  </p>
                </div>
              )}

            </div>


            <Link
              href="/projects"
              className="mt-5 block border border-purple-500/30 bg-purple-500/5 p-4 text-center font-mono text-xs text-purple-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
            >
              ... AND MANY MORE →
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section className="relative border-y border-cyan-400/10 bg-black/20 py-20">

        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-10 flex items-end justify-between">

            <div>

              <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">
                // TECHNICAL_DATABASE
              </p>

              <h2 className="mt-2 text-3xl font-black italic sm:text-4xl">
                TECH <span className="text-purple-400">STACK</span>
              </h2>

            </div>

            <span className="hidden font-mono text-[10px] text-gray-600 sm:block">
              {skills.length} MODULES LOADED
            </span>

          </div>


          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">

            {skills.map((skill, index) => (

              <div
                key={skill}
                className="skill-card group"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >

                <div className="mb-3 text-2xl text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:text-purple-400">
                  {["◈", "</>", "JS", "TS", "⚛", "N", "Py", "◉"][index % 8]}
                </div>

                <div className="font-mono text-[10px] tracking-wider text-gray-300">
                  {skill.toUpperCase()}
                </div>

                <div className="mt-3 h-px w-full bg-gray-800">
                  <div className="h-px w-2/3 bg-cyan-400 shadow-[0_0_8px_#00eaff]" />
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="mb-10">

          <p className="font-mono text-xs tracking-[0.3em] text-purple-400">
            // CURRENT_OPERATIONS
          </p>

          <h2 className="mt-2 text-3xl font-black italic">
            WHAT I <span className="text-cyan-400">BUILD</span>
          </h2>

        </div>


        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {capabilities.map((item) => (

            <div
              key={item.title}
              className="capability-card group"
            >

              <div className="text-4xl font-black text-cyan-400 transition group-hover:text-purple-400">
                {item.icon}
              </div>

              <h3 className="mt-5 font-mono text-sm font-bold tracking-wider text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          PROJECT TIMELINE
      ========================================================= */}

      {versioned.length > 0 && (
        <section className="border-y border-purple-500/10 bg-purple-500/[0.015] py-20">

          <div className="mx-auto max-w-7xl px-5">

            <div className="mb-10 flex items-end justify-between">

              <div>

                <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">
                  // BUILD_LOG
                </p>

                <h2 className="mt-2 text-3xl font-black italic">
                  PROJECT <span className="text-purple-400">TIMELINE</span>
                </h2>

              </div>

              <Link
                href="/projects"
                className="font-mono text-xs text-cyan-400 hover:text-purple-400"
              >
                ALL PROJECTS →
              </Link>

            </div>


            <div className="grid gap-4 md:grid-cols-2">

              {versioned.slice(0, 6).map((item) => (

                <div
                  key={item.project.id}
                  className="timeline-card"
                >

                  <div className="flex gap-5">

                    <div className="flex w-16 shrink-0 flex-col items-center">

                      <span className="font-mono text-xs font-bold text-cyan-400">
                        {item.version}
                      </span>

                      <div className="mt-3 h-full w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />

                    </div>


                    <div className="pb-5">

                      <h3 className="font-mono text-sm font-bold text-white">
                        {item.project.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {item.project.description}
                      </p>

                      <div className="mt-3 font-mono text-[10px] text-gray-600">
                        {new Date(item.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="mx-auto max-w-5xl px-5 py-20">

        <div className="hud-panel grid divide-y divide-cyan-400/10 p-1 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="px-6 py-8 text-center"
            >

              <div className="text-4xl font-black text-cyan-300 neon-text">
                {stat.value}
              </div>

              <div className="mt-2 font-mono text-[9px] tracking-[0.3em] text-gray-500">
                {stat.label}
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative mx-auto max-w-5xl px-5 pb-24">

        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-purple-500/[0.08] p-10 text-center sm:p-16">

          <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00eaff]" />

          <p className="font-mono text-xs tracking-[0.4em] text-cyan-400">
            SYSTEM READY
          </p>

          <h2 className="mt-5 text-4xl font-black italic sm:text-5xl">
            LET&apos;S BUILD
            <span className="block text-purple-400">
              SOMETHING GREAT.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
            Have an idea, project, collaboration or just want to talk
            about technology? My terminal is open.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/contact"
              className="neon-button"
            >
              INITIALIZE CONTACT →
            </Link>

            <Link
              href="/projects"
              className="neon-button-secondary"
            >
              EXPLORE PROJECTS
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-cyan-400/10 px-5 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

          <p className="font-mono text-[10px] text-gray-600">
            © {new Date().getFullYear()} SUSHANT NAIK
          </p>

          <div className="flex gap-5 font-mono text-[10px]">

            <a
              href="https://github.com/sushantmnaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-cyan-400"
            >
              GITHUB
            </a>

            <Link
              href="/projects"
              className="text-gray-500 transition hover:text-cyan-400"
            >
              PROJECTS
            </Link>

            <Link
              href="/contact"
              className="text-gray-500 transition hover:text-cyan-400"
            >
              CONTACT
            </Link>

          </div>

          <p className="font-mono text-[10px] text-gray-700">
            BUILD // CREATE // REPEAT
          </p>

        </div>

      </footer>


      {/* =========================================================
          ANIMATION CSS
      ========================================================= */}

      <style>{`

        .cyber-grid {
          background-image:
            linear-gradient(rgba(0,234,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,234,255,0.035) 1px, transparent 1px);
          background-size: 55px 55px;
          transform: perspective(700px) rotateX(60deg) scale(1.5);
          transform-origin: center bottom;
          animation: gridMove 18s linear infinite;
        }

        .scanlines {
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 3px,
            rgba(255,255,255,0.08) 4px
          );
        }

        .hud-panel {
          position: relative;
          border: 1px solid rgba(0,234,255,0.2);
          background: rgba(3,7,18,0.72);
          backdrop-filter: blur(12px);
          clip-path: polygon(
            0 14px,
            14px 0,
            calc(100% - 30px) 0,
            100% 30px,
            100% calc(100% - 14px),
            calc(100% - 14px) 100%,
            30px 100%,
            0 calc(100% - 30px)
          );
        }

        .neon-cyan {
          box-shadow:
            0 0 30px rgba(0,234,255,0.04),
            inset 0 0 30px rgba(0,234,255,0.02);
        }

        .neon-text {
          text-shadow:
            0 0 8px rgba(0,234,255,0.8),
            0 0 25px rgba(0,234,255,0.35);
        }

        .core {
          animation: corePulse 3s ease-in-out infinite;
        }

        .orbit-line {
          border: 1px dashed rgba(0,234,255,0.25);
          transform: rotateX(65deg) rotateZ(20deg);
        }

        .orbit-dot {
          border: 1px solid rgba(168,85,247,0.25);
          transform: rotateX(65deg) rotateZ(-25deg);
        }

        .floating-badge {
          padding: 8px 13px;
          border: 1px solid;
          background: rgba(2,3,10,0.85);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          box-shadow: 0 0 20px rgba(0,234,255,0.05);
          animation: float 4s ease-in-out infinite;
        }

        .floating-badge:nth-of-type(2) {
          animation-delay: -1s;
        }

        .floating-badge:nth-of-type(3) {
          animation-delay: -2s;
        }

        .floating-badge:nth-of-type(4) {
          animation-delay: -3s;
        }

        .project-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0,234,255,0.25);
          background: rgba(3,7,18,0.72);
          padding: 18px;
          transition:
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .project-panel::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 35%;
          height: 1px;
          background: #00eaff;
          box-shadow: 0 0 12px #00eaff;
        }

        .project-panel:hover {
          border-color: rgba(0,234,255,0.65);
          transform: translateX(-4px);
          box-shadow: 0 0 30px rgba(0,234,255,0.08);
        }

        .skill-card {
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(3,7,18,0.7);
          padding: 18px 12px;
          text-align: center;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-7px);
          border-color: rgba(0,234,255,0.45);
          background: rgba(0,234,255,0.035);
          box-shadow: 0 10px 35px rgba(0,234,255,0.06);
        }

        .capability-card {
          border: 1px solid rgba(168,85,247,0.14);
          background: rgba(3,7,18,0.65);
          padding: 28px;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .capability-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0,234,255,0.4);
          box-shadow: 0 15px 45px rgba(0,234,255,0.06);
        }

        .timeline-card {
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(3,7,18,0.55);
          padding: 20px;
          transition:
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .timeline-card:hover {
          border-color: rgba(168,85,247,0.35);
          background: rgba(168,85,247,0.025);
        }

        .neon-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,234,255,0.6);
          background: rgba(0,234,255,0.06);
          padding: 13px 22px;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #67e8f9;
          transition: all 0.3s ease;
        }

        .neon-button:hover {
          background: rgba(0,234,255,0.12);
          border-color: #00eaff;
          color: white;
          box-shadow:
            0 0 20px rgba(0,234,255,0.2),
            inset 0 0 20px rgba(0,234,255,0.05);
          transform: translateY(-2px);
        }

        .neon-button-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(168,85,247,0.45);
          background: rgba(168,85,247,0.05);
          padding: 13px 22px;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #c084fc;
          transition: all 0.3s ease;
        }

        .neon-button-secondary:hover {
          border-color: #a855f7;
          color: white;
          box-shadow: 0 0 20px rgba(168,85,247,0.2);
          transform: translateY(-2px);
        }

        @keyframes gridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 550px;
          }
        }

        @keyframes corePulse {
          0%, 100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.04);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 22s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 16s linear infinite;
        }

        .particle-1 {
          animation: particle1 8s ease-in-out infinite;
        }

        .particle-2 {
          animation: particle2 10s ease-in-out infinite;
        }

        .particle-3 {
          animation: particle3 7s ease-in-out infinite;
        }

        .particle-4 {
          animation: particle4 11s ease-in-out infinite;
        }

        @keyframes particle1 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(80px, -50px);
          }
        }

        @keyframes particle2 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-70px, 80px);
          }
        }

        @keyframes particle3 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-60px, -40px);
          }
        }

        @keyframes particle4 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(50px, 60px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }

      `}</style>

    </main>
  );
}