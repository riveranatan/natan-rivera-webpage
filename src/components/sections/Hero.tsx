"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-body text-sm tracking-widest text-amber"
        >
          &gt; HELLO WORLD
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 font-heading text-5xl leading-tight text-text-primary sm:text-6xl md:text-7xl"
        >
          Natan Rivera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-10 max-w-xl font-body text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          Software Engineer building things for the web.
          <br />
          Clean code, creative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-6 py-3 font-body text-sm text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(74,246,38,0.15)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded border border-border px-6 py-3 font-body text-sm text-text-secondary transition-all hover:border-border-hover hover:text-text-primary"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Blinking cursor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 font-body text-sm text-text-muted"
        >
          <span className="text-primary">$</span> scroll_down
          <span className="inline-block w-2 animate-[blink_1s_infinite]">
            _
          </span>
        </motion.div>
      </div>
    </section>
  );
}
