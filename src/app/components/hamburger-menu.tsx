"use client"

import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="flex flex-col gap-1.5 w-8 h-8 items-center justify-center hover:opacity-75 transition"
                aria-label="Toggle menu"
            >
                <span
                    className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all ${
                        isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                />
                <span
                    className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all ${
                        isOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                    className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all ${
                        isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <nav className="flex flex-col">
                        <Link
                            href="/blog"
                            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-800 dark:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-800 dark:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <a
                            href="/Jayesh_Tambe_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-800 dark:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            )}
        </div>
    );
}
