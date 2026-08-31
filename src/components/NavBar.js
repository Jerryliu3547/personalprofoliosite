"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import Image from "next/image";
import StockDeckImg from "../../public/personal_stock_deck.png";
import { cn } from "../lib/utils";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const profolioItems = [
  {
    title: "Personal Stock Deck",
    href: "https://stock-deck-frontend.onrender.com/",
    src: StockDeckImg,
    description: "Personal market dashboard tracking equity momentum with MACD and Bollinger signals."
  },
  {
    title: "REAAI",
    href: "https://algochurn.com",
    src: "https://assets.aceternity.com/demos/algochurn.webp",
    description: "Intelligent real estate assistant for property discovery & route optimization."
  },
  {
    title: "Moonbeam",
    href: "https://gomoonbeam.com",
    src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
    description: "AI-powered writing platform to go from idea to article in minutes."
  },
  {
    title: "Rogue",
    href: "https://userogue.com",
    src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png",
    description: "Respond to government RFPs and RFQs 10x faster using AI."
  }
];

const aboutMeLinks = [
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "License & Certifications", href: "/liscense_certification" },
  { label: "Skills", href: "/skills" }
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (name) => {
    setOpenSubmenu(prev => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      {/* Mobile Top Header Bar (< md) */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2">
          <span className="font-bold text-lg text-white bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-purple-300 to-neutral-400">
            Dianze Liu
          </span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Slide-down Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[53px] inset-x-0 z-40 bg-black/95 border-b border-white/15 backdrop-blur-xl px-5 py-6 space-y-4 max-h-[calc(100vh-53px)] overflow-y-auto shadow-2xl">
          <div className="flex flex-col space-y-3 divide-y divide-white/10">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-base font-semibold text-white hover:text-purple-300 transition-colors pt-2"
            >
              Home
            </Link>

            <Link
              href="/publication"
              onClick={closeMobileMenu}
              className="text-base font-semibold text-white hover:text-purple-300 transition-colors pt-3"
            >
              Publication
            </Link>

            {/* Profolios Accordion */}
            <div className="pt-3">
              <button
                onClick={() => toggleSubmenu("profolios")}
                className="w-full flex items-center justify-between text-base font-semibold text-white hover:text-purple-300 transition-colors py-1"
              >
                <span>Profolios</span>
                {openSubmenu === "profolios" ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
              {openSubmenu === "profolios" && (
                <div className="mt-3 pl-2 grid grid-cols-1 gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  {profolioItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <Image
                        src={item.src}
                        width={60}
                        height={40}
                        alt={item.title}
                        className="rounded object-cover shrink-0 mt-0.5"
                      />
                      <div>
                        <div className="text-sm font-bold text-white">{item.title}</div>
                        <div className="text-xs text-neutral-400 line-clamp-2">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Me Accordion */}
            <div className="pt-3">
              <button
                onClick={() => toggleSubmenu("aboutme")}
                className="w-full flex items-center justify-between text-base font-semibold text-white hover:text-purple-300 transition-colors py-1"
              >
                <span>About Me</span>
                {openSubmenu === "aboutme" ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
              {openSubmenu === "aboutme" && (
                <div className="mt-3 pl-4 flex flex-col space-y-2.5 border-l-2 border-purple-500/40 py-1">
                  {aboutMeLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Floating Navbar (>= md) */}
      <div className="hidden md:flex relative w-full items-center justify-center">
        <NavbarDesktop className="top-2" />
      </div>
    </>
  );
};

function NavbarDesktop({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-4 md:mt-16 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-white pr-4">Home</Link>
        <Link href="/publication" className="text-white pr-4">Publication</Link>
        <MenuItem setActive={setActive} active={active} item="Profolios">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            {profolioItems.map((item, idx) => (
              <ProductItem
                key={idx}
                title={item.title}
                href={item.href}
                src={item.src}
                description={item.description}
              />
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Me">
          <div className="flex flex-col space-y-4 text-sm">
            {aboutMeLinks.map((link, idx) => (
              <HoveredLink key={idx} href={link.href}>{link.label}</HoveredLink>
            ))}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavBar;