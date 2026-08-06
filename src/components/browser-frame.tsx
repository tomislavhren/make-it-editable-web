import type { ReactNode } from "react";

/**
 * A macOS Safari window, drawn entirely in CSS and SVG — no chrome screenshots.
 * `children` fills the content area at 16:9, which is what a browser viewport
 * looks like, so footage dropped in here reads as a real page.
 */
export function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#26262a] shadow-[0_2px_1px_rgba(255,255,255,0.08)_inset,0_40px_90px_-20px_rgba(0,0,0,0.85)] sm:rounded-2xl">
      {/* Toolbar */}
      <div className="flex h-10 items-center gap-3 border-b border-black/40 bg-gradient-to-b from-[#2e2e33] to-[#232327] px-3 sm:h-12 sm:gap-4 sm:px-4">
        {/* Traffic lights */}
        <div className="flex shrink-0 gap-1.5 sm:gap-2">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* Sidebar + history controls */}
        <div className="hidden shrink-0 items-center gap-3 text-white/45 sm:flex">
          <SidebarIcon />
          <ChevronIcon direction="left" />
          <ChevronIcon direction="right" className="opacity-40" />
        </div>

        {/* Address field */}
        <div className="mx-auto flex min-w-0 max-w-xs flex-1 items-center justify-center gap-1.5 rounded-md bg-white/8 px-3 py-1 sm:max-w-sm">
          <LockIcon />
          <span className="truncate font-mono text-[11px] tracking-tight text-white/55">
            {url}
          </span>
        </div>

        {/* Trailing controls */}
        <div className="hidden shrink-0 items-center gap-3.5 text-white/45 sm:flex">
          <ShareIcon />
          <PlusIcon />
          <TabsIcon />
        </div>
      </div>

      {/* Viewport */}
      <div className="aspect-video bg-black">{children}</div>
    </div>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function SidebarIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
      <rect x="1.5" y="2.5" width="13" height="11" rx="2.5" {...stroke} />
      <path d="M6 2.5v11" {...stroke} />
    </svg>
  );
}

function ChevronIcon({
  direction,
  className,
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <svg viewBox="0 0 16 16" className={`size-4 ${className ?? ""}`} aria-hidden="true">
      <path d={direction === "left" ? "M10 3.5L5.5 8l4.5 4.5" : "M6 3.5L10.5 8 6 12.5"} {...stroke} />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3 shrink-0 text-white/40" aria-hidden="true">
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.75" {...stroke} />
      <path d="M5.75 7V5a2.25 2.25 0 014.5 0v2" {...stroke} />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
      <path d="M8 10.5V2.5M5.5 5L8 2.5 10.5 5" {...stroke} />
      <path d="M3.5 8.5v4a1 1 0 001 1h7a1 1 0 001-1v-4" {...stroke} />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
      <path d="M8 3.5v9M3.5 8h9" {...stroke} />
    </svg>
  );
}

function TabsIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
      <rect x="1.5" y="4" width="9" height="8" rx="2" {...stroke} />
      <path d="M5.5 4V3.5a1.5 1.5 0 011.5-1.5h5.5A1.5 1.5 0 0114 3.5V9a1.5 1.5 0 01-1.5 1.5H12" {...stroke} />
    </svg>
  );
}
