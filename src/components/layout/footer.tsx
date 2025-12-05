"use client";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#cta" },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/myvoicedna",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/myvoicedna",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-charcoal border-t border-stone-border">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Logo size="md" />
            </div>
            <p className="text-stone-text mt-2">Your voice. Quantified.</p>
            <p className="text-stone-text text-sm mt-1">
              A product of APG Iterations.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-stone-text hover:text-cream transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-card border border-stone-border flex items-center justify-center text-stone-text hover:text-coral hover:border-coral transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-stone-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-text">
          <p>© 2025 MyVoiceDNA.ai. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cream transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
