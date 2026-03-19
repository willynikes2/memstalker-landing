"use client";

import { useState } from "react";

const API_URL = "https://api.memstalker.com";

interface WaitlistFormProps {
  source?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  compact?: boolean;
}

export default function WaitlistForm({
  source = "landing",
  className = "",
  inputClassName = "",
  buttonClassName = "bg-white text-black font-semibold hover:opacity-90 transition-opacity whitespace-nowrap px-6 py-3 rounded-md text-sm",
  compact = false,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "exists" | "error">("idle");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    try {
      const res = await fetch(`${API_URL}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }

      if (data.alreadyExists) {
        setStatus("exists");
        setMessage("You're already on the list!");
      } else {
        setStatus("success");
        setMessage(data.message);
        setPosition(data.position);
      }
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 rounded-lg px-6 py-4">
          <span className="text-accent-pale text-xl">&#10003;</span>
          <div className="text-left">
            <p className="text-accent-pale font-medium text-sm">{message}</p>
            {position && (
              <p className="text-text-secondary text-xs mt-1">
                You&apos;re #{position} on the waitlist
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (status === "exists") {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center gap-2 bg-bg-elevated border border-border-subtle rounded-lg px-6 py-4">
          <span className="text-accent">&#10003;</span>
          <p className="text-text-primary text-sm">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={`flex ${compact ? "flex-row" : "flex-col sm:flex-row"} items-center justify-center gap-3 max-w-md mx-auto`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "loading"}
          className={
            inputClassName ||
            "w-full sm:flex-1 bg-bg-elevated border border-border-subtle rounded-lg px-4 py-3 text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors disabled:opacity-50"
          }
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${buttonClassName} disabled:opacity-50`}
        >
          {status === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Joining...
            </span>
          ) : (
            "Start Free"
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-400 text-xs text-center mt-2">{message}</p>
      )}
    </div>
  );
}
