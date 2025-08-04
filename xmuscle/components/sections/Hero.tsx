"use client";

import { HoverBorderGradient } from "../UI/hover-border-gradient";
import { HeroHighlight } from "../UI/hero-highlight";
import { TextGenerateEffect } from "../UI/text-generate-effect";
import { TextHoverEffect } from "../UI/text-hover-effect";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" role="banner" className="pt-20">
      <HeroHighlight>
        <div className="h-[30rem] flex flex-col items-center justify-center gap-6">
          <TextHoverEffect text="XMUSCLE" />

          <TextGenerateEffect
            className="text-3xl md:text-2xl lg:text-5xl font-sans text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-snug text-center"
            words="أشهر أنظمة التدريب المثبتة والمصممة لبناء العضلات"
          />

          <div className="flex justify-center text-center">
            <button
              onClick={() => scrollToSection("programs")}
              aria-label="انتقل إلى قسم برامج التدريب"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="div"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3 cursor-pointer"
              >
                <span> استكشف الانظمة </span>
              </HoverBorderGradient>
            </button>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
