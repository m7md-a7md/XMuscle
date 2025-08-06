
"use client";

import { Facebook, Twitter, Instagram, Linkedin , Github } from "lucide-react";
import Link from "next/link";

const socials = [
  { href: "https://github.com/m7md-a7md", icon: <Github />, color: "hover:text-gray-500" },
  { href: "https://www.facebook.com/profile.php?id=100038477382309", icon: <Facebook />, color: "hover:text-gray-500" },
  { href: "https://x.com/_am_77r", icon: <Twitter />, color: "hover:text-gray-500" },
  { href: "https://www.instagram.com/m7md_a.7md/", icon: <Instagram />, color: "hover:text-gray-500" },
  { href: "www.linkedin.com/in/mo-ahmed4", icon: <Linkedin />, color: "hover:text-gray-500" },
];

export default function FooterSocialIcons() {
  return (
    <footer className=" from-gray-900 via-black text-white py-10 bg-gradient-to-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm mb-4 md:mb-0 font-mono tracking-wide">&copy; {new Date().getFullYear()} M7MD A7MD.</p>

        <div className="flex space-x-6">
          {socials.map((social, idx) => (
            <Link key={idx} href={social.href} target="_blank" rel="noopener noreferrer">
              <span
                className={`transition transform hover:-translate-y-1 duration-300 ${social.color}`}
              >
                {social.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
