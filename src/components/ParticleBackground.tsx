export function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob" />
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/25 blur-[140px] animate-blob"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/25 blur-[120px] animate-blob"
        style={{ animationDelay: "10s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
