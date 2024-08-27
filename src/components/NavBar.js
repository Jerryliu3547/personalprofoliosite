"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";

import { cn } from "../lib/utils";


const NavBar = () => {
    return (
        <div className="relative w-full flex items-center justify-center">
          <Navbar className="top-2" />
        </div>
      );
    }
     
    function Navbar({ className }) {
      const [active, setActive] = useState(null);
      return (
        <div
          className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-4 md:mt-16 ", className)}
        >
          <Menu setActive={setActive}>
            <Link href="/" className="text-white pr-4">Home</Link>
            <MenuItem setActive={setActive} active={active} item="Blog">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Computer System</HoveredLink>
                <HoveredLink href="/interface-design">Artificial Intelligence</HoveredLink>
                <HoveredLink href="/seo">Machine Learning</HoveredLink>
                <HoveredLink href="/branding">Trading</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Profolios">
              <div className="  text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="ABout Me">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/education">Education</HoveredLink>
                <HoveredLink href="/experience">Experience</HoveredLink>
                <HoveredLink href="/liscense_certification">License & Certifications</HoveredLink>
                <HoveredLink href="/skills">Skills</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      );
}

export default NavBar