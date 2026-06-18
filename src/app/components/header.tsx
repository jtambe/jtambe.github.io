import Link from "next/link";
import HamburgerMenu from "./hamburger-menu";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
            <div className="flex items-center justify-between h-16 px-6">
                {/* Home Icon on Left */}
                <Link href="/" className="flex items-center hover:opacity-75 transition">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </Link>

                {/* Site Title in Center */}
                <div className="flex-1 text-center">
                    <Link href="/" className="text-lg font-bold text-gray-800 dark:text-white hover:opacity-75 transition">
                        Jayesh Tambe
                    </Link>
                </div>

                {/* Hamburger Menu on Right */}
                <HamburgerMenu />
            </div>
        </header>
    );
}
