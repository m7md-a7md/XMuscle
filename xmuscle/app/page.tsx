"use client";

import  HeroHighlightDemo  from "../components/sections/Hero";
import {NavbarDemo} from "@/components/sections/Nevbar";
import ProgramsSection from "@/components/sections/Programs";
import FooterSocialIcons from "@/components/sections/FooterSocialIcons";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black min-h-screen overflow-x-hidden">
     
      <NavbarDemo />
      <HeroHighlightDemo />
      < ProgramsSection />
       <FooterSocialIcons />
    </main>
  );
}
