"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { faqItems } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

type QuickReply = {
  label: string;
  reply: string;
};

const quickReplies: QuickReply[] = [
  { label: "Get a quote", reply: "quote" },
  { label: "What is terrazzo?", reply: "what-is-terrazzo" },
  { label: "How long does it take?", reply: "timeline" },
  { label: "Areas you serve", reply: "areas" },
  { label: "Maintenance tips", reply: "maintenance" },
  { label: "Talk to a person", reply: "human" },
];

function getFaqAnswer(question: string) {
  return faqItems.find((item) => item.question === question)?.answer ?? "";
}

const whatsappDigits = siteConfig.phone.replace(/\D/g, "");
const whatsappHref = `https://wa.me/1${whatsappDigits}`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: `Hi! 👋 I'm the Dynamic Stone assistant. Ask me about terrazzo, our process, or tap a quick question below to get started.`,
    },
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function pushMessage(from: Message["from"], text: string) {
    setMessages((prev) => [...prev, { id: prev.length + 1, from, text }]);
  }

  function respond(intent: string) {
    switch (intent) {
      case "quote":
        pushMessage(
          "bot",
          "Happy to help. The fastest way is our Get a Quote form — tell us about your project and we'll get back to you within one business day. You can also call or WhatsApp us directly."
        );
        break;
      case "what-is-terrazzo":
        pushMessage("bot", getFaqAnswer("What is terrazzo, exactly?"));
        break;
      case "timeline":
        pushMessage("bot", getFaqAnswer("How long does a terrazzo installation take?"));
        break;
      case "areas":
        pushMessage("bot", getFaqAnswer("What areas do you serve?"));
        break;
      case "maintenance":
        pushMessage("bot", getFaqAnswer("How do we maintain a terrazzo surface?"));
        break;
      case "outdoor":
        pushMessage("bot", getFaqAnswer("Can terrazzo be installed outdoors or in wet areas?"));
        break;
      case "traffic":
        pushMessage("bot", getFaqAnswer("Is terrazzo a good choice for high-traffic areas?"));
        break;
      case "human":
        pushMessage(
          "bot",
          `Of course — you can reach our team directly at ${siteConfig.phone} or via WhatsApp, and we'll pick up the conversation from there.`
        );
        break;
      default:
        pushMessage(
          "bot",
          `I don't have a canned answer for that yet, but our team can help directly. Call ${siteConfig.phone}, message us on WhatsApp, or fill out the Get a Quote form and we'll get back to you within one business day.`
        );
    }
  }

  function handleQuickReply(qr: QuickReply) {
    pushMessage("user", qr.label);
    setTimeout(() => respond(qr.reply), 350);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    pushMessage("user", text);
    setInput("");

    const lower = text.toLowerCase();
    let intent = "default";
    if (/quote|price|cost|estimate/.test(lower)) intent = "quote";
    else if (/what is|definition|terrazzo\?/.test(lower)) intent = "what-is-terrazzo";
    else if (/how long|timeline|time|duration/.test(lower)) intent = "timeline";
    else if (/area|location|serve|vancouver|where/.test(lower)) intent = "areas";
    else if (/maintain|clean|care|seal/.test(lower)) intent = "maintenance";
    else if (/outdoor|outside|pool|patio|wet/.test(lower)) intent = "outdoor";
    else if (/traffic|durable|durability|last|lifespan/.test(lower)) intent = "traffic";
    else if (/call|phone|human|person|talk to someone|representative/.test(lower)) intent = "human";

    setTimeout(() => respond(intent), 400);
  }

  return (
    <div ref={containerRef} className="fixed bottom-5 right-24 z-50 sm:right-28">
      {open && (
        <div className="mb-4 flex h-[28rem] w-80 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-soft sm:w-96">
          <div className="flex items-center justify-between bg-stone-900 px-5 py-4">
            <div>
              <p className="font-serif text-base font-semibold text-cream-50">
                Dynamic Stone Assistant
              </p>
              <p className="text-xs text-cream-100/70">Usually replies within a day</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-cream-100/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-4 w-4">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-stone-50 px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.from === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.from === "bot"
                      ? "bg-white text-stone-700 shadow-sm"
                      : "bg-gradient-to-r from-terracotta-400 to-terracotta-600 text-stone-900"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-1">
              {quickReplies.map((qr) => (
                <button
                  key={qr.label}
                  type="button"
                  onClick={() => handleQuickReply(qr)}
                  className="rounded-full border border-terracotta-200 bg-white px-3 py-1.5 text-xs font-medium text-terracotta-600 transition-colors hover:border-terracotta-400 hover:bg-terracotta-50"
                >
                  {qr.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                href="/quote"
                className="rounded-full bg-gradient-to-r from-terracotta-400 to-terracotta-600 px-3 py-1.5 text-xs font-semibold text-stone-900 shadow-sm transition-colors hover:from-terracotta-300 hover:to-terracotta-500"
              >
                Get a Quote
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#1ebe5a]"
              >
                WhatsApp Us
              </a>
              <a
                href={siteConfig.phoneHref}
                className="rounded-full border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 transition-colors hover:border-terracotta-400 hover:text-terracotta-600"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-stone-200 bg-white p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-700 outline-none transition-colors focus:border-terracotta-400"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-terracotta-400 to-terracotta-600 text-stone-900 transition-colors hover:from-terracotta-300 hover:to-terracotta-500"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 text-stone-900 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:from-terracotta-300 hover:to-terracotta-500"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-6 w-6">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
