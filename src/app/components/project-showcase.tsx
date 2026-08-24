"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

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
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://www.google.com/s2/favicons?domain=greduquest.com&sz=64"
                                    alt="GreduQuest icon"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-xl border border-gray-100 object-contain bg-white"
                                />
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-xl font-bold text-gray-900">GreduQuest</h3>
                                    <p className="text-sm text-blue-600 font-medium break-words">greduquest.com</p>
                                </div>
                            </div>
                            <Link
                                href="https://greduquest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-start shrink-0 rounded-full bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 transition-colors whitespace-nowrap"
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
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 shrink-0 rounded-xl border border-gray-200 bg-white flex items-center justify-center overflow-hidden">
                                    <img
                                        src="https://flagcdn.com/us.svg"
                                        alt="US Flag"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-xl font-bold text-gray-900">U.S. Civics Quiz</h3>
                                    <p className="text-sm text-green-600 font-medium break-words">
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
                                Start Quiz ↗
                            </Link>
                            <Link
                                href="/civics/all-questions"
                                className="rounded-full bg-green-600 text-white text-sm font-semibold px-4 py-2 hover:bg-green-700 transition-colors"
                            >
                                All Questions ↗
                            </Link>
                        </div>
                    </div>
                </ShowcaseCard>

                {/* Claims Anomaly */}
                <ShowcaseCard delay={300}>
                    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 shrink-0 rounded-xl border border-gray-200 bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center overflow-hidden">
                                    <MedicalServicesIcon sx={{ fontSize: 28, color: "#0891b2" }} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-xl font-bold text-gray-900">Claims Anomaly</h3>
                                    <p className="text-sm text-cyan-600 font-medium break-words">Healthcare Claims Analytics</p>
                                </div>
                            </div>
                            <Link
                                href="https://live-demos-prod.vercel.app/projects/claims-anomaly/rules"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-start shrink-0 rounded-full bg-cyan-600 text-white text-sm font-semibold px-4 py-2 hover:bg-cyan-700 transition-colors whitespace-nowrap"
                            >
                                View App ↗
                            </Link>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Advanced analytics platform that analyzes healthcare claims data to identify anomalies in medical and pharmacy claims. Provides actionable insights for benefits managers and employers to optimize healthcare spending.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "Python FastAPI", "Supabase", "PostgreSQL", "Vercel", "Analytics"].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium px-3 py-1 border border-cyan-100"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </ShowcaseCard>

                {/* Value Based Care ICD-10 HCC Review */}
                <ShowcaseCard delay={450}>
                    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 shrink-0 rounded-xl border border-gray-200 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center overflow-hidden">
                                    <MedicalServicesIcon sx={{ fontSize: 28, color: "#9333ea" }} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-xl font-bold text-gray-900">VBC RAF score with ICD-10 and HCC</h3>
                                    <p className="text-sm text-purple-600 font-medium break-words">Medicare Advantage Risk Adjustment</p>
                                </div>
                            </div>
                            <Link
                                href="https://live-demos-prod.vercel.app/projects/mra-vbc-opps/auth/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-start shrink-0 rounded-full bg-purple-600 text-white text-sm font-semibold px-4 py-2 hover:bg-purple-700 transition-colors whitespace-nowrap"
                            >
                                View App ↗
                            </Link>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Platform for Medicare Advantage risk adjustment coding workflows. Streamlines Value Based Care operations with CSV data ingestion, patient-centric opportunity review, clinical disposition tracking with audit logs, and provider-scoped RBAC.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "React 19", "Python FastAPI", "Supabase", "PostgreSQL", "Vercel", "RBAC", "Audit Trail"].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 border border-purple-100"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </ShowcaseCard>
            </div>
        </section>
    );
}
