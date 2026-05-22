import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/Skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Vedasistla Venkata Sai Pavan Kumar" },
      { name: "description", content: "Technical skills: Java, Python, Web, MySQL, AWS Cloud, Machine Learning." },
      { property: "og:title", content: "Skills — Vedasistla Venkata Sai Pavan Kumar" },
      { property: "og:description", content: "Languages, frontend, database, cloud and ML skills." },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: () => <div className="pt-24"><Skills /></div>,
});
