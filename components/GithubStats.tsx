"use client";

import { useState } from "react";
import { Github } from "lucide-react";
import { profile } from "@/lib/constants";

export default function GitHubActivitySection() {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold">GitHub activity</h3>
          <p className="text-sm text-gray-400">Contributions over the last year</p>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
        >
          <Github className="h-4 w-4" /> {profile.githubUser}
        </a>
      </div>
      <div className="overflow-x-auto rounded-2xl bg-white p-3 sm:p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/7c3aed/${profile.githubUser}`}
          alt={`${profile.githubUser}'s GitHub contribution graph`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="min-w-[640px] w-full h-auto"
        />
      </div>
    </div>
  );
}
