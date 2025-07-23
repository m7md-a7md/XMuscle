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
    <div className=" flex items-center justify-center mb-1">
      <TextHoverEffect text="XMUSCLE" />
    </div>
      <TextGenerateEffect className='text-4xl md:text-5xl  font-bold text-neutral-700 dark:text-white lg:text-7xl leading-snug  tracking-wide text-center'
       words='Explore proven training systems designed to build muscle '/>
    </HeroHighlight >
   
    
    </section>
    
    
  );
}

