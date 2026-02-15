import Link from "next/link";
import { site, projects, skills, certifications, education } from "@/lib/content";
import { Card, Pill } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { GlitchText } from "@/components/GlitchText";

export default function Home() {
  return (
    <div className="space-y-12">
      <Reveal>
        <section className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8 shadow-sm backdrop-blur cy-glow">

          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            <GlitchText text={site.headline} className="cy-neon" />
          </h1>
          <p className="font-mono text-sm text-neutral-300 mt-2">{site.location}</p>

          <p className="mt-4 max-w-3xl text-lg text-neutral-300">{site.subheadline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.keywords.map((k) => (
              <Pill key={k}>{k}</Pill>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/15">
              View Projects
            </Link>
            <Link href="/resume" className="rounded-2xl border border-neutral-800 px-5 py-3 text-sm font-semibold hover:bg-white/5">
              Resume
            </Link>
            <Link href={site.links.linkedin} className="rounded-2xl border border-neutral-800 px-5 py-3 text-sm font-semibold hover:bg-white/5">
              LinkedIn
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <Card key={p.slug}>
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-neutral-300">{p.subtitle}</p>
              <p className="mt-4 text-neutral-200">{p.oneLiner}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.slice(0, 6).map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              <div className="mt-6">
                <Link href={`/projects/${p.slug}`} className="font-mono text-sm text-cyan-300 hover:underline">
                  Details →
                </Link>
              </div>
            </Card>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Certifications</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-200">
              {certifications.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Education</h3>
            <div className="mt-4 space-y-4 text-sm text-neutral-200">
              {education.map((e) => (
                <div key={e.school}>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-semibold">{e.school}</span>
                    <span className="text-neutral-400">{e.when}</span>
                  </div>
                  <div className="text-neutral-300">{e.program}</div>
                  <ul className="mt-2 space-y-1 text-neutral-200">
                    {e.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).slice(0, 8).map(([group, items]) => (
            <Card key={group}>
              <h3 className="text-lg font-semibold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </section>
      </Reveal>
    </div>
  );
}