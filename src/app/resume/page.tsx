import Link from "next/link";
import { site, projects, education, certifications, skills } from "@/lib/content";
import { Card, Pill, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Resume" subtitle="Online resume view." />

      <Reveal>
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{site.name}</h2>
              <p className="mt-1 text-neutral-300">{site.headline}</p>
              <p className="mt-2 font-mono text-sm text-neutral-400">{site.location}</p>
            </div>

            <div className="space-y-2 text-sm">
              <div>
                <span className="font-mono text-neutral-500">Email:</span>{" "}
                <Link className="font-mono text-cyan-300 hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </Link>
              </div>
              <div>
                <span className="font-mono text-neutral-500">Phone:</span>{" "}
                <span className="font-mono text-neutral-200">{site.phone}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link className="font-mono text-green-300 hover:underline" href={site.links.github}>GitHub →</Link>
                <Link className="font-mono text-cyan-300 hover:underline" href={site.links.linkedin}>LinkedIn →</Link>
                <Link className="font-mono text-neutral-200 hover:underline" href="/resume.pdf">PDF →</Link>
              </div>
            </div>
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card>
          <h3 className="text-lg font-semibold">Summary</h3>
          <p className="mt-3 text-neutral-200">
            I build secure, scalable AI systems with a strong focus on retrieval, observability, and clean backend architecture.
            My work includes SecRAG (semantic retrieval + vector search) and PulseScore (monitoring-first inference systems).
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {site.keywords.map((k) => (
              <Pill key={k}>{k}</Pill>
            ))}
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card>
          <h3 className="text-lg font-semibold">Projects</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.slug} className="rounded-xl border border-neutral-800 bg-neutral-950/50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-neutral-300">{p.subtitle}</div>
                  </div>
                  <Link href={`/projects/${p.slug}`} className="font-mono text-xs text-cyan-300 hover:underline">
                    Open →
                  </Link>
                </div>
                <p className="mt-3 text-sm text-neutral-200">{p.oneLiner}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.slice(0, 6).map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card>
          <h3 className="text-lg font-semibold">Education</h3>
          <div className="mt-4 space-y-4">
            {education.map((e) => (
              <div key={e.school} className="rounded-xl border border-neutral-800 bg-neutral-950/50 p-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div className="font-semibold">{e.school}</div>
                  <div className="font-mono text-xs text-neutral-400">{e.when}</div>
                </div>
                <div className="text-neutral-300">{e.program}</div>
                <ul className="mt-2 space-y-1 text-sm text-neutral-200">
                  {e.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card>
          <h3 className="text-lg font-semibold">Certifications</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-200">
            {certifications.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </Card>
      </Reveal>

      <Reveal>
        <Card>
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-xl border border-neutral-800 bg-neutral-950/50 p-4">
                <div className="font-semibold">{group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((x) => (
                    <Pill key={x}>{x}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </div>
  );
}