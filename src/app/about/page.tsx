import Link from "next/link";
import { site, skills } from "@/lib/content";
import { Card, Pill, SectionTitle } from "@/components/ui";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="About" subtitle="Software and AI engineer" />

      <Card>
        <p className="text-neutral-200">
        Software and AI engineer, and a cybersecurity and cloud student, focused on building secure, scalable systems. I design
        backend architectures, real-time AI pipelines, and semantic retrieval systems with an emphasis on reliability and clean
        user experience. I actively explore machine learning deployment, cloud infrastructure, and security-first design. My goal
        is to build practical, innovative AI solutions that are secure and user-focused.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link href={site.links.linkedin} className="font-mono text-sm text-cyan-300 hover:underline">Linkedin →</Link>
          <Link href={site.links.github} className="font-mono text-sm text-green-300 hover:underline">Github →</Link>
          <Link href={site.links.resume} className="font-mono text-sm text-neutral-200 hover:underline">Resume →</Link>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <Card key={group}>
            <h3 className="text-lg font-semibold">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}