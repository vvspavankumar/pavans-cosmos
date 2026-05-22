import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vedasistla Venkata Sai Pavan Kumar" },
      { name: "description", content: "Get in touch — open to internships, collaborations and conversations." },
      { property: "og:title", content: "Contact — Vedasistla Venkata Sai Pavan Kumar" },
      { property: "og:description", content: "Reach out via email, LinkedIn or GitHub." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => <div className="pt-24"><Contact /></div>,
});
