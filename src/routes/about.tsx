import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vedasistla Venkata Sai Pavan Kumar" },
      { name: "description", content: "About Pavan Kumar — Computer Science Engineering student passionate about software, cloud and ML." },
      { property: "og:title", content: "About — Vedasistla Venkata Sai Pavan Kumar" },
      { property: "og:description", content: "Computer Science student building real-world applications across Java, Cloud and ML." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => <div className="pt-24"><About /></div>,
});
