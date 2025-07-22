"use client";
import React from 'react'
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from  "../components/ui/hero-highlight";
import { section } from 'framer-motion/client';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TextHoverEffect } from "../components/ui/text-hover-effect";

export function HeroHighlightDemo() {
  return (
    <section id="home">
    <HeroHighlight>
    <div className="h-[30rem] flex items-center justify-center">
      <TextHoverEffect text="MXUSCLE" />
    </div>
      <TextGenerateEffect className='text-4xl px- md:text-4xl lg:text-7xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto' words='Explore proven training systems designed to build muscle '/>
    </HeroHighlight >
   
    
    </section>
  );
}

