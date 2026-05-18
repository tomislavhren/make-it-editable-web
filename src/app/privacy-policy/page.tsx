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

const LAST_UPDATED = "May 18, 2026";
const SUPPORT_EMAIL = "tomislav@horseandradish.hr";
const JURISDICTION = "Republic of Croatia";

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
            Last Updated: <time dateTime="2026-05-18">{LAST_UPDATED}</time>
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
            ["#permissions", "3. Permissions"],
            ["#data", "4. Information We Collect"],
            ["#third-parties", "5. Third-Party Services"],
            ["#security", "6. Security & Local Storage"],
            ["#rights", "7. Your Rights (GDPR)"],
            ["#children", "8. Children's Privacy"],
            ["#responsibilities", "9. User Responsibilities"],
            ["#disclaimer", "10. Disclaimer"],
            ["#law", "11. Governing Law"],
            ["#changes", "12. Changes to This Policy"],
            ["#contact", "13. Contact Us"],
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
          <p>
            This policy covers both the <strong>Make It Editable</strong>{" "}
            Android app distributed on Google Play and the marketing website at{" "}
            <a href="https://makeiteditable.com">makeiteditable.com</a>.
          </p>
        </section>

        {/* 2. About the App */}
        <section
          id="about"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>2. About the App</h2>
          <p>Make It Editable lets you:</p>
          <ul>
            <li>
              Enter or paste a website URL and open it in a full-screen
              WebView.
            </li>
            <li>
              Open multiple tabs and navigate between them.
            </li>
            <li>
              Toggle edit mode, which temporarily applies the{" "}
              <code>contenteditable</code> attribute to the page so you can
              modify text. All changes are temporary and disappear when the
              page is refreshed or closed.
            </li>
            <li>
              Apply text formatting (bold, italic, underline, and similar) to
              the page you are viewing.
            </li>
            <li>
              Replace images on the page with photos from your device&apos;s
              photo library or camera.
            </li>
            <li>
              Take a screenshot of the WebView and share it via your
              device&apos;s native share sheet.
            </li>
            <li>
              Use built-in developer tools: a network panel, a console logs
              panel, an element inspector, and a JavaScript injection tool.
            </li>
          </ul>
          <p>
            <strong>Intended use:</strong> entertainment, testing, and
            demonstrations (for example, previewing content changes before
            implementing them).
          </p>
        </section>

        {/* 3. Permissions */}
        <section
          id="permissions"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>3. Permissions</h2>
          <p>
            The app requests the following permissions. We do not use them to
            collect data about you; they are granted to the underlying OS
            features the app relies on.
          </p>
          <ul>
            <li>
              <strong>Photo library</strong> — so you can pick an image from
              your device to replace an image on the page.
            </li>
            <li>
              <strong>Camera</strong> — so you can capture a new photo to use
              as a replacement image.
            </li>
            <li>
              <strong>Microphone / audio recording</strong> — so websites
              loaded inside the WebView can request microphone access (for
              example, voice-enabled pages). We do not record audio ourselves.
            </li>
            <li>
              <strong>Storage</strong> (legacy Android 12 and earlier) — to
              save screenshots through the system share sheet.
            </li>
            <li>
              <strong>System overlay</strong> (Android) — used by the floating
              toolbar UI.
            </li>
            <li>
              <strong>Internet and network state</strong> — required for the
              WebView to load websites.
            </li>
            <li>
              <strong>Vibration</strong> — for haptic feedback on toolbar
              interactions.
            </li>
          </ul>
        </section>

        {/* 4. Information We Collect */}
        <section
          id="data"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>4. Information We Collect</h2>
          <p>
            We do not require registration, login, or any personally
            identifying information to use the app.
          </p>
          <p>
            We use <strong>PostHog</strong> (EU host:{" "}
            <code>eu.i.posthog.com</code>) to collect anonymous product
            analytics. PostHog assigns a random device ID; we do not link this
            to your name, email, or other identifiers.
          </p>
          <p>
            We record screen views and the following events:
          </p>
          <ul>
            <li><code>website_preview_started</code> — includes the URL you entered (origin and path only)</li>
            <li><code>settings_opened</code></li>
            <li><code>new_tab_created</code> — includes the new tab URL (origin and path only)</li>
            <li><code>tab_closed</code> — includes the number of remaining tabs</li>
            <li><code>tab_switched</code> — includes the total number of open tabs</li>
            <li><code>screenshot_shared</code> — includes the current tab URL (origin and path only)</li>
            <li><code>edit_mode_toggled</code> — includes whether edit mode was enabled or disabled</li>
            <li><code>formatting_applied</code> — includes the formatting command used</li>
            <li><code>image_replaced</code> — includes the MIME type of the image</li>
            <li><code>network_panel_opened</code></li>
            <li><code>logs_panel_opened</code></li>
            <li><code>element_inspector_opened</code></li>
            <li><code>javascript_injected</code> — includes the length (not the contents) of the injected code</li>
            <li><code>ai_js_generated</code> — includes the AI provider ID, model ID, and generated code length</li>
            <li><code>ai_js_generation_failed</code> — includes the AI provider ID and error message</li>
            <li><code>storage_item_set</code>, <code>storage_item_deleted</code>, <code>storage_cleared</code> — includes which storage type was affected (localStorage, sessionStorage, or cookies); never includes keys or values</li>
            <li><code>paywall_shown</code>, <code>paywall_dismissed</code> — includes the trigger and outcome</li>
            <li><code>purchase_started</code>, <code>purchase_completed</code>, <code>purchase_cancelled</code>, <code>purchase_failed</code> — includes the product ID</li>
            <li><code>restore_completed</code>, <code>restore_failed</code></li>
            <li><code>whats_new_completed</code>, <code>whats_new_skipped</code> — includes the app version and, for skips, the step number</li>
            <li><code>webview_error_occurred</code> — includes the URL (origin and path only), error code, and error description</li>
            <li><code>app_crash</code> — includes the error name and message</li>
          </ul>
          <p>
            PostHog also auto-captures screen views (<code>screen</code>
            events) containing the in-app pathname and the previous screen.
            URLs passed as route parameters are scrubbed to origin and pathname
            only — query strings and fragments (which may contain tokens or
            other sensitive values) are never sent.
          </p>
          <p>
            We <strong>do not</strong> collect the contents of the pages you
            view, the edits you make, the screenshots you take, the
            JavaScript you inject, or the network requests and console logs
            displayed in the developer tools.
          </p>
          <p>
            <strong>Third-party sites in the WebView.</strong> Websites you
            load inside the WebView may set their own cookies, run their own
            analytics, and request their own permissions. Those activities are
            governed by the privacy policies of those sites, not by this one.
          </p>
        </section>

        {/* 5. Third-Party Services */}
        <section
          id="third-parties"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>5. Third-Party Services</h2>
          <p>
            <strong>PostHog</strong> acts as a data processor for the anonymous
            analytics described in Section 4. Events are sent to PostHog&apos;s
            EU region. See{" "}
            <a
              href="https://posthog.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              posthog.com/privacy
            </a>{" "}
            for details.
          </p>
          <p>
            <strong>RevenueCat</strong> manages in-app subscriptions and
            purchase verification. When you purchase or restore a subscription,
            RevenueCat processes your app user ID and purchase receipt. No
            payment card data passes through RevenueCat — payment is handled
            entirely by Google Play. See{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              revenuecat.com/privacy
            </a>
            .
          </p>
          <p>
            <strong>AI providers (OpenAI, Anthropic, Google).</strong> The AI
            JavaScript assistant is an optional feature that requires you to
            supply your own API key in Settings. When you use it, your prompt
            is sent directly from your device to your chosen provider. We do
            not proxy, store, or log these requests. The API key itself is
            stored only in your device&apos;s secure keystore and never
            transmitted to us. Refer to your provider&apos;s own privacy policy
            for how they handle API requests.
          </p>
          <p>
            <strong>Google Play</strong> distributes the app and processes
            subscription payments. When you install, update, or purchase a
            subscription, Google Play processes data in accordance with its own
            policy:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              Google Privacy Policy
            </a>
            .
          </p>
          <p>
            <strong>Expo / EAS Update.</strong> The app checks for over-the-air
            updates via Expo&apos;s EAS Update service (<code>u.expo.dev</code>).
            This request includes device and build metadata needed to serve
            the correct update bundle. See{" "}
            <a
              href="https://expo.dev/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              expo.dev/privacy
            </a>
            .
          </p>
          <p>No advertising networks or ad SDKs are integrated.</p>
        </section>

        {/* 6. Security & Local Storage */}
        <section
          id="security"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>6. Security &amp; Local Storage</h2>
          <p>
            Your edits and screenshots remain on your device unless you choose
            to share them through the system share sheet. We do not upload
            them and do not have access to them.
          </p>
          <p>
            The app stores the following data locally on your device:
          </p>
          <ul>
            <li>
              <code>@whats_new_version</code> — which version of the
              &quot;What&apos;s New&quot; screen you last saw.
            </li>
            <li>
              <code>@toolbar_intro_shown</code> — whether the toolbar intro
              screen has been shown.
            </li>
            <li>
              <strong>AI provider API keys</strong> — if you set up the AI
              assistant, your API key is stored in your device&apos;s secure
              keystore (iOS Keychain / Android Keystore). It is never
              transmitted to us and is only used to make requests directly to
              your chosen AI provider.
            </li>
          </ul>
          <p>
            None of this data contains personal information and none of it is
            shared with us.
          </p>
        </section>

        {/* 7. Your Rights (GDPR) */}
        <section
          id="rights"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>7. Your Rights (GDPR)</h2>
          <p>
            <strong>Data controller:</strong> the developer of Make It
            Editable, reachable at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
          <p>
            <strong>Legal basis.</strong> We rely on our legitimate interest
            (GDPR Art. 6(1)(f)) in understanding product usage and diagnosing
            errors to process the anonymous analytics described in Section 4.
            Distribution through Google Play is processed on the basis of
            contract performance.
          </p>
          <p>
            <strong>Retention.</strong> Anonymous analytics events are retained
            for up to 12 months and then deleted or aggregated by PostHog in
            line with our project configuration. Local device storage is
            retained until you clear the app&apos;s data or uninstall the app.
          </p>
          <p>
            <strong>Your rights.</strong> Subject to applicable law, you have
            the right to access, rectify, erase, restrict, object to, and
            port the personal data we process about you. Because analytics are
            tied only to a random device ID, requests to exercise these rights
            may require you to provide that device ID (available on request)
            so we can locate the relevant events.
          </p>
          <p>
            <strong>How to exercise your rights.</strong> Email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We respond
            within 30 days.
          </p>
          <p>
            <strong>Right to complain.</strong> You may lodge a complaint with
            the Croatian Personal Data Protection Agency (AZOP) at{" "}
            <a
              href="https://azop.hr"
              target="_blank"
              rel="noreferrer noopener"
            >
              azop.hr
            </a>
            , or with the supervisory authority in your country of residence.
          </p>
        </section>

        {/* 8. Children's Privacy */}
        <section
          id="children"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Make It Editable is not directed at children under the age of 13
            and we do not knowingly collect personal data from children. If
            you believe a child has used the app and would like their
            associated anonymous analytics data deleted, contact us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </section>

        {/* 9. User Responsibilities */}
        <section
          id="responsibilities"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>9. User Responsibilities</h2>
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
              the modifications you make, the code you inject, and any
              screenshots you create or share.
            </li>
            <li>
              Misuse may result in access being blocked at the developer&apos;s
              discretion.
            </li>
          </ul>
        </section>

        {/* 10. Disclaimer */}
        <section
          id="disclaimer"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>10. Disclaimer</h2>
          <p>
            The app is provided <strong>&quot;as is&quot; and &quot;as available.&quot;</strong>{" "}
            We make no warranties regarding accuracy, reliability, or fitness
            for a particular purpose. We are not liable for any damages, legal
            issues, or disputes arising from your use of the app, including
            misrepresentation of edited content.
          </p>
        </section>

        {/* 11. Governing Law */}
        <section id="law" className="prose prose-invert prose-slate max-w-none">
          <h2>11. Governing Law</h2>
          <p>
            This Privacy Policy and Disclaimer are governed by the laws of the{" "}
            {JURISDICTION}. Any disputes will be resolved in the courts of the{" "}
            {JURISDICTION}.
          </p>
        </section>

        {/* 12. Changes to This Policy */}
        <section
          id="changes"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this page from time to time. Material changes will be
            reflected by an updated <em>Last Updated</em> date above. Where
            required by law, we will seek your consent.
          </p>
        </section>

        {/* 13. Contact Us */}
        <section
          id="contact"
          className="prose prose-invert prose-slate max-w-none"
        >
          <h2>13. Contact Us</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </section>
    </main>
  );
}
