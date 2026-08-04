import Image from "next/image";
import Link from "next/link";
import { BrowserFrame } from "@/components/browser-frame";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.horseandradish.makeiteditable";

// Matches the faint film grain the promo video lays over every scene.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const features = [
  {
    title: "Live text editing",
    body: "Tap any text to rewrite content instantly, with bold, italic, colours and highlights from the toolbar.",
  },
  {
    title: "Image replacement",
    body: "Swap any photo on a site with an image from your gallery and see it render in place.",
  },
  {
    title: "Network monitor",
    body: "Track XHR and fetch calls with GraphQL detection, status colour-coding, and request bodies.",
  },
  {
    title: "JS injection",
    body: "Run custom JavaScript to test a fix or experiment with page state, without a laptop.",
  },
  {
    title: "Console logs",
    body: "Real-time capture with filtering by log, warn and error — plus search.",
  },
  {
    title: "Storage viewer",
    body: "Browse and edit localStorage, sessionStorage and cookies straight from the toolbar.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink font-sans text-white/80">
      {/* Colour environment, mirroring the promo video's own background stack:
          a deep base, a teal key light pooled up top, a cool rim from below,
          then a vignette and a whisper of grain. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1100px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(85%_70%_at_50%_18%,#0c5563_0%,#0a0c10_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_2%,#1e9dae_0%,transparent_62%)] opacity-45 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_100%,rgba(30,157,174,0.16)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_35%,transparent_38%,rgba(0,0,0,0.7)_100%)]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.045] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="relative">
        {/* Navigation */}
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="flex items-center gap-2.5 font-display text-[15px] font-medium tracking-tight text-white">
            <span className="size-2 rounded-[3px] bg-teal" />
            Web Editor
          </span>
          <div className="flex gap-7 text-[13px] text-white/55">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </nav>

        <main className="mx-auto max-w-6xl px-6">
          {/* Hero — stacked and centred on phones, split into copy | product
              columns once there is room for the video to sit alongside. */}
          <section className="grid items-center gap-14 pt-16 pb-24 sm:pt-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:pt-28">
            <div className="text-center lg:text-left">
              <p className="rise font-mono text-[11px] tracking-[0.22em] text-teal uppercase">
                Android · DevTools in your pocket
              </p>
              <h1
                className="rise mx-auto mt-6 max-w-3xl font-display text-4xl font-medium tracking-[-0.03em] text-balance text-white sm:text-6xl lg:mx-0 lg:text-5xl xl:text-6xl"
                style={{ animationDelay: "80ms" }}
              >
                Inspect &amp; edit any website.
              </h1>
              <p
                className="rise mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-pretty text-muted sm:text-lg lg:mx-0"
                style={{ animationDelay: "160ms" }}
              >
                Edit text and images, inspect HTML, monitor network, and debug
                any website — right from your phone.
              </p>
            </div>

            <div>
              {/* Safari window holding the product footage */}
              <div
                className="rise relative mx-auto max-w-4xl"
                style={{ animationDelay: "240ms" }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-16 -inset-y-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(30,157,174,0.28)_0%,transparent_70%)] blur-2xl"
                />
                <div className="relative">
                  <BrowserFrame url="example.com">
                    <video
                      src="/store-video.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                      className="size-full object-cover"
                    />
                  </BrowserFrame>
                </div>
              </div>

              {/* Google Play badge — official asset, unmodified. The PNG's
                  transparent margin is the required clear space, so it is never
                  cropped and the aspect ratio is preserved. */}
              <div
                className="rise mt-10 flex justify-center"
                style={{ animationDelay: "340ms" }}
              >
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-opacity hover:opacity-85"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={646}
                    height={250}
                    unoptimized
                    priority
                    className="h-[72px] w-auto sm:h-[88px]"
                  />
                </a>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="border-t border-white/8 py-20">
            <h2 className="font-mono text-[11px] tracking-[0.22em] text-teal uppercase">
              What&apos;s inside
            </h2>
            <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <div key={feature.title}>
                  <span className="font-mono text-[11px] text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Privacy */}
          <section className="border-t border-white/8 py-24 text-center">
            <p className="font-mono text-[11px] tracking-[0.22em] text-teal uppercase">
              Private by design
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-display text-3xl font-medium tracking-[-0.02em] text-balance text-white sm:text-5xl">
              Every change stays on your device.
            </p>
            <p className="mt-5 text-[15px] text-muted">
              Nothing is uploaded. It&apos;s your private canvas.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/8">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-sm text-white/50">
              Serious tools.{" "}
              <span className="font-semibold text-orange">
                Zero seriousness.
              </span>
            </p>
            <Link
              href="/privacy-policy"
              className="text-[13px] text-white/50 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="mx-auto max-w-6xl px-6 pb-10">
            <p className="text-[11px] text-white/30">
              Google Play and the Google Play logo are trademarks of Google LLC.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
