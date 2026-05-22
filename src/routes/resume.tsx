import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div className="min-h-screen pt-28 px-4 bg-background">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-6">
          <a
            href="/resume.pdf"
            download
            className="gradient-bg text-primary-foreground px-6 py-3 rounded-xl"
          >
            Download Resume
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
          <iframe
            src="/resume.pdf"
            className="w-full h-[1000px]"
          />
        </div>

      </div>
    </div>
  )
}