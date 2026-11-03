"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, Globe, BookOpen, CheckCircle2, BookmarkCheck, ArrowRight } from "lucide-react";
import { publications, Publication } from "@/data/publications";

const getCategoryTheme = (type: Publication["type"]) => {
  switch (type) {
    case "sinta2":
      return {
        border: "border-emerald-500/40 group-hover:border-emerald-400",
        glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
        iconBg: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
        textColor: "bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-400 bg-clip-text text-transparent",
        badgePill: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        btnHover: "hover:border-emerald-500/40",
        corner: "border-emerald-400/70",
        icon: Award
      };
    case "sinta3":
      return {
        border: "border-sky-500/40 group-hover:border-sky-400",
        glow: "from-sky-500/20 via-blue-500/10 to-transparent",
        iconBg: "bg-sky-500/20 text-sky-400 border border-sky-500/30",
        textColor: "bg-gradient-to-r from-sky-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent",
        badgePill: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
        btnHover: "hover:border-sky-500/40",
        corner: "border-sky-400/70",
        icon: Award
      };
    case "sinta4":
      return {
        border: "border-amber-500/40 group-hover:border-amber-400",
        glow: "from-amber-500/20 via-yellow-500/10 to-transparent",
        iconBg: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
        textColor: "bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent",
        badgePill: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        btnHover: "hover:border-amber-500/40",
        corner: "border-amber-400/70",
        icon: BookmarkCheck
      };
    case "sinta5":
      return {
        border: "border-violet-500/40 group-hover:border-violet-400",
        glow: "from-violet-500/20 via-purple-500/10 to-transparent",
        iconBg: "bg-violet-500/20 text-violet-400 border border-violet-500/30",
        textColor: "bg-gradient-to-r from-violet-200 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent",
        badgePill: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
        btnHover: "hover:border-violet-500/40",
        corner: "border-violet-400/70",
        icon: BookmarkCheck
      };
    case "international":
      return {
        border: "border-blue-500/40 group-hover:border-blue-400",
        glow: "from-blue-600/20 via-indigo-500/10 to-transparent",
        iconBg: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
        textColor: "bg-gradient-to-r from-blue-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent",
        badgePill: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        btnHover: "hover:border-blue-500/40",
        corner: "border-blue-400/70",
        icon: Globe
      };
    case "issn":
    default:
      return {
        border: "border-teal-500/40 group-hover:border-teal-400",
        glow: "from-teal-500/20 via-emerald-500/10 to-transparent",
        iconBg: "bg-teal-500/20 text-teal-400 border border-teal-500/30",
        textColor: "bg-gradient-to-r from-teal-200 via-emerald-300 to-teal-400 bg-clip-text text-transparent",
        badgePill: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
        btnHover: "hover:border-teal-500/40",
        corner: "border-teal-400/70",
        icon: BookOpen
      };
  }
};

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { key: "all", label: "Semua", count: publications.length },
    { key: "sinta", label: "SINTA", count: publications.filter(p => p.type.startsWith("sinta")).length },
    { key: "international", label: "Internasional", count: publications.filter(p => p.type === "international").length },
    { key: "issn", label: "Ber-ISSN", count: publications.filter(p => p.type === "issn").length },
  ];

  const filteredPublications = publications.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "sinta") return item.type.startsWith("sinta");
    if (activeFilter === "international") return item.type === "international";
    if (activeFilter === "issn") return item.type === "issn";
    return true;
  });

  return (
    <section id="portofolio" className="py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-4 border border-amber-500/20">
            <CheckCircle2 className="w-4 h-4" />
            <span>Bukti Publikasi Riil & Terverifikasi</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-4">
            Karya yang Telah Terbit
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300">
            Jejak rekam keberhasilan kami dalam mengantarkan karya para akademisi menuju publikasi resmi.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-slate-950/20 text-slate-950 font-black" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Publications Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredPublications.map((item, index) => {
              const theme = getCategoryTheme(item.type);
              const IconComponent = theme.icon;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
                  className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 hover:border-amber-500/40 dark:hover:border-amber-500/40 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
                >
                  {/* FRAME HEADER: Replaces the book image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-5 flex flex-col items-center justify-center border-b border-slate-800/80">
                    {/* Atmospheric Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${theme.glow} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                    />

                    {/* Subtle Radial Mesh */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

                    {/* Certificate / Plaque Frame Box */}
                    <div
                      className={`relative z-10 w-full h-full rounded-xl border-2 ${theme.border} bg-slate-900/70 backdrop-blur-sm p-4 flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:scale-[1.02] shadow-inner`}
                    >
                      {/* Frame Corner Ornaments */}
                      <span className={`absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 ${theme.corner}`} />
                      <span className={`absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 ${theme.corner}`} />
                      <span className={`absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 ${theme.corner}`} />
                      <span className={`absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 ${theme.corner}`} />

                      {/* Top Icon Badge */}
                      <div className={`p-2 rounded-full ${theme.iconBg} mb-2 shadow-sm`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Sub-badge / Category */}
                      <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-400 mb-1">
                        {item.subBadge}
                      </span>

                      {/* Main Centered Text (e.g. "SINTA 4", "INTERNASIONAL", "BER-ISSN") */}
                      <h4
                        className={`text-2xl sm:text-3xl font-black font-jakarta tracking-wider uppercase ${theme.textColor} drop-shadow-sm`}
                      >
                        {item.badge}
                      </h4>

                      {/* Verification Status */}
                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                          Publikasi Resmi
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CARD BODY */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Publication Title */}
                      <h3 className="text-base sm:text-lg font-bold font-jakarta text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Congratulatory & Detail Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Button to Publication Link */}
                    <div className="pt-6 mt-auto">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 group/btn"
                      >
                        <span>Lihat Publikasi</span>
                        <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
