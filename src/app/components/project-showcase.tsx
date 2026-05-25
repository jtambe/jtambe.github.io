"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

function ShowcaseCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
    const { ref, inView } = useInView();
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            {children}
        </div>
    );
}

export default function ProjectShowcase() {
    return (
        <section className="w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Live Apps</h2>
            <div className="flex flex-col gap-6">
                {/* GreduQuest */}
                <ShowcaseCard delay={0}>
                    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://www.google.com/s2/favicons?domain=greduquest.com&sz=64"
                                    alt="GreduQuest icon"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-xl border border-gray-100 object-contain bg-white"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">GreduQuest</h3>
                                    <p className="text-sm text-blue-600 font-medium">greduquest.com</p>
                                </div>
                            </div>
                            <Link
                                href="https://greduquest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 rounded-full bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 transition-colors"
                            >
                                Visit App ↗
                            </Link>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            A test prep platform for students targeting GRE, IELTS, and GMAT exams. Features
                            vocabulary flashcards and practice essays to build exam-ready skills.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["GRE", "IELTS", "GMAT", "Flashcards", "Essay Practice"].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 border border-blue-100"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </ShowcaseCard>

                {/* USCIS Civics */}
                <ShowcaseCard delay={150}>
                    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center text-3xl select-none">
                                    🇺🇸
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">U.S. Civics Quiz</h3>
                                    <p className="text-sm text-green-600 font-medium">
                                        USCIS Citizenship Test Prep
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Practice all 128 official USCIS civics questions for the U.S. naturalization test.
                            Supports sequential and random modes, section filtering, starred reviews, and mistake
                            tracking.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {["128 Questions", "Flashcard Mode", "Mistake Tracking", "Star Review"].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-green-50 text-green-700 text-xs font-medium px-3 py-1 border border-green-100"
                                    >
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <Link
                                href="/civics"
                                className="rounded-full bg-green-600 text-white text-sm font-semibold px-4 py-2 hover:bg-green-700 transition-colors"
                            >
                                Start Quiz
                            </Link>
                            <Link
                                href="/civics/all-questions"
                                className="rounded-full border border-green-600 text-green-700 text-sm font-semibold px-4 py-2 hover:bg-green-50 transition-colors"
                            >
                                All Questions
                            </Link>
                        </div>
                    </div>
                </ShowcaseCard>
            </div>
        </section>
    );
}
