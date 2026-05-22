"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Block body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`flex fixed top-0 left-0 py-5 flex-row justify-center items-center w-full transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md shadow-lg"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="flex justify-between items-center w-[95%] md:w-[85%] lg:w-[80%]">
          <a
            href="#"
            className="font-bold text-2xl text-red-700 drop-shadow-[0_0_5px_#b91c1c] animate-[pulse_3.5s_infinite]"
          >
            Motcha
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row gap-x-[2rem]">
            <a
              href="#"
              className="relative py-1 text-white hover:text-red-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="relative py-1 text-white hover:text-red-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="relative py-1 text-white hover:text-red-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="relative py-1 text-white hover:text-red-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-xl p-2 z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Slide from right */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 right-0 h-full w-[70%] max-w-[280px] bg-[#0a0a0a] border-l border-red-900/30 z-[60] transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6">
          <a
            href="#"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium border-b border-white/10 text-white hover:text-red-500 hover:translate-x-2 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium border-b border-white/10 text-white hover:text-red-500 hover:translate-x-2 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium border-b border-white/10 text-white hover:text-red-500 hover:translate-x-2 transition-all duration-300"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium text-white hover:text-red-500 hover:translate-x-2 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
