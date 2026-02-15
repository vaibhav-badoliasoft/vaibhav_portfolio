// src/components/ui.tsx
export function Card({ children }: { children: React.ReactNode }) {
    return (
      <div className="cy-glow rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_0_32px_rgba(34,211,238,0.14)]">
        {children}
      </div>
    );
  }
  
  export function Pill({ children }: { children: React.ReactNode }) {
    return (
      <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-sm text-neutral-200">
        {children}
      </span>
    );
  }
  
  export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-50">{title}</h1>
        {subtitle ? <p className="mt-2 max-w-3xl text-neutral-300">{subtitle}</p> : null}
      </div>
    );
  }  