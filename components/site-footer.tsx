import { siteConfig } from "@/lib/config";
import Link from "next/link";
import {
  getFeaturedProjects,
  getAllProjects,
} from "@/lib/projects";
import { withVersions } from "@/lib/version";
import type { Metadata } from "next";

export default function SiteFooter() {
  // const year = new Date().getFullYear();
  const links = Object.entries(siteConfig.social).filter(([, url]) => !!url);

  return (
    
      <footer className="border-t border-cyan-400/10 px-5 py-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">

        <div className="mx-auto flex  items-center justify-between gap-4 ">

          <p className="font-mono text-[10px] text-gray-600">
            © {new Date().getFullYear()} SUSHANT NAIK
          </p>

          <div className="flex gap-5 font-mono text-[10px]">

            {/* <a
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
            </Link> */}
           
{links.map((sm)=>(
            <Link
              href={sm[1]}
              className="text-gray-500 transition hover:text-cyan-400"
            >
              {sm[0]}
            </Link>)

)}
          </div>

          <p className="font-mono text-[10px] text-gray-700">
            BUILD // CREATE // DEPLOY
          </p>

        </div>

      </footer>
  );
}
