"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../UI/resizable-navbar";
import { useState, useEffect } from "react";

export function NavbarHeaderplan() {
  const navItems = [
    {
      name: "انظمه التدريب ",
      link: "/home#programs",
    },
    {
      name: "XMUSCLE",
      link: "/home#about",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsNavbarVisible(true);
        setScrollDirection("up");
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        if (scrollDirection !== "down") {
          setScrollDirection("down");
          setIsNavbarVisible(false);
        }
      } else {
        if (scrollDirection !== "up") {
          setScrollDirection("up");
          setIsNavbarVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    
    return () => window.removeEventListener("scroll", scrollListener);
  }, [lastScrollY, scrollDirection]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  },[isNavbarVisible, isMobileMenuOpen]);
 
  return (
    <div className="relative w-full">
      <div 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-transform duration-300 ease-in-out ${
          isNavbarVisible 
            ? 'translate-y-0' 
            : '-translate-y-full'
        }`}
      >
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            
            <NavItems items={navItems} />

          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}

            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
} 