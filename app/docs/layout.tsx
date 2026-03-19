import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocsSidebar from "@/components/docs/DocsSidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <div className="px-6 md:px-10 lg:px-16 pt-24 pb-16">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10 lg:flex-row lg:items-start">
          <DocsSidebar />
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
