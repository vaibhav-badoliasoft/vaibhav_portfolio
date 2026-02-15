"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

const items = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Projects", href: "/projects", icon: FolderIcon },
  { label: "About", href: "/about", icon: UserIcon },
  { label: "Contact", href: "/contact", icon: MailIcon },
  { label: "Resume", href: "/resume", icon: FileIcon },
];

export function TerminalBar() {
  const pathname = usePathname();

  return (
    <div className="mb-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 shadow-sm backdrop-blur cy-glow">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-mono text-sm text-neutral-200">
          <span className="text-green-400">Vaibhav Saini</span>
          <span className="text-neutral-400"> @</span>
          <span className="text-cyan-300">portfolio</span>
          <span className="text-neutral-400"> :</span>
          <span className="text-neutral-200 cy-caret">~</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {items.map((i) => {
            const active = pathname === i.href;
            const Icon = i.icon;
            return (
              <Link
                key={i.href}
                href={i.href}
                className={[
                  "flex items-center gap-2 rounded-xl px-3 py-2 font-mono text-xs transition",
                  active
                    ? "bg-white/5 text-green-300 border border-green-500/30"
                    : "text-neutral-300 hover:bg-white/5 border border-transparent hover:border-cyan-500/20",
                ].join(" ")}
              >
                <Icon active={active} />
                {i.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2 font-mono text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <span className="text-neutral-500">$</span> route{" "}
            <span className="text-cyan-300">{pathname}</span> • focus{" "}
            <span className="text-green-300">{getMode(pathname)}</span>
        </div>


        <div className="flex flex-wrap gap-4">
          <Link className="text-cyan-300 hover:underline" href={site.links.linkedin}>
            LinkedIn
          </Link>
          <Link className="text-green-300 hover:underline" href={site.links.github}>
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

function IconWrap({ children, active }: { children: React.ReactNode; active: boolean }) {
  return (
    <span
      className={[
        "inline-flex h-4 w-4 items-center justify-center",
        active ? "text-green-300" : "text-neutral-300",
      ].join(" ")}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <IconWrap active={active}>
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </IconWrap>
  );
}
function FolderIcon({ active }: { active: boolean }) {
  return (
    <IconWrap active={active}>
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3.5 6.5h6l2 2H20.5a1 1 0 0 1 1 1V19a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3.5 19V6.5Z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </IconWrap>
  );
}
function NoteIcon({ active }: { active: boolean }) {
  return (
    <IconWrap active={active}>
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3.5h10A1.5 1.5 0 0 1 18.5 5v14A1.5 1.5 0 0 1 17 20.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h8M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconWrap>
  );
}
function UserIcon({ active }: { active: boolean }) {
  return (
    <IconWrap active={active}>
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 12a4.2 4.2 0 1 0-4.2-4.2A4.2 4.2 0 0 0 12 12Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 20.5c1.4-4 13.6-4 15 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconWrap>
  );
}
function MailIcon({ active }: { active: boolean }) {
  return (
    <IconWrap active={active}>
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4.5 7.5h15A2 2 0 0 1 21.5 9.5v9A2 2 0 0 1 19.5 20.5h-15A2 2 0 0 1 2.5 18.5v-9A2 2 0 0 1 4.5 7.5Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 9l8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    </IconWrap>
  );
}
function FileIcon({ active }: { active: boolean }) {
  return (
    <IconWrap active={active}>
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3.5h7l3.5 3.5V20A1.5 1.5 0 0 1 16 21.5H7A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 3.5V8h4.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 12h8M8 15.5h8M8 19h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconWrap>
  );
}

function getMode(path: string) {
    if (path === "/") return "building scalable AI systems";
    if (path.startsWith("/projects")) return "exploring system architectures";
    if (path === "/about") return "technical foundation & background";
    if (path === "/contact") return "open to collaboration";
    if (path === "/resume") return "recruiter friendly overview";
    return "Software and AI engineering";
  }  