import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { getFeaturedProjects, getAllProjects } from "@/lib/projects";
import { withVersions } from "@/lib/version";
import ProjectCard from "@/components/project-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sushant Naik | Developer & Creator",

  description:
    "Welcome to the official portfolio of Sushant Naik — a developer and creator building web applications, AI-powered projects, and creative digital experiences.",

  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const [allProjects, featured] = await Promise.all([
    getAllProjects(),
    getFeaturedProjects(),
  ]);

  const versioned = await withVersions(allProjects);

  const featuredVersioned = versioned.filter((v) =>
    featured.some((f) => f.id === v.project.id)
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero */}
      <section className="mb-16">
        <p className="font-mono text-sm text-teal">
          {siteConfig.name}
        </p>

        <h1 className="mt-3 text-4xl font-bold text-paper md:text-6xl">
          Developer & Creator
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Building web applications, AI-powered projects, and creative
          digital experiences.
        </p>
      </section>

      {/* Featured Projects */}
      {featuredVersioned.length > 0 && (
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-paper">
              Featured Projects
            </h2>

            <Link
              href="/projects"
              className="font-mono text-sm text-teal hover:underline"
            >
              view all →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredVersioned.map((item) => (
              <ProjectCard
                key={item.project.id}
                project={item.project}
                version={item.version}
                date={item.date}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-paper">
            Projects
          </h2>

          <Link
            href="/projects"
            className="font-mono text-sm text-teal hover:underline"
          >
            view all →
          </Link>
        </div>

        {versioned.length === 0 ? (
          <p className="font-mono text-sm text-muted">
            No projects yet.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {versioned.map((item) => (
              <ProjectCard
                key={item.project.id}
                project={item.project}
                version={item.version}
                date={item.date}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}