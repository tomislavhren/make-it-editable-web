// app/privacy-policy/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Make It Editable – Privacy Policy & Disclaimer",
  description:
    "Privacy Policy and Disclaimer for the Make It Editable mobile application.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "September 25, 2025"; // Update if you revise the policy
const SUPPORT_EMAIL = "tomislav@horseandradish.hr"; // TODO: replace with your support email
const JURISDICTION = "Croatia"; // TODO: replace with governing law location

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-4xl px-5 py-12">
        <header className="mb-10 border-b border-slate-800 pb-6">
          <p className="mb-2 inline-block rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Privacy Policy & Disclaimer
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            App Name:{" "}
            <span className="font-medium text-slate-200">Make It Editable</span>
            <span className="mx-2">•</span>
            Last Updated: <time dateTime="2025-09-25">{LAST_UPDATED}</time>
          </p>
        </header>

        {/* Table of Contents */}
        <nav
          aria-label="Table of contents"
          className="mb-10 grid gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:grid-cols-2"
        >
          {[
            ["#introduction", "1. Introduction"],
            ["#about", "2. About the App"],
            ["#data", "3. Information We Collect"],
            ["#payments", "4. Subscriptions & Payments"],
            ["#third-parties", "5. Third-Party Services"],
            ["#security", "6. Security"],
            ["#responsibilities", "7. User Responsibilities"],
            ["#disclaimer", "8. Disclaimer"],
            ["#law", "9. Governing Law"],
            ["#changes", "10. Changes to This Policy"],
            ["#contact", "11. Contact Us"],
          ].map(([href, label]) => (
            <Link
              key={href as string}
              href={href as string}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 underline-offset-4 hover:underline"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 1. Introduction */}
        <section
          id="introduction"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Make It Editable</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            This Privacy Policy and Disclaimer explain how we handle user data,
            your responsibilities, and the limitations of our liability. By
            using the app, you agree to this policy and disclaimer. If you do
            not agree, please discontinue use.
          </p>
        </section>

        {/* 2. About the App */}
        <section
          id="about"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>2. About the App</h2>
          <ul>
            <li>
              Enter or paste any website URL, which opens inside a full-screen
              WebView.
            </li>
            <li>
              Optionally enable content editing, which temporarily applies the
              <code> contenteditable </code> attribute to the page so you can
              modify text for fun, testing, or demo purposes. Modifications are
              temporary and disappear when the page is refreshed or closed.
            </li>
            <li>
              Take a screenshot of the WebView and share it using your
              device&apos;s native share options.
            </li>
          </ul>
          <p>
            <strong>Intended use:</strong> Entertainment and testing only (for
            example, to preview content changes before implementing them). The
            app does not require registration and does not request any device
            permissions.
          </p>
        </section>

        {/* 3. Information We Collect */}
        <section
          id="data"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>3. Information We Collect</h2>
          <p>
            We{" "}
            <strong>
              do not collect, store, or process personal information
            </strong>{" "}
            from users. Specifically:
          </p>
          <ul>
            <li>No account creation or registration.</li>
            <li>No tracking of visited URLs or edits made.</li>
            <li>No analytics, cookies, or advertising identifiers.</li>
          </ul>
          <p>
            Because no personal data is collected, many data protection
            obligations do not apply. If this changes in the future, we will
            update this page and, where legally required, request consent.
          </p>
        </section>

        {/* 4. Subscriptions & Payments */}
        <section
          id="payments"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>4. Subscriptions &amp; Payments</h2>
          <ul>
            <li>
              <strong>Free trial:</strong> One edit per day.
            </li>
            <li>
              <strong>Monthly subscription:</strong> Unlimited access.
            </li>
            <li>
              <strong>One-time purchase:</strong> Lifetime access.
            </li>
          </ul>
          <p>
            Purchases and subscriptions are processed by the respective app
            stores. We do not have access to or store your payment information.
            Please refer to the privacy policies of these providers for details:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer noopener"
              >
                Google Play Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Apple Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        {/* 5. Third-Party Services */}
        <section
          id="third-parties"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>5. Third-Party Services</h2>
          <p>
            The app does not include analytics SDKs, advertising networks, or
            trackers. Any data processed by platform billing and distribution
            (Google Play / Apple App Store) is governed by their policies above.
          </p>
        </section>

        {/* 6. Security */}
        <section
          id="security"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>6. Security</h2>
          <p>
            We do not store your edits or screenshots on our servers. Your
            changes occur locally in the device WebView and are lost upon
            refresh or closing the page unless you take action to share or save
            a screenshot.
          </p>
        </section>

        {/* 7. User Responsibilities */}
        <section
          id="responsibilities"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>7. User Responsibilities</h2>
          <ul>
            <li>
              Use the app only for lawful, ethical, and personal purposes.
            </li>
            <li>
              Do not use the app to spread misinformation, commit fraud, or
              violate the rights of others.
            </li>
            <li>
              You are solely responsible for the websites you choose to edit,
              the modifications you make, and any screenshots you create or
              share.
            </li>
            <li>
              Misuse is not allowed and may result in access being blocked at
              the developer&apos;s discretion.
            </li>
          </ul>
        </section>

        {/* 8. Disclaimer */}
        <section
          id="disclaimer"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>8. Disclaimer</h2>
          <p>
            The app is provided <strong>“as is” and “as available.”</strong> We
            make no warranties regarding accuracy, reliability, or fitness for a
            particular purpose. We are not liable for any damages, legal issues,
            or disputes arising from your use of the app, including
            misrepresentation of edited content.
          </p>
        </section>

        {/* 9. Governing Law */}
        <section id="law" className="prose prose-invert prose-slate max-w-none">
          <h2>9. Governing Law</h2>
          <p>
            This Privacy Policy and Disclaimer are governed by the laws of{" "}
            {JURISDICTION}. Any disputes will be resolved in the courts of{" "}
            {JURISDICTION}.
          </p>
        </section>

        {/* 10. Changes to This Policy */}
        <section
          id="changes"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this page from time to time. Material changes will be
            reflected by an updated <em>Last Updated</em> date above. Where
            required by law, we will seek your consent.
          </p>
        </section>

        {/* 11. Contact Us */}
        <section
          id="contact"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>11. Contact Us</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>

        {/* Footer blurb */}
        {/* <footer className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-400">
          <p>
            Compliance notes: Because the app does not collect personal data,
            obligations under frameworks like GDPR/CCPA are limited. If you
            later add data collection or third-party SDKs, update this page and
            your store listings accordingly.
          </p>
        </footer> */}
      </section>
    </main>
  );
}
