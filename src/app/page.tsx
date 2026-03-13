import Link from "next/link";

const features = [
  "Edit content",
  "Share screenshot",
  "Network requests",
  "Inject JS",
  "Inspect element",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-4xl mx-auto">
        <span className="text-lg font-semibold">Make it editable</span>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex flex-col items-center px-6 pt-12 pb-20">
        {/* Phone mockup */}
        <div className="w-64 h-[500px] rounded-[2.5rem] border-4 border-gray-800 bg-white shadow-xl relative overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-2xl" />
          {/* Placeholder screen */}
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400 text-sm text-center px-4">
            App preview coming soon
          </div>
        </div>

        {/* Play Store button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.nicedaytodye.makeiteditable"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92ZM14.852 13.06l2.346 2.346-9.876 5.528 7.53-7.874ZM17.921 8.27l2.664 1.492c.63.354.63 1.124 0 1.476l-2.664 1.492-2.582-2.73 2.582-2.73ZM7.322 3.066l9.876 5.528-2.346 2.346-7.53-7.874Z" />
          </svg>
          Get it on Google Play
        </a>

        {/* Feature pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <span
              key={feature}
              className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm"
            >
              {feature}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
