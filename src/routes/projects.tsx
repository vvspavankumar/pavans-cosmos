import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vedasistla Venkata Sai Pavan Kumar" },
      { name: "description", content: "Selected projects across web development, machine learning and AWS cloud." },
      { property: "og:title", content: "Projects — Vedasistla Venkata Sai Pavan Kumar" },
      { property: "og:description", content: "Real applications built across web, ML and cloud." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: () => <div className="pt-24"><Projects /></div>,
});
