import Link from "next/link";
import { site } from "@/lib/content";
import { Card, SectionTitle } from "@/components/ui";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Contact" subtitle="Email or Linkedin" />
      <Card>
        <p className="text-neutral-200">
          Email:{" "}
          <Link className="font-mono text-cyan-300 hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </Link>
        </p>
        <p className="mt-2 text-neutral-200">
          Phone: <span className="font-mono">{site.phone}</span>
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link className="font-mono text-sm text-cyan-300 hover:underline" href={site.links.linkedin}>Linkedin →</Link>
          <Link className="font-mono text-sm text-green-300 hover:underline" href={site.links.github}>Github →</Link>
          <Link className="font-mono text-sm text-neutral-200 hover:underline" href={site.links.resume}>Resume →</Link>
        </div>
      </Card>
    </div>
  );
}