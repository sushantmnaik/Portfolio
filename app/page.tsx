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

  // rest of your existing JSX...
}
