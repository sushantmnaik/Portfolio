import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = { 
   title: "Contact",

  description:
    "Contact Sushant Naik for web development, software projects, collaborations, creative technology and other opportunities.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Sushant Naik",
    description:
      "Get in touch with Sushant Naik for development projects, collaborations and opportunities.",
    url: "/contact",
    type: "website",
  }
 };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="font-mono text-sm text-teal">
        <span className="text-muted">$</span> mail --compose
      </div>
      <h1 className="mt-3 text-3xl font-bold text-paper">Get in touch</h1>
      <p className="mt-3 max-w-xl text-muted">
        Have a project in mind, or just want to say hi? Send a message below,
        or email me directly at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-teal hover:underline">
          {siteConfig.email}
        </a>
        .
      </p>

      <div className="mt-10 max-w-md">
        <ContactForm />
      </div>
    </div>
  );
}
