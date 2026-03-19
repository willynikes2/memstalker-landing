import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Memstalker",
  description: "Memstalker privacy commitments and data handling summary.",
};

const commitments = [
  "Your data is encrypted at rest and in transit.",
  "Self-host if you want zero trust. Your server, your rules.",
  "When you cancel, we destroy your data after a download window.",
  "We do not train on your data or sell it to third parties.",
];

export default function PrivacyPage() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-20 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-accent-pale text-sm font-medium mb-8">Coming soon</p>
        <p className="text-text-secondary text-base leading-relaxed mb-8">
          We&apos;re finalizing the full policy. These commitments already apply.
        </p>
        <ul className="space-y-4 mb-10">
          {commitments.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-accent mt-0.5">✓</span>
              <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-text-tertiary text-sm">
          Questions?{" "}
          <a
            href="mailto:support@memstalker.com"
            className="text-accent-pale hover:text-accent-light transition-colors"
          >
            support@memstalker.com
          </a>
        </p>
        <a
          href="/"
          className="inline-block mt-8 text-text-tertiary text-sm hover:text-text-secondary transition-colors"
        >
          ← Back to home
        </a>
      </div>
      <Footer />
    </main>
  );
}
