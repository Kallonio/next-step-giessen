"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { siteAssets, siteContent } from "@/lib/data";

export function HeroSection() {
  const content = siteContent.hero;

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-10 sm:pb-28 sm:pt-12">
      <div className="absolute inset-0 -z-20">
        <Image
          src={siteAssets.heroImage.src}
          alt={siteAssets.heroImage.alt}
          fill
          priority
          className="object-cover blur-[9px] scale-105 saturate-[0.9]"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(226,234,244,0.84)_0%,rgba(219,229,243,0.74)_34%,rgba(193,213,237,0.72)_100%)]" />
      <div className="absolute inset-x-0 bottom-[-8rem] -z-10 h-[18rem] rounded-[100%] bg-[radial-gradient(circle,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_70%)] blur-2xl" />
      <div className="absolute left-1/2 top-[18%] -z-10 h-52 w-52 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0)_72%)] blur-3xl" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[26rem] bg-hero-grid bg-[size:44px_44px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(217,229,242,0.85)_100%)]" />

      <div className="container-shell">
        <motion.div
          className="mx-auto max-w-5xl px-2 py-14 text-center sm:px-6 sm:py-20"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow border-white/70 bg-white/50 text-brand-900 backdrop-blur-md">
            {content.eyebrow}
          </span>
          <h1
            className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-slate-950 sm:text-5xl xl:text-6xl"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            {content.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-800 sm:text-xl">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/seminare" className="primary-button">
              {content.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/kontakt" className="secondary-button border-white/70 bg-white/70 backdrop-blur-md">
              {content.secondaryCta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
