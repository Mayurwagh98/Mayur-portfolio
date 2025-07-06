"use client";

import Image from "next/image";

export default function GitHubActivitySection() {
  return (
    <section className="relative px-6 py-20 bg-[#0b0b0b] text-white">
      <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl border border-purple-700/50 shadow-xl p-10 sm:p-16">
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-8">
          🧑‍💻 GitHub{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Code Graph
          </span>
        </h3>

        {/* Contribution Graph Image */}
        <div className="flex justify-center items-center">
          <Image
            src="https://ghchart.rshah.org/Mayurwagh98"
            alt="GitHub contributions graph"
            width={900}
            height={200}
            className="rounded-xl border border-purple-600/40 p-4 shadow-lg dark:shadow-purple-800/20"
          />
        </div>
      </div>
    </section>
  );
}
