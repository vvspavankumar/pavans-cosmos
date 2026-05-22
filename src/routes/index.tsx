import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedasistla Venkata Sai Pavan Kumar — Software Developer" },
      { name: "description", content: "Portfolio home — Computer Science student specializing in Java, Web, AWS Cloud and Machine Learning." },
      { property: "og:title", content: "Vedasistla Venkata Sai Pavan Kumar — Portfolio" },
      { property: "og:description", content: "Java · Web · AWS Cloud · Machine Learning." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: () => <Hero />,
});
