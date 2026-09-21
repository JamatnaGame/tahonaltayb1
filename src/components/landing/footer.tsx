import { Mail, Phone } from "lucide-react";
import { MillMark } from "@/components/mill-mark";
import { Button } from "@/components/ui/button";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SLOGAN,
  STORE_NAME,
  STORE_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-cream/10 text-cream">
                <MillMark className="size-6" />
              </span>
              <span className="font-display text-2xl">{STORE_NAME}</span>
            </div>
            <p className="mt-4 max-w-md font-display text-xl text-cream/80">
              {SLOGAN}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/60">
              أهلاً بك في طاحون الطيب. تصفح المتجر واكتشف تشكيلة البر البلدي
              والعضوي والخلطات والعسل — أعددناها لتليق بمائدتك.
            </p>
            <Button asChild variant="inverse" className="mt-6">
              <a href={STORE_URL} target="_blank" rel="noreferrer">
                افتح المتجر
              </a>
            </Button>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-sm tracking-wide text-cream/50">تواصل</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2 text-cream/85 hover:text-cream"
                  >
                    <Phone className="size-4" />
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/85 hover:text-cream"
                  >
                    واتساب
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 break-all text-cream/85 hover:text-cream"
                  >
                    <Mail className="size-4 shrink-0" />
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/85 hover:text-cream"
                  >
                    تيك توك @altieb_tahon
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm tracking-wide text-cream/50">المتجر</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`${STORE_URL}categories/1622563/البر`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/85 hover:text-cream"
                  >
                    البر
                  </a>
                </li>
                <li>
                  <a
                    href={`${STORE_URL}categories/1622564/الخلطات`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/85 hover:text-cream"
                  >
                    الخلطات
                  </a>
                </li>
                <li>
                  <a
                    href={`${STORE_URL}categories/1622566/السمن-والعسل`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/85 hover:text-cream"
                  >
                    السمن والعسل
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-14 border-t border-cream/10 pt-6 text-xs text-cream/45">
          {STORE_NAME} · المتجر على منصة زد · الشراء يتم عبر tahunaltayib.zid.store
        </p>
      </div>
    </footer>
  );
}
