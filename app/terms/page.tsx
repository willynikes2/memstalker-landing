import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Memstalker",
  description: "Memstalker terms of service placeholder.",
};

export default function TermsPage() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-20 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-4">
          Terms of Service
        </h1>
        <p className="text-accent-pale text-sm font-medium mb-8">Coming soon</p>
        <p className="text-text-secondary text-base leading-relaxed">
          We&apos;re preparing the full terms of service. In the meantime, email{" "}
          <a
            href="mailto:support@memstalker.com"
            className="text-accent-pale hover:text-accent-light transition-colors"
          >
            support@memstalker.com
          </a>{" "}
          with any questions.
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
