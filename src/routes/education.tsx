import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/Education";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Vedasistla Venkata Sai Pavan Kumar" },
      { name: "description", content: "Academic journey: B.Tech in Computer Science, intermediate, and schooling." },
      { property: "og:title", content: "Education — Vedasistla Venkata Sai Pavan Kumar" },
      { property: "og:description", content: "Academic journey and achievements." },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: () => <div className="pt-24"><Education /></div>,
});
