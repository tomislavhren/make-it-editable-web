"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const features = [
  "Edit content",
  "Share screenshot",
  "Network requests",
  "Inject JS",
  "Inspect element",
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-full bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-4xl mx-auto">
        <Link href="/" className="text-lg font-semibold">
          Make it editable
        </Link>
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
        <div className="relative w-[272px] h-[556px]">
          {/* Outer shell with side buttons */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-gray-700 to-gray-800 shadow-2xl" />
          {/* Power button (right side) */}
          <div className="absolute right-[-3px] top-[140px] w-[3px] h-[48px] rounded-r bg-gray-600" />
          {/* Volume buttons (left side) */}
          <div className="absolute left-[-3px] top-[120px] w-[3px] h-[32px] rounded-l bg-gray-600" />
          <div className="absolute left-[-3px] top-[164px] w-[3px] h-[32px] rounded-l bg-gray-600" />

          {/* Screen bezel area */}
          <div className="absolute inset-[4px] rounded-[2.6rem] bg-black">
            {/* Screen */}
            <div className="absolute inset-[4px] rounded-[2.3rem] bg-gray-100 overflow-hidden">
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] text-gray-500">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                  </svg>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                  </svg>
                </div>
              </div>

              {/* Placeholder content */}
              <div className="flex flex-col items-center justify-center h-[calc(100%-60px)] text-gray-400 text-sm text-center px-6">
                <svg className="w-12 h-12 mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                App preview coming soon
              </div>

              {/* Bottom navigation bar */}
              <div className="absolute bottom-0 inset-x-0 pb-2 pt-1 flex justify-center">
                <div className="w-28 h-1 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Google Play badge */}
        <a
          href="https://play.google.com/store/apps/details?id=com.nicedaytodye.makeiteditable&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          <Image
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            width={200}
            height={77}
            unoptimized
          />
        </a>

        {/* Feature pills */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <button
              key={feature}
              onClick={() =>
                setSelected(selected === feature ? null : feature)
              }
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors cursor-pointer ${
                selected === feature
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-200 shadow-sm hover:border-gray-400"
              }`}
            >
              {feature}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
