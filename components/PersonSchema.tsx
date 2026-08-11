export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": "https://sushantnaik.vercel.app/#person",

    name: "Sushant Naik",

    url: "https://sushantnaik.vercel.app",

    image: "https://sushantnaik.vercel.app/profile.jpg",

    jobTitle: "Developer & Creator",

    description:
      "Developer and creator interested in web development, AI, software projects and creative technology.",

    sameAs: [
      "https://github.com/sushantmnaik",
      "https://www.linkedin.com/",
      "https://www.instagram.com/sushant_naik_official/",
      "https://www.youtube.com/@sushant_naik_official",
      "https://x.com/",
    ],

    knowsAbout: [
      "Web Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "AI",
      "Software Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}