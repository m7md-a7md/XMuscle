"use client";

import  HeroHighlightDemo  from "../components/sections/Hero";
import {NavbarDemo} from "@/components/sections/Nevbar";
import ProgramsSection from "@/components/sections/Programs";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black min-h-screen overflow-x-hidden">
      
      <NavbarDemo />
      <HeroHighlightDemo />
      < ProgramsSection />
    </main>
  );
}
