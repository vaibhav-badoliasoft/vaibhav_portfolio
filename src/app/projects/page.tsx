import Link from "next/link";
import { projects } from "@/lib/content";
import { Card, Pill, SectionTitle } from "@/components/ui";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Projects" subtitle="Case studies with design, tradeoffs, and next steps." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.slug}>
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-1 text-sm text-neutral-300">{p.subtitle}</p>
            <p className="mt-4 text-neutral-200">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={`/projects/${p.slug}`} className="font-mono text-sm text-cyan-300 hover:underline">
                Info →
              </Link>
              {p.links.map((l) => (
                <Link key={l.href} href={l.href} className="font-mono text-sm text-green-300 hover:underline">
                  {l.label} →
                </Link>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}