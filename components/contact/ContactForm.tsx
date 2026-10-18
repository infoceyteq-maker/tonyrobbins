"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, RotateCcw, Send } from "lucide-react";
import { ceyteq, subjectPresets } from "@/lib/contact-data";
import { WhatsAppGlyph } from "./ContactHeader";

type Fields = { name: string; email: string; subject: string; message: string };

const inputCls =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-navy-500 focus:ring-2 focus:ring-navy-500/25";
const labelCls =
  "text-xs font-semibold uppercase tracking-wider text-slate-600";

export default function ContactForm() {
  const [form, setForm] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState<Fields | null>(null);
  const [touched, setTouched] = useState(false);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const errors = {
    name: form.name.trim().length < 2 ? "Please enter your name." : "",
    email: !emailValid ? "Please enter a valid email address." : "",
    subject: form.subject.trim().length < 3 ? "Please add a subject." : "",
    message: form.message.trim().length < 10 ? "Please write a message of at least 10 characters." : "",
  };
  const valid = !errors.name && !errors.email && !errors.subject && !errors.message;

  const buildBody = (f: Fields) =>
    `Name: ${f.name}\nEmail: ${f.email}\n\n${f.message}\n\n— Sent from the Ceyteq Contact & Social Hub`;

  const openMailto = (f: Fields) => {
    const href = `mailto:${ceyteq.email}?subject=${encodeURIComponent(
      f.subject
    )}&body=${encodeURIComponent(buildBody(f))}`;
    window.location.href = href;
  };

  const whatsappHref = (f: Fields) =>
    `${ceyteq.whatsappHref}?text=${encodeURIComponent(
      `Hello Ceyteq, I'm ${f.name}. (${f.subject})\n\n${f.message}`
    )}`;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    openMailto(form);
    setSent(form);
  };

  const reset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setSent(null);
    setTouched(false);
  };

  const fieldError = (key: keyof Fields) =>
    touched && errors[key] ? (
      <p className="mt-1.5 text-xs font-medium text-red-600">{errors[key]}</p>
    ) : null;

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-(--shadow-card) md:p-9">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy-950">
        Send Us a Message
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
        Fill out the form below — it opens your email app with everything
        pre-filled to{" "}
        <a href={`mailto:${ceyteq.email}`} className="font-semibold text-navy-700 hover:underline">
          {ceyteq.email}
        </a>
        , ready to send.
      </p>

      {sent ? (
        <div className="fade-in mt-7 rounded-2xl border border-navy-100 bg-navy-50/70 p-7 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-navy-600" />
          <h3 className="mt-3 text-lg font-bold tracking-tight text-navy-950">
            Thank You, {sent.name.split(" ")[0]}!
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
            Your email app should now be open with your message about{" "}
            <span className="font-semibold text-navy-900">
              &ldquo;{sent.subject}&rdquo;
            </span>{" "}
            ready to send to {ceyteq.email}. Just press send — the Ceyteq team
            will contact you soon at{" "}
            <span className="font-medium text-navy-900">{sent.email}</span>.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => openMailto(sent)}
              className="inline-flex items-center gap-1.5 rounded-full bg-navy-700 px-4.5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-600"
            >
              <Mail className="h-4 w-4" /> Open Email Again
            </button>
            <a
              href={whatsappHref(sent)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1FA855] px-4.5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#178a45]"
            >
              <WhatsAppGlyph className="h-4 w-4" /> Send via WhatsApp Instead
            </a>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-[13px] font-semibold text-navy-700 transition-colors hover:border-navy-300 hover:bg-navy-50"
            >
              <RotateCcw className="h-4 w-4" /> Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-7 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-name" className={labelCls}>Your Name *</label>
              <input
                id="cf-name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={set("name")}
                placeholder="John Doe"
                className={inputCls}
              />
              {fieldError("name")}
            </div>
            <div>
              <label htmlFor="cf-email" className={labelCls}>Email Address *</label>
              <input
                id="cf-email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={set("email")}
                placeholder="john@example.com"
                className={inputCls}
              />
              {fieldError("email")}
            </div>
          </div>

          <div>
            <label htmlFor="cf-subject" className={labelCls}>Subject *</label>
            <input
              id="cf-subject"
              type="text"
              value={form.subject}
              onChange={set("subject")}
              placeholder="Project Discussion / Inquiry"
              className={inputCls}
            />
            {fieldError("subject")}
            <div className="no-print mt-2.5 flex flex-wrap gap-1.5">
              {subjectPresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, subject: preset }))}
                  className={`rounded-full border px-3 py-1 text-[11.5px] font-medium transition-colors ${
                    form.subject === preset
                      ? "border-navy-600 bg-navy-700 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-navy-300 hover:text-navy-800"
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <label htmlFor="cf-message" className={labelCls}>Message *</label>
              <span className="text-[11px] tabular-nums text-slate-400">
                {form.message.length} characters
              </span>
            </div>
            <textarea
              id="cf-message"
              rows={5}
              value={form.message}
              onChange={set("message")}
              placeholder="Tell us about your project — goals, timelines, and anything else that helps…"
              className={`${inputCls} resize-y`}
            />
            {fieldError("message")}
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row">
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5 hover:bg-navy-600"
            >
              <Send className="h-4 w-4" />
              Send Message via Email
            </button>
            <a
              href={
                form.name.trim() || form.message.trim()
                  ? whatsappHref({
                      ...form,
                      name: form.name.trim() || "there",
                      subject: form.subject.trim() || "General Inquiry",
                    })
                  : ceyteq.whatsappHref
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 transition-colors hover:border-[#1FA855]/50 hover:bg-[#1FA855]/5"
            >
              <WhatsAppGlyph className="h-4.5 w-4.5 text-[#1FA855]" />
              Via WhatsApp
            </a>
          </div>
          <p className="text-[12px] leading-relaxed text-slate-400">
            Prefer not to use the form? Email us directly at {ceyteq.email} or
            call {ceyteq.hotlineDisplay}.
          </p>
        </form>
      )}
    </div>
  );
}
