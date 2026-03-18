"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is my data private?",
    answer:
      "Yes. AES-256 encryption at rest. You can export or delete all your data at any time. Self-hosted users have full control over their data.",
  },
  {
    question: "Does it work with local models?",
    answer:
      "Planned for v2. Version 1 focuses on Claude, ChatGPT, and Gemini via MCP and API integrations.",
  },
  {
    question: "Can I self-host forever?",
    answer:
      "Yes, forever. The open source version is fully featured. The hosted version adds convenience, not features behind a paywall.",
  },
  {
    question: "How is this different from RAG?",
    answer:
      "Memstalker is writeable. Your AI doesn\u2019t just read \u2014 it updates its own memory after every session. It\u2019s a living knowledge base, not a static retrieval system.",
  },
  {
    question: "What about built-in memory features?",
    answer:
      "Platform memory is one model, one platform. Memstalker works across ALL models and persists YOUR knowledge, not just conversation history.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="text-center">
        <span className="text-accent font-mono text-xs uppercase tracking-[0.2em]">
          faq
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
          Common questions.
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-border-subtle reveal reveal-delay-${
              index + 1
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full py-5 flex justify-between items-center text-left cursor-pointer"
              aria-expanded={openIndex === index}
            >
              <span className="font-body font-medium text-text-primary pr-4">
                {faq.question}
              </span>
              <span className="text-accent text-xl flex-shrink-0">
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
