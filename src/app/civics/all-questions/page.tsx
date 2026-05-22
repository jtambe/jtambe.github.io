"use client";

import { useState, useMemo } from "react";
import type { CivicsSection, MainSection, SubSection } from "../types";
import { CIVICS_QUESTIONS, SECTION_OPTIONS, SUBSECTION_MAP, US_STATES } from "../../../data/civics-data";
import { getAnswersForQuestion } from "../utils";

export default function AllQuestionsPage() {
    const [userState, setUserState] = useState<string>("");
    const [expandedSections, setExpandedSections] = useState<Set<MainSection>>(new Set());
    const [expandedSubsections, setExpandedSubsections] = useState<Set<SubSection>>(new Set());
    const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());

    function toggleSection(section: MainSection) {
        setExpandedSections((prev) => {
            const next = new Set(prev);
            if (next.has(section)) {
                next.delete(section);
            } else {
                next.add(section);
            }
            return next;
        });
    }

    function toggleSubsection(subsection: SubSection) {
        setExpandedSubsections((prev) => {
            const next = new Set(prev);
            if (next.has(subsection)) {
                next.delete(subsection);
            } else {
                next.add(subsection);
            }
            return next;
        });
    }

    function toggleQuestion(questionId: number) {
        setExpandedQuestions((prev) => {
            const next = new Set(prev);
            if (next.has(questionId)) {
                next.delete(questionId);
            } else {
                next.add(questionId);
            }
            return next;
        });
    }

    const questionsBySection = useMemo(() => {
        const grouped = new Map<MainSection, Map<SubSection, typeof CIVICS_QUESTIONS>>();
        
        SECTION_OPTIONS.forEach((section) => {
            const subsectionMap = new Map<SubSection, typeof CIVICS_QUESTIONS>();
            SUBSECTION_MAP[section].forEach((subsection) => {
                subsectionMap.set(subsection, []);
            });
            grouped.set(section, subsectionMap);
        });

        CIVICS_QUESTIONS.forEach((q) => {
            const subsectionMap = grouped.get(q.section);
            if (subsectionMap) {
                const questions = subsectionMap.get(q.subsection);
                if (questions) {
                    questions.push(q);
                }
            }
        });

        return grouped;
    }, []);

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-sm">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    All USCIS Civics Questions
                </h1>
                <p className="mt-3 max-w-3xl text-gray-700">
                    View all 128 questions organized by section. Click sections to expand, and click individual questions to see answers.
                </p>
            </div>

            {/* State Selector */}
            <div className="mb-6 rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Your State (for state-specific questions)
                </label>
                <select
                    value={userState}
                    onChange={(e) => setUserState(e.target.value)}
                    className="w-full max-w-md rounded-lg border-2 border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                    <option value="">Select your state...</option>
                    {US_STATES.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>

            {/* Sections */}
            <div className="space-y-4">
                {SECTION_OPTIONS.map((section) => {
                    const subsectionMap = questionsBySection.get(section);
                    const totalSectionQuestions = Array.from(subsectionMap?.values() || []).reduce(
                        (sum, questions) => sum + questions.length,
                        0
                    );
                    const isSectionExpanded = expandedSections.has(section);

                    return (
                        <div key={section} className="rounded-xl border-2 border-gray-300 bg-white shadow-md overflow-hidden">
                            {/* Section Header */}
                            <button
                                type="button"
                                onClick={() => toggleSection(section)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-blue-50"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-bold text-blue-600">
                                        {isSectionExpanded ? "▼" : "▶"}
                                    </span>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{section}</h2>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {totalSectionQuestions} question{totalSectionQuestions !== 1 ? "s" : ""}
                                        </p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                                    {totalSectionQuestions}
                                </span>
                            </button>

                            {/* Subsections */}
                            {isSectionExpanded && (
                                <div className="border-t-2 border-gray-300 bg-gray-50 p-4">
                                    <div className="space-y-3">
                                        {Array.from(subsectionMap?.entries() || []).map(([subsection, questions]) => {
                                            const isSubsectionExpanded = expandedSubsections.has(subsection);

                                            return (
                                                <div
                                                    key={subsection}
                                                    className="rounded-lg border-2 border-gray-300 bg-white shadow-sm overflow-hidden"
                                                >
                                                    {/* Subsection Header */}
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleSubsection(subsection)}
                                                        className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-indigo-50"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-xl font-semibold text-indigo-600">
                                                                {isSubsectionExpanded ? "▼" : "▶"}
                                                            </span>
                                                            <div>
                                                                <h3 className="text-lg font-bold text-gray-900">
                                                                    {subsection}
                                                                </h3>
                                                                <p className="mt-0.5 text-xs text-gray-600">
                                                                    {questions.length} question{questions.length !== 1 ? "s" : ""}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800">
                                                            {questions.length}
                                                        </span>
                                                    </button>

                                                    {/* Questions */}
                                                    {isSubsectionExpanded && (
                                                        <div className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50 p-3">
                                                            <div className="space-y-2">
                                                                {questions.map((q) => {
                                                                    const isQuestionExpanded = expandedQuestions.has(q.id);
                                                                    const answers = getAnswersForQuestion(q, userState);

                                                                    return (
                                                                        <div
                                                                            key={q.id}
                                                                            className="rounded-lg border border-gray-300 bg-white shadow-sm overflow-hidden"
                                                                        >
                                                                            {/* Question Header */}
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => toggleQuestion(q.id)}
                                                                                className="w-full flex items-start gap-3 p-3 text-left transition-colors hover:bg-gray-50"
                                                                            >
                                                                                <span className="mt-1 text-base flex-shrink-0 font-semibold text-gray-600">
                                                                                    {isQuestionExpanded ? "▼" : "▶"}
                                                                                </span>
                                                                                <div className="flex-grow">
                                                                                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                                                                                        <span className="rounded-full bg-gray-700 px-2.5 py-0.5 text-xs font-bold text-white">
                                                                                            #{q.id}
                                                                                        </span>
                                                                                        {q.isFor65Plus && (
                                                                                            <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800">
                                                                                                65+
                                                                                            </span>
                                                                                        )}
                                                                                        {q.isStateSpecific && (
                                                                                            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                                                                                                State
                                                                                            </span>
                                                                                        )}
                                                                                    </div>
                                                                                    <p className="text-sm font-semibold text-gray-900">
                                                                                        {q.question}
                                                                                    </p>
                                                                                </div>
                                                                            </button>

                                                                            {/* Question Answer */}
                                                                            {isQuestionExpanded && (
                                                                                <div className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-3">
                                                                                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-900">
                                                                                        Accepted Answers
                                                                                    </p>
                                                                                    {q.isStateSpecific && !userState && (
                                                                                        <p className="mb-2 rounded-lg bg-amber-50 border border-amber-200 p-2 text-xs text-amber-800">
                                                                                            ⚠️ Please select your state above to see state-specific answers
                                                                                        </p>
                                                                                    )}
                                                                                    <ul className="space-y-1.5">
                                                                                        {answers.map((answer, idx) => (
                                                                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-900">
                                                                                                <span className="text-blue-600 font-bold text-base">•</span>
                                                                                                <span>{answer}</span>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
