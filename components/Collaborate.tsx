"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, FileText, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/constants";
import Reveal from "./Reveal";

const Collaborate = ({
  setShowResume,
}: {
  setShowResume: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    { label: "LinkedIn", value: "in/mayur--wagh", href: profile.linkedin, icon: Linkedin },
    { label: "GitHub", value: profile.githubUser, href: profile.github, icon: Github },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  ];

  return (
    <section id="collaborate" className="px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-28">
      <div className="max-w-5xl w-full">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-purple-500/30 bg-gradient-to-br from-purple-600/20 via-[#14121c] to-indigo-700/20 p-7 sm:p-12 lg:p-16">
            <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
            <div className="relative">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-purple-300 mb-4">
                Contact
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  together.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-8">
                I&apos;m open to full-stack roles and interesting projects. Whether you&apos;re hiring or
                just want to talk shop about React, Node or MongoDB — my inbox is open.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black px-6 py-4 font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  {profile.email}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 font-semibold hover:bg-white/10 transition-colors"
                >
                  {copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-5 w-5" />}
                  {copied ? "Copied!" : "Copy email"}
                </button>
                <button
                  onClick={() => setShowResume(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 font-semibold hover:bg-white/10 transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  Resume
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {channels.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 hover:border-purple-400/50 transition-colors"
                  >
                    <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/5">
                      <Icon className="h-5 w-5 text-purple-300" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-gray-400">{label}</span>
                      <span className="block truncate text-sm font-medium">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Collaborate;
