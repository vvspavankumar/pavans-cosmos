import { createFileRoute } from "@tanstack/react-router";
import { Certifications } from "@/components/Certifications";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Awards — Vedasistla Venkata Sai Pavan Kumar" },
      { name: "description", content: "Certifications, hackathons and awards earned along the way." },
      { property: "og:title", content: "Certifications & Awards" },
      { property: "og:description", content: "Recognitions and credentials." },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: () => <div className="pt-24"><Certifications /></div>,
});
