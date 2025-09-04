"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { nav } from "../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: Event): void => {
      const target = event.target as HTMLElement | null;
      if (isOpen && target && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = (): void => setIsOpen(!isOpen);
  const closeMenu = (): void => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-[rgba(248,245,239,0.9)] shadow-sm' 
          : 'backdrop-blur bg-[rgba(248,245,239,0.7)]'
      } border-b border-white/20`}
    >
      <nav className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="relative w-8 h-8">
              <Image 
                src="/logo-mantis.png" 
                alt="Eduardo Navajas Logo" 
                width={32}
                height={32}
                className="transition-transform duration-200 group-hover:scale-110"
                priority
              />
            </div>
            <span className="font-display text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
              Eduardo Navajas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contacto" 
              className="btn bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Solicitar visita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 border-t border-white/20">
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block text-gray-700 hover:text-gray-900 hover:bg-black/5 px-3 py-2 rounded-lg transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href="#contacto" 
                  className="btn block text-center bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-sm"
                  onClick={closeMenu}
                >
                  Solicitar visita
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}