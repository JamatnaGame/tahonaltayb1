import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MillMark } from "@/components/mill-mark";
import { STORE_NAME, STORE_URL } from "@/data/site";

const LINKS = [
  { href: "#origins", label: "المناطق" },
  { href: "#products", label: "المنتجات" },
  { href: "#craft", label: "الطاحون" },
  { href: "#faq", label: "أسئلة" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-fg">
          <span className="flex size-9 items-center justify-center rounded-full bg-surface-2 text-primary">
            <MillMark className="size-6" />
          </span>
          <span className="font-display text-xl leading-none">{STORE_NAME}</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-[var(--motion-quick)] hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={STORE_URL} target="_blank" rel="noreferrer">
              تسوق الآن
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-fg md:hidden"
            aria-expanded={open}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-fg hover:bg-surface-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href={STORE_URL} target="_blank" rel="noreferrer">
                تسوق من المتجر
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
