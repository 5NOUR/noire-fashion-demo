"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { brandConfig } from "@/config/brand";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-60 bg-background md:hidden"
    >
      <div className="container-wide flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-heading text-xl font-medium tracking-widest"
          onClick={onClose}
        >
          {brandConfig.logo.text}
        </Link>
        <button onClick={onClose} className="p-2" aria-label="Close menu">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col items-start gap-6 px-6 py-10">
        {mainNav.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="text-3xl font-heading tracking-tight hover:text-muted-foreground transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <div className="mt-8 flex gap-4">
          {Object.entries(brandConfig.socials).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 hover:opacity-70"
            >
              {key}
            </a>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}
