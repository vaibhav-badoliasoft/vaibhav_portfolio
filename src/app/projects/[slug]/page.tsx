import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { Card, Pill } from "@/components/ui";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="space-y-8">
      <Link href="/projects" className="font-mono text-sm text-cyan-300 hover:underline">
        ← back_to_projects
      </Link>

      <div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-neutral-300">{project.subtitle}</p>
        <p className="mt-4 max-w-3xl text-neutral-200">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.map((l) => (
            <Link key={l.href} href={l.href} className="font-mono text-sm text-green-300 hover:underline">
              {l.label} →
            </Link>
          ))}
        </div>
      </div>

      <Card>
        <h2 className="text-xl font-semibold">Highlights</h2>
        <ul className="mt-4 space-y-2 text-sm text-neutral-200">
          {project.highlights.map((h) => (
            <li key={h}>• {h}</li>
          ))}
        </ul>
      </Card>

      <div className="grid gap-6">
        {project.sections.map((s) => (
          <Card key={s.title}>
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <div className="mt-4 space-y-3 text-neutral-200">
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}