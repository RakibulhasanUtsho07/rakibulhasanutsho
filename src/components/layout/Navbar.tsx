"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Toolkit", href: "/#stack" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-nav" data-nav-reveal>
      <div className="nav-inner">
        <Link className="brand" href="/#home" onClick={closeMenu} aria-label="Utsho.dev home">
          <span className="brand-mark">U</span>
          <span className="brand-name">UTSHO<span>.DEV</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <a className="nav-contact" href={site.linkedinUrl} target="_blank" rel="noreferrer">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="mobile-menu-lines" />
        </button>
      </div>
      <nav className={"mobile-nav" + (menuOpen ? " is-open" : "")} id="mobile-navigation" aria-label="Mobile navigation">
        <div className="mobile-nav-inner">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>
          ))}
          <a href={"mailto:" + site.email} onClick={closeMenu}>Get in touch ↗</a>
        </div>
      </nav>
    </header>
  );
}
