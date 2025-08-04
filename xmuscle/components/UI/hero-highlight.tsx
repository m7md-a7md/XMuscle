"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className={cn(
        "group relative flex h-[40rem] w-full items-center justify-center overflow-hidden bg-white dark:bg-black",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Light mode background */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),
            url('/gym-background.jpg'),
            url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark mode background */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('/gym-background.jpg'),
            url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hover highlight - Light */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
        style={{
          backgroundImage: `
            url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E")
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)
          `,
          maskImage: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)
          `,
        }}
      />

      {/* Hover highlight - Dark */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
        style={{
          backgroundImage: `
            url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E")
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)
          `,
          maskImage: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded-lg bg-gradient-to-r from-indigo-300",
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
