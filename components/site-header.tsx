import Link from "next/link";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

import {
  getFeaturedProjects,
  getAllProjects,
} from "@/lib/projects";
import { withVersions } from "@/lib/version";
import type { Metadata } from "next";


// const links = [
//   { href: "/", label: "🏠︎ Home"},
//   { href: "/projects", label: "💻 Projects" },
//   { href: "/about", label: "👨🏻‍💼 About" },
//   { href: "/contact", label: "💬 Contact" },
// ];

export default function SiteHeader() {
  return (
<header className="sticky top-0 z-50 w-full max-w-full border-b border-cyan-400/10 bg-[#02030a]/75 backdrop-blur-xl">
  <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-4 landscape:flex-row">

    <Link
      href="/"
      className="group flex min-w-0 max-w-full items-center gap-3"
    >
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/50 bg-cyan-400/5">

        <span className="font-mono text-lg font-bold text-cyan-300 mask-circle">
          <Image
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            width={42}
            height={42}
            className="imgre"
          />
        </span>

        <span className="absolute inset-0 rounded-lg border border-purple-500/30 animate-ping opacity-20" />

      </div>

      <div className="min-w-0">
        <div className="font-mono text-sm font-bold tracking-widest text-white">
          SUSHANT<span className="text-cyan-400">.</span>NAIK
        </div>

        <div className="font-mono text-[9px] tracking-[0.3em] text-gray-500">
          @sushant_naik_official
          <br />
          @sushantmnaik
        </div>
      </div>
    </Link>

    <nav className="flex w-full max-w-full flex-wrap items-center justify-center gap-3 landscape:w-auto landscape:flex-nowrap">

      <Link
        href="/"
        className="rounded border border-green-500/40 px-4 py-2 font-mono text-xs text-green-300 transition hover:border-cyan-400 hover:text-cyan-300"
      >
        HOME
      </Link>

      <Link
        href="/projects"
        className="rounded border border-green-500/40 px-4 py-2 font-mono text-xs text-green-300 transition hover:border-cyan-400 hover:text-cyan-300"
      >
        PROJECTS
      </Link>

      <Link
        href="/about"
        className="rounded border border-green-500/40 px-4 py-2 font-mono text-xs text-green-300 transition hover:border-cyan-400 hover:text-cyan-300"
      >
        ABOUT
      </Link>

      <Link
        href="/contact"
        className="rounded border border-green-500/40 px-4 py-2 font-mono text-xs text-green-300 transition hover:border-cyan-400 hover:text-cyan-300"
      >
        CONTACT
      </Link>

    </nav>

  </div>
</header>

  );
}
