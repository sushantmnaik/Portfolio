import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { getFeaturedProjects, getAllProjects } from "@/lib/projects";
import { withVersions } from "@/lib/version";
import ProjectCard from "@/components/project-card";

export default async function HomePage() {
  const allProjects = getAllProjects();
  const featured = getFeaturedProjects();
  const versioned = await withVersions(allProjects);
  const featuredVersioned = versioned.filter((v) =>
    featured.some((f) => f.id === v.project.id)
  );

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-28">
        <div className="font-mono text-sm text-teal">
          <span className="text-muted">$</span> whoami
        </div>
        <div className="mt-3 flex items-center gap-5">
          <Image
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            width={88}
            height={88}
            priority
            className="rounded-full border border-border object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold leading-tight text-paper sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 font-mono text-sm text-amber">
              {siteConfig.role}
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {siteConfig.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            view projects
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-paper transition-colors hover:border-teal"
          >
            get in touch
          </Link>
        </div>
      </section>

      {/* Featured projects, presented as recent releases */}
      {featuredVersioned.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-mono text-sm uppercase tracking-wider text-muted">
              # recent releases
            </h2>
            <Link
              href="/projects"
              className="font-mono text-xs text-teal hover:underline"
            >
              view all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredVersioned.map(({ project, version, date }) => (
              <ProjectCard key={project.id} project={project} version={version} date={date} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
