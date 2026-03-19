"use client";

import { useState } from "react";
import FaqJsonLd from "./FaqJsonLd";

const faqs = [
  { question: 'Is my data private?', answer: 'Yes. Encrypted at rest and in transit. We cannot access your data. When you cancel, we destroy it — you get a download window first.' },
  { question: 'Can I self-host?', answer: 'Yes, forever. The open source version is fully featured. Self-host on any VPS or your own machine.' },
  { question: 'Which AI tools does it work with?', answer: 'Claude, Codex, Gemini, and any MCP-compatible client. Connect via MCP protocol or REST API.' },
  { question: 'How is this different from RAG?', answer: "Memstalker is writeable. Your AI doesn't just read — it updates its own memory with fixes, decisions, and lessons learned." },
  { question: "What about Claude's built-in memory?", answer: "That's one model, one platform. Memstalker works across all models and persists context that built-in memory doesn't capture." },
  { question: 'How long does setup take?', answer: 'Under 5 minutes. One npx command to start the server, one config entry to connect your AI tool.' },
  { question: 'Can teams share a knowledge base?', answer: 'Yes. The Team plan supports up to 5 members sharing one knowledge base with role-based access.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-6 md:px-16 lg:px-24 py-20">
      <FaqJsonLd items={faqs} />

      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-12">
          Frequently asked questions.
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-border-subtle"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full py-5 flex justify-between items-center text-left cursor-pointer"
              aria-expanded={openIndex === index}
            >
              <span className="font-body font-medium text-text-primary pr-4">
                {faq.question}
              </span>
              <span className="text-text-secondary text-xl flex-shrink-0">
                {openIndex === index ? "\u2212" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-48 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-text-secondary text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
