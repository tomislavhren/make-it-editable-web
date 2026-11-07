// app/terms-of-service/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Web Editor: Inspect & Edit – Terms of Service",
  description:
    "Terms of Service for the Web Editor: Inspect & Edit Android app, also known as Make It Editable.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/terms-of-service" },
};

const LAST_UPDATED = "November 7, 2026";
const COMPANY = "Truffl d.o.o.";
const ADDRESS = "Savska 13, 10291 Prudnice, Croatia";
const SUPPORT_EMAIL = "tomislav@horseandradish.hr";
const JURISDICTION = "Republic of Croatia";
const GOOGLE_PLAY_SUBSCRIPTIONS =
  "https://play.google.com/store/account/subscriptions";
const GOOGLE_PLAY_REFUNDS = "https://support.google.com/googleplay/answer/2479637";

// The site has no typography plugin, so `prose` classes would do nothing here.
const SECTION =
  "mt-10 text-slate-300 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-100 [&_li]:leading-7 [&_p]:mt-3 [&_p]:leading-7 [&_strong]:text-slate-100 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-4xl px-5 py-12">
        <header className="mb-10 border-b border-slate-800 pb-6">
          <p className="mb-2 inline-block rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            App Name:{" "}
            <span className="font-medium text-slate-200">
              Web Editor: Inspect & Edit
            </span>
            <span className="mx-2">•</span>
            Last Updated: <time dateTime="2026-11-07">{LAST_UPDATED}</time>
          </p>
        </header>

        {/* Table of Contents */}
        <nav
          aria-label="Table of contents"
          className="mb-10 grid gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:grid-cols-2"
        >
          {[
            ["#about-terms", "1. About These Terms"],
            ["#app", "2. The App"],
            ["#eligibility", "3. Who Can Use the App"],
            ["#right-to-use", "4. Your Right to Use the App"],
            ["#responsibilities", "5. Your Responsibilities"],
            ["#third-parties", "6. Websites and AI Providers"],
            ["#files", "7. Your Files"],
            ["#premium", "8. Premium Subscription"],
            ["#refunds", "9. Refunds and Your Consumer Rights"],
            ["#changes-to-app", "10. Changes to the App"],
            ["#liability", "11. Disclaimer and Liability"],
            ["#ending", "12. Ending Your Use"],
            ["#changes", "13. Changes to These Terms"],
            ["#law", "14. Governing Law"],
            ["#contact", "15. Contact Us"],
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

        {/* 1. About These Terms */}
        <section
          id="about-terms"
          className={SECTION}
        >
          <h2>1. About These Terms</h2>
          <p>
            These terms are a contract between you and{" "}
            <strong>{COMPANY}</strong>, {ADDRESS} (&quot;we,&quot; &quot;our,&quot;
            or &quot;us&quot;). They apply to the Android app{" "}
            <strong>Web Editor: Inspect & Edit</strong>, also known as Make It
            Editable (&quot;the app&quot;). By using the app, you agree to these
            terms. If you do not agree, please stop using it.
          </p>
          <p>
            Our <Link href="/privacy-policy">Privacy Policy</Link> explains how
            we handle your data.
          </p>
        </section>

        {/* 2. The App */}
        <section id="app" className={SECTION}>
          <h2>2. The App</h2>
          <p>
            The app opens web pages and lets you edit them on your device,
            inspect them with developer tools, run your own scripts, and save
            HTML files.
          </p>
          <p>
            Your edits change only your copy of a page. They do not change the
            website for anyone else. Scripts you run can send requests to a
            website, just as the page itself can, so check what a script does
            before you run it.
          </p>
          <p>
            Some features are free and others need a Premium subscription. The
            app shows which features need Premium.
          </p>
        </section>

        {/* 3. Who Can Use the App */}
        <section
          id="eligibility"
          className={SECTION}
        >
          <h2>3. Who Can Use the App</h2>
          <p>
            You must be at least 13 years old to use the app. If you are not yet
            an adult where you live, you need permission from a parent or
            guardian to buy Premium.
          </p>
        </section>

        {/* 4. Your Right to Use the App */}
        <section
          id="right-to-use"
          className={SECTION}
        >
          <h2>4. Your Right to Use the App</h2>
          <p>
            While you follow these terms, you may use the app on your own
            devices for personal or work purposes. This right is personal to you
            and you cannot transfer it. You may not copy, resell, or redistribute
            the app, or reverse engineer it except where the law allows.
          </p>
          <p>
            The app, its name, its design, and its code belong to us or our
            licensors. What you create with the app stays yours, subject to the
            rights of anyone whose content you used.
          </p>
        </section>

        {/* 5. Your Responsibilities */}
        <section
          id="responsibilities"
          className={SECTION}
        >
          <h2>5. Your Responsibilities</h2>
          <p>
            You are responsible for the websites you open, the edits you make,
            the scripts you run, the files you load, and anything you save or
            share. When you use the app, you agree to:
          </p>
          <ul>
            <li>Follow the law.</li>
            <li>
              Not use it to commit fraud, impersonate anyone, or spread false
              information. This includes presenting an edited page or screenshot
              as genuine to mislead someone.
            </li>
            <li>
              Test, override, or run scripts on a website only in ways you are
              allowed to. Do not use the app to attack a website, get around its
              security, or reach data you have no right to.
            </li>
            <li>
              Respect the copyright and other rights of anyone whose content you
              edit, save, or share.
            </li>
          </ul>
        </section>

        {/* 6. Websites and AI Providers */}
        <section
          id="third-parties"
          className={SECTION}
        >
          <h2>6. Websites and AI Providers</h2>
          <p>
            We do not control the websites you open. Their own terms still apply
            to you, and being able to open or edit a page in the app does not
            give you any rights to its content.
          </p>
          <p>
            The AI assistants are optional and use your own API key with the
            provider you choose, so that provider&apos;s terms and charges apply
            to you. AI output can be wrong or unsafe, so check it before you use
            or run it.
          </p>
        </section>

        {/* 7. Your Files */}
        <section
          id="files"
          className={SECTION}
        >
          <h2>7. Your Files</h2>
          <p>
            The files you save as Runners stay on your device. They are not
            uploaded to us, so we cannot recover them. Clearing the app&apos;s
            data or uninstalling the app can delete them, so keep your own copies
            of anything important.
          </p>
        </section>

        {/* 8. Premium Subscription */}
        <section
          id="premium"
          className={SECTION}
        >
          <h2>8. Premium Subscription</h2>
          <p>
            Premium is a subscription sold through Google Play. Google charges
            the payment method on your Google account, and Google Play&apos;s
            terms also apply to your purchase.
          </p>
          <ul>
            <li>
              <strong>Price.</strong> The price, billing period, and any free
              trial are shown on Google Play before you confirm your purchase.
            </li>
            <li>
              <strong>Renewal.</strong> Premium renews automatically at the end
              of each billing period until you cancel.
            </li>
            <li>
              <strong>Free trials.</strong> If your offer includes a free trial,
              you are charged when it ends unless you cancel first. Google Play
              decides who is eligible.
            </li>
            <li>
              <strong>Cancelling.</strong> You can cancel at any time in your{" "}
              <a href={GOOGLE_PLAY_SUBSCRIPTIONS}>
                Google Play subscriptions
              </a>
              . Cancel before your renewal date to avoid the next charge. You
              keep Premium until the end of the period you have paid for.
              Uninstalling the app does not cancel your subscription.
            </li>
            <li>
              <strong>Price changes.</strong> If the price goes up, Google Play
              tells you in advance, and you can cancel before the new price
              applies.
            </li>
            <li>
              <strong>Failed payments.</strong> If a renewal payment fails,
              Premium may stop until the payment is sorted out.
            </li>
            <li>
              <strong>Your account.</strong> Premium is tied to the Google account
              you bought it with. After reinstalling the app or moving to a new
              device, use the same account and restore your purchase in the app.
            </li>
          </ul>
        </section>

        {/* 9. Refunds and Your Consumer Rights */}
        <section
          id="refunds"
          className={SECTION}
        >
          <h2>9. Refunds and Your Consumer Rights</h2>
          <p>
            Refunds for Google Play purchases follow{" "}
            <a href={GOOGLE_PLAY_REFUNDS}>Google Play&apos;s refund policies</a>
            . If you need help with a refund, you can also email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
          <p>
            If you live in the European Economic Area or the United Kingdom, you
            may have the right to withdraw from a purchase within 14 days, and
            you have legal rights if Premium does not work as described. Nothing
            in these terms takes away any right that consumer law gives you and
            that a contract cannot change.
          </p>
        </section>

        {/* 10. Changes to the App */}
        <section
          id="changes-to-app"
          className={SECTION}
        >
          <h2>10. Changes to the App</h2>
          <p>
            We may update, change, or stop offering the app or any of its
            features, and some updates download automatically when you open the
            app. If a change takes away a main Premium feature, or if we stop
            offering Premium, we will give you reasonable notice so you can
            cancel.
          </p>
        </section>

        {/* 11. Disclaimer and Liability */}
        <section
          id="liability"
          className={SECTION}
        >
          <h2>11. Disclaimer and Liability</h2>
          <p>
            Except where the law requires otherwise, the app is provided{" "}
            <strong>&quot;as is&quot; and &quot;as available.&quot;</strong> We
            do not promise that it will be free of errors, work with every
            website or device, or suit a particular purpose.
          </p>
          <p>
            As far as the law allows, we are not liable for indirect or
            unforeseeable loss, for lost profits or data, or for disputes arising
            from what you edit or share. Our total liability to you is limited
            to what you paid for Premium in the 12 months before your claim.
          </p>
          <p>
            Nothing in these terms limits our liability for death or personal
            injury, fraud, intentional harm, or gross negligence, or any other
            liability or consumer right that the law does not allow us to limit.
          </p>
        </section>

        {/* 12. Ending Your Use */}
        <section
          id="ending"
          className={SECTION}
        >
          <h2>12. Ending Your Use</h2>
          <p>
            You can stop using the app at any time by deleting it. If you have
            Premium, cancel it as well. If you seriously or repeatedly break
            these terms, we may block your access to the app or to Premium.
          </p>
        </section>

        {/* 13. Changes to These Terms */}
        <section
          id="changes"
          className={SECTION}
        >
          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these terms from time to time and will change the{" "}
            <em>Last Updated</em> date above when we do. If a change materially
            affects you, we will give you reasonable notice before it applies.
            If you do not agree with a change, stop using the app and cancel
            Premium before it takes effect.
          </p>
        </section>

        {/* 14. Governing Law */}
        <section id="law" className={SECTION}>
          <h2>14. Governing Law</h2>
          <p>
            These terms are governed by the laws of the {JURISDICTION}, and
            disputes go to the courts of the {JURISDICTION}. If you are a
            consumer, you also keep the mandatory protections of the country
            where you live, and you may bring a claim in the courts there.
          </p>
        </section>

        {/* 15. Contact Us */}
        <section
          id="contact"
          className={SECTION}
        >
          <h2>15. Contact Us</h2>
          <p>
            Questions about these terms? Email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>{" "}
            or write to {COMPANY}, {ADDRESS}.
          </p>
        </section>
      </section>
    </main>
  );
}
