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
    
      <footer className="footer">

        <div className="items-center justify-between gap-4 ">

          <p className="font-mono text-[10px] text-gray-600">
            © {new Date().getFullYear()} SUSHANT NAIK
          </p>

          <div className=" gap-5 font-mono text-[10px]">

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
  <p className="mt-5 block border border-purple-500/30 bg-purple-500/5 p-4 text-center font-mono text-xs text-purple-300 transition hover:border-cyan-400/50 hover:text-cyan-300">
            <Link
              href={sm[1]}
              className="text-gray-500 transition hover:text-cyan-400"
            >
              {sm[0]}
            </Link></p>)

)}
          </div>

          <p className="font-mono text-[10px] text-gray-700">
            BUILD // CREATE // DEPLOY
          </p>

        </div>

      </footer>
  );
}
