"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CivicsNav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors"
                        >
                            Portfolio
                        </Link>
                        <div className="hidden md:flex gap-1">
                            <Link
                                href="/civics"
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    isActive("/civics")
                                        ? "bg-blue-100 text-blue-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                Quiz
                            </Link>
                            <Link
                                href="/civics/all-questions"
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    isActive("/civics/all-questions")
                                        ? "bg-blue-100 text-blue-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                All Questions
                            </Link>
                        </div>
                    </div>
                    <div className="flex md:hidden gap-2">
                        <Link
                            href="/civics"
                            className={`px-3 py-2 rounded-lg text-sm font-medium ${
                                isActive("/civics")
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            Quiz
                        </Link>
                        <Link
                            href="/civics/all-questions"
                            className={`px-3 py-2 rounded-lg text-sm font-medium ${
                                isActive("/civics/all-questions")
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            All
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
