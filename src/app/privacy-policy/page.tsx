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

const LAST_UPDATED = "October 7, 2026";
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
            Last Updated: <time dateTime="2026-10-07">{LAST_UPDATED}</time>
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
              photo library.
            </li>
            <li>
              Take a screenshot of the WebView and either share it via your
              device&apos;s native share sheet or save it directly to your
              device&apos;s photo library.
            </li>
            <li>
              Use built-in developer tools: a network panel (with the option to
              copy a request as a cURL command or <code>fetch()</code> call), a
              console logs panel, an element inspector, an in-page HTML and
              page-source editor, a per-site custom CSS editor, and a JavaScript
              injection tool that lets you save snippets (saved scripts) to run
              manually or automatically when a site you choose loads.
            </li>
            <li>
              Open an HTML or MHTML page you have saved on your device and edit
              it in the same way as a live page.
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
          <p>
            <strong>
              Camera, microphone, and location exist for one reason only: so
              that the websites you open behave the way they would in any other
              browser.
            </strong>{" "}
            The app itself never opens your camera, never records audio, and
            never reads your location — it contains no code that does any of
            those things. It holds these permissions purely so it can pass a
            website&apos;s request on to Android, exactly as Chrome or Firefox
            would. Android still shows you its own prompt before any page is
            granted access, you can refuse or revoke it at any time, and nothing
            captured this way is ever sent to us, stored by us, or used for
            analytics, advertising, or profiling of any kind.
          </p>
          <ul>
            <li>
              <strong>Photo library</strong> — so you can pick an image from
              your device to replace an image on the page, and so the app can
              save screenshots you capture to your photo library.
            </li>
            <li>
              <strong>Camera</strong> — so websites loaded inside the WebView
              can request camera access (for example, video-calling or
              QR-scanning pages). Nothing else in the app uses the camera.
            </li>
            <li>
              <strong>Microphone / audio recording</strong> — so websites
              loaded inside the WebView can request microphone access (for
              example, voice-enabled pages). Nothing else in the app uses the
              microphone.
            </li>
            <li>
              <strong>Location</strong> — so websites loaded inside the WebView
              can request your location through the standard browser
              geolocation API (for example, map and store-finder pages).
              Nothing else in the app uses your location.
            </li>
            <li>
              <strong>Storage</strong> (legacy Android 12 and earlier) — to
              save screenshots, whether through the system share sheet or
              directly to your photo library.
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
            <li><code>html_editor_opened</code>, <code>html_edit_applied</code> — includes which editor was used (element, page source, or custom CSS)</li>
            <li><code>custom_css_saved</code> — includes the length (not the contents) of the CSS and whether it was cleared</li>
            <li><code>local_file_opened</code> — includes the file type (HTML or MHTML) and whether it was converted; never the file name or its contents</li>
            <li><code>local_file_open_failed</code> — includes the error message</li>
            <li><code>user_agent_panel_opened</code></li>
            <li><code>user_agent_changed</code> — includes whether the device default was chosen and the length (not the value) of the user agent</li>
            <li><code>bookmark_created</code>, <code>bookmark_updated</code>, <code>bookmark_deleted</code> — includes whether a user agent is set and the number of query parameters; never the name or URL</li>
            <li><code>bookmark_opened</code>, <code>bookmark_capture_opened</code> — includes the URL (origin and path only)</li>
            <li><code>screenshot_saved</code> — includes the current tab URL (origin and path only)</li>
            <li><code>webview_external_handoff</code> — includes the URL the page tried to open (origin and path only) and whether it opened</li>
            <li><code>webview_load_succeeded</code> — includes the hostname and the URL (origin and path only)</li>
            <li><code>javascript_injected</code> — includes the length (not the contents) of the injected code</li>
            <li><code>javascript_inject_result</code> — includes whether the script succeeded, the error&apos;s name only (for example &quot;TypeError&quot;; never the message), and whether it was an automatic run</li>
            <li><code>script_saved</code> — includes whether the script is new, how many auto-run rules it has, and the length (not the contents) of the code</li>
            <li><code>script_deleted</code>, <code>script_run_from_list</code></li>
            <li><code>script_auto_run</code> — includes the configured delay</li>
            <li><code>ai_js_generated</code> — includes the AI provider ID, model ID, and generated code length</li>
            <li><code>ai_js_generation_failed</code> — includes the AI provider ID and error message</li>
            <li><code>ai_html_edit_generated</code>, <code>ai_html_edit_failed</code> — includes which editor was used and the generated code length (or the error message); never the page content sent to the provider</li>
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
            <strong>Performance metrics (EAS Observe).</strong> We use
            Expo&apos;s EAS Observe service to collect anonymous
            app-performance measurements — such as cold and warm launch times,
            time to first render, time to interactive, and JavaScript bundle
            load time. These are keyed to an anonymous, installation-specific
            identifier that is not linked to your name, email, or other
            identifiers and that resets if you reinstall the app. No page
            content, edits, or browsing activity is included.
          </p>
          <p>
            We <strong>do not</strong> collect the contents of the pages you
            view, the edits you make, the screenshots you take, the
            JavaScript you inject, or the network requests and console logs
            displayed in the developer tools. The scripts you save, and anything
            you copy from the developer tools (such as a request copied as cURL,
            which includes that site&apos;s cookies), stay on your device and
            clipboard and are never sent to us.
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
            assistants are optional features that require you to supply your own
            API key in Settings. When you use one, the request is sent directly
            from your device to your chosen provider.
          </p>
          <p>
            <strong>
              What is included in an AI request.
            </strong>{" "}
            Alongside the instruction you type, the request contains the content
            you asked the assistant to work on, taken from the page you are
            viewing:
          </p>
          <ul>
            <li>
              <strong>HTML editor</strong> — the HTML of the element you
              selected, or the full page source if you are editing the whole
              page.
            </li>
            <li>
              <strong>Custom CSS editor</strong> — the custom CSS you have
              written for that site.
            </li>
            <li>
              <strong>JavaScript assistant</strong> — your instruction only.
            </li>
          </ul>
          <p>
            This content is truncated to 30,000 characters and is sent only when
            you actively submit an AI request — never in the background and
            never for pages you simply view. If the page you are editing
            contains personal or confidential information, that information will
            be part of the request. We do not proxy, store, or log these
            requests; they go straight from your device to the provider. The API
            key itself is stored only in your device&apos;s secure keystore and
            never transmitted to us. Refer to your provider&apos;s own privacy
            policy for how they handle API requests.
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
          <p>
            <strong>Expo / EAS Observe.</strong> The app sends the anonymous
            performance metrics described in Section 4 to Expo&apos;s EAS
            Observe service. See{" "}
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
              <code>@toolbar_position</code> — where you last docked the
              floating toolbar (top or bottom edge).
            </li>
            <li>
              <code>@developer_mode_unlocked</code> — whether the developer
              tools have been unlocked.
            </li>
            <li>
              <code>@bookmarks</code> — your Quick Access entries: the name,
              URL, query parameters, user agent, and favicon URL you saved for
              each one.
            </li>
            <li>
              <code>@user_agent_override</code> — the user agent you chose to
              present to websites, if you set one.
            </li>
            <li>
              <code>@custom_css_by_origin</code> — the custom CSS you have
              written, stored per website origin so it can be re-applied when
              you return to that site.
            </li>
            <li>
              <code>@saved_scripts</code> — the JavaScript snippets you saved:
              each one&apos;s name and code, and the sites (and optional paths
              and delays) where it runs automatically.
            </li>
            <li>
              <code>@ai_active_provider</code>, <code>@ai_model_*</code> — which
              AI provider and model you selected.
            </li>
            <li>
              <strong>Locally opened pages</strong> — when you open an HTML or
              MHTML file from your device, a copy is placed in the app&apos;s
              own cache directory so the in-app browser can load it. It stays on
              your device, is never uploaded, and is removed when you clear the
              app&apos;s data or the operating system reclaims the cache.
            </li>
            <li>
              <strong>AI provider API keys</strong> — if you set up an AI
              assistant, your API key is stored in your device&apos;s secure
              keystore (iOS Keychain / Android Keystore). It is never
              transmitted to us and is only used to make requests directly to
              your chosen AI provider.
            </li>
          </ul>
          <p>
            None of this data is transmitted to us or to any third party. Some
            of it — a bookmarked URL, or a page you opened from your device —
            may contain information that is personal to you; it stays on your
            device, and clearing the app&apos;s data removes it.
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
