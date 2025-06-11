import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMobileDropdown(false);
      }
    };

    if (mobileDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileDropdown]);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      setMobileDropdown(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-[#510059]">Portfolio</h1>
        <ul className="flex gap-6 text-gray-800 font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-purple-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar Toggle */}
      <div className="flex md:hidden justify-between items-center px-4 py-3 bg-white text-[#510059] border-b border-gray-200">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <button onClick={() => setMobileDropdown(!mobileDropdown)}>
          {mobileDropdown ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileDropdown && (
        <div
          ref={dropdownRef}
          className="md:hidden bg-white text-gray-800 px-4 py-4 border-t border-gray-200 shadow"
        >
          <ul className="flex flex-col gap-4 font-medium">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-purple-600 transition"
                  onClick={() => setMobileDropdown(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
