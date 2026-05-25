"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CivicsQuestion, CivicsSection, MainSection, SubSection } from "./types";
import { CIVICS_QUESTIONS, SECTION_OPTIONS, SUBSECTION_MAP, US_STATES } from "../../data/civics-data";
import { getAnswersForQuestion } from "./utils";

type Mode = "sequential" | "random";
type QuestionFilter = "all" | "65plus" | "section" | "subsection";

const STORAGE_KEYS = {
    stars: "civics-stars",
    mistakes: "civics-mistakes",
    studied: "civics-studied",
    mode: "civics-mode",
    state: "civics-user-state",
};

function shuffle<T>(items: T[]): T[] {
    const output = [...items];
    for (let i = output.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [output[i], output[j]] = [output[j], output[i]];
    }
    return output;
}

export default function CivicsQuiz() {
    const [mode, setMode] = useState<Mode>("sequential");
    const [questionFilter, setQuestionFilter] = useState<QuestionFilter>("all");
    const [activeSection, setActiveSection] = useState<CivicsSection>("American Government");
    const [activeSubsection, setActiveSubsection] = useState<SubSection | null>(null);
    const [index, setIndex] = useState(0);
    const [stars, setStars] = useState<number[]>([]);
    const [mistakes, setMistakes] = useState<number[]>([]);
    const [studied, setStudied] = useState<number[]>([]);
    const [revealed, setRevealed] = useState(false);
    const [reviewMistakesOnly, setReviewMistakesOnly] = useState(false);
    const [userState, setUserState] = useState<string>("");

    useEffect(() => {
        try {
            const storedStars = localStorage.getItem(STORAGE_KEYS.stars);
            const storedMistakes = localStorage.getItem(STORAGE_KEYS.mistakes);
            const storedStudied = localStorage.getItem(STORAGE_KEYS.studied);
            const storedMode = localStorage.getItem(STORAGE_KEYS.mode);
            const storedState = localStorage.getItem(STORAGE_KEYS.state);

            if (storedStars) setStars(JSON.parse(storedStars));
            if (storedMistakes) setMistakes(JSON.parse(storedMistakes));
            if (storedStudied) setStudied(JSON.parse(storedStudied));
            if (storedMode === "sequential" || storedMode === "random") setMode(storedMode);
            if (storedState) setUserState(storedState);
        } catch {
            // Ignore local storage issues
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.stars, JSON.stringify(stars));
    }, [stars]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.mistakes, JSON.stringify(mistakes));
    }, [mistakes]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.studied, JSON.stringify(studied));
    }, [studied]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.mode, mode);
    }, [mode]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.state, userState);
    }, [userState]);

    const orderedBase = useMemo(() => {
        return mode === "random" ? shuffle(CIVICS_QUESTIONS) : CIVICS_QUESTIONS;
    }, [mode]);

    const filtered = useMemo(() => {
        let selected: CivicsQuestion[] = orderedBase;

        if (questionFilter === "65plus") {
            selected = selected.filter((q) => q.isFor65Plus);
        } else if (questionFilter === "section") {
            selected = selected.filter((q) => q.section === activeSection);
        } else if (questionFilter === "subsection" && activeSubsection) {
            selected = selected.filter((q) => q.subsection === activeSubsection);
        }

        if (reviewMistakesOnly) {
            selected = selected.filter((q) => mistakes.includes(q.id));
        }

        return selected;
    }, [activeSection, activeSubsection, questionFilter, mistakes, orderedBase, reviewMistakesOnly]);

    const totalQuestions = questionFilter === "65plus" ? 20 : 128;
    const studiedCount = studied.filter((id) =>
        filtered.map((q) => q.id).includes(id)
    ).length;
    const progressPercentage = (studiedCount / filtered.length) * 100;

    useEffect(() => {
        setIndex(0);
        setRevealed(false);
    }, [questionFilter, activeSection, activeSubsection, mode, reviewMistakesOnly]);

    const current = filtered[index] ?? null;
    const currentAnswers = current ? getAnswersForQuestion(current, userState) : [];

    function nextQuestion() {
        if (current && !studied.includes(current.id)) {
            setStudied((prev) => [...prev, current.id]);
        }
        setRevealed(false);
        if (filtered.length === 0) return;
        setIndex((prev) => (prev + 1 >= filtered.length ? 0 : prev + 1));
    }

    function previousQuestion() {
        setRevealed(false);
        if (filtered.length === 0) return;
        setIndex((prev) => (prev - 1 < 0 ? filtered.length - 1 : prev - 1));
    }

    function toggleStar(id: number) {
        setStars((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    }

    function markResult(isCorrect: boolean) {
        if (!current) return;

        if (isCorrect) {
            setMistakes((prev) => prev.filter((item) => item !== current.id));
        } else {
            setMistakes((prev) => (prev.includes(current.id) ? prev : [...prev, current.id]));
        }

        nextQuestion();
    }

    function resetProgress() {
        if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
            setStars([]);
            setMistakes([]);
            setStudied([]);
            setIndex(0);
            setRevealed(false);
            localStorage.removeItem(STORAGE_KEYS.stars);
            localStorage.removeItem(STORAGE_KEYS.mistakes);
            localStorage.removeItem(STORAGE_KEYS.studied);
        }
    }

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-sm">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    U.S. Civics Test Practice
                </h1>
                <p className="mt-3 max-w-3xl text-gray-700">
                    Practice all 128 USCIS civics questions with sequential or random modes, star important questions, and track your progress.
                </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6 rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-700">Your Progress</span>
                    <span className="text-sm font-medium text-blue-600">
                        {studiedCount} / {filtered.length} studied
                    </span>
                </div>
                <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
            </div>

            {/* Controls */}
            <div className="mb-6 rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
                <div className="grid gap-6 sm:grid-cols-2">
                    {/* State Selector */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Your State
                        </label>
                        <select
                            value={userState}
                            onChange={(e) => setUserState(e.target.value)}
                            className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="">Select your state...</option>
                            {US_STATES.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Mode Selector */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Question Order
                        </label>
                        <select
                            value={mode}
                            onChange={(e) => setMode(e.target.value as Mode)}
                            className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="sequential">Sequential</option>
                            <option value="random">Random</option>
                        </select>
                    </div>
                </div>

                {/* Question Filter Buttons */}
                <div className="mt-6">
                    <label className="mb-3 block text-sm font-semibold text-gray-700">
                        Question Filter
                    </label>
                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={() => setQuestionFilter("all")}
                            className={`rounded-lg px-5 py-2.5 font-medium transition-all ${
                                questionFilter === "all"
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            All 128 Questions
                        </button>
                        <button
                            type="button"
                            onClick={() => setQuestionFilter("65plus")}
                            className={`rounded-lg px-5 py-2.5 font-medium transition-all ${
                                questionFilter === "65plus"
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            65+ Age Group (20)
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setQuestionFilter("section");
                                setActiveSubsection(null);
                            }}
                            className={`rounded-lg px-5 py-2.5 font-medium transition-all ${
                                questionFilter === "section" || questionFilter === "subsection"
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            By Section
                        </button>
                    </div>
                </div>

                {/* Hierarchical Section/Subsection Dropdown */}
                {(questionFilter === "section" || questionFilter === "subsection") && (
                    <div className="mt-4">
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Select Section or Subsection
                        </label>
                        <select
                            value={activeSubsection || activeSection}
                            onChange={(e) => {
                                const value = e.target.value;
                                // Check if it's a main section or subsection
                                if (SECTION_OPTIONS.includes(value as MainSection)) {
                                    setQuestionFilter("section");
                                    setActiveSection(value as CivicsSection);
                                    setActiveSubsection(null);
                                } else {
                                    setQuestionFilter("subsection");
                                    setActiveSubsection(value as SubSection);
                                    // Find which section this subsection belongs to
                                    for (const [section, subsections] of Object.entries(SUBSECTION_MAP)) {
                                        if (subsections.includes(value as SubSection)) {
                                            setActiveSection(section as CivicsSection);
                                            break;
                                        }
                                    }
                                }
                            }}
                            className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            {SECTION_OPTIONS.map((section) => {
                                const subsections = SUBSECTION_MAP[section];
                                const sectionQuestions = CIVICS_QUESTIONS.filter(q => q.section === section);
                                return (
                                    <optgroup key={section} label={`${section} (${sectionQuestions.length} questions)`}>
                                        <option value={section}>
                                            All {section} Questions ({sectionQuestions.length})
                                        </option>
                                        {subsections.map((subsection) => {
                                            const subsectionQuestions = CIVICS_QUESTIONS.filter(
                                                q => q.subsection === subsection
                                            );
                                            return (
                                                <option key={subsection} value={subsection}>
                                                    ↳ {subsection} ({subsectionQuestions.length})
                                                </option>
                                            );
                                        })}
                                    </optgroup>
                                );
                            })}
                        </select>
                    </div>
                )}

                {/* Review Mistakes Toggle */}
                <div className="mt-4 flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="review-mistakes"
                        checked={reviewMistakesOnly}
                        onChange={(e) => setReviewMistakesOnly(e.target.checked)}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="review-mistakes" className="text-sm font-medium text-gray-700">
                        Review Mistakes Only
                    </label>
                </div>
            </div>

            {/* Stats */}
            <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                    Showing: {filtered.length}
                </span>
                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800 border border-yellow-200">
                    ⭐ Starred: {stars.length}
                </span>
                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800 border border-rose-200">
                    ❌ Mistakes: {mistakes.length}
                </span>
                <button
                    type="button"
                    onClick={resetProgress}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                    Reset Progress
                </button>
            </div>

            {/* Question Card */}
            {!current ? (
                <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
                    <h2 className="text-xl font-semibold text-gray-900">No questions in this view</h2>
                    <p className="mt-2 text-gray-600">Change filters or add more questions to your dataset.</p>
                </div>
            ) : (
                <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                    <div className="mb-4 flex items-center justify-between gap-4 flex-wrap">
                        <p className="text-sm font-semibold text-gray-600">
                            Question #{index + 1} of {filtered.length} • ID: {current.id}
                        </p>
                        <div className="flex items-center gap-3">
                            {current.isFor65Plus && (
                                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800 border border-purple-200">
                                    65+ Age Group
                                </span>
                            )}
                            <button
                                type="button"
                                onClick={() => toggleStar(current.id)}
                                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                                    stars.includes(current.id)
                                        ? "bg-yellow-100 text-yellow-800 border-2 border-yellow-300 hover:bg-yellow-200"
                                        : "bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200"
                                }`}
                            >
                                {stars.includes(current.id) ? "⭐ Starred" : "☆ Star"}
                            </button>
                        </div>
                    </div>

                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
                        {current.section}
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{current.question}</h2>

                    {revealed ? (
                        <div className="mt-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6">
                            <p className="mb-3 text-sm font-semibold text-blue-900">Accepted Answers</p>
                            {current.isStateSpecific && !userState && (
                                <p className="mb-3 rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm text-amber-800">
                                    ⚠️ Please select your state above to see state-specific answers
                                </p>
                            )}
                            
                            {/* Extract metadata and regular answers */}
                            {(() => {
                                // Separate metadata from regular answers
                                const metadataAnswers = currentAnswers.filter(a => a.startsWith('__META_'));
                                const regularAnswers = currentAnswers.filter(a => !a.startsWith('__META_'));
                                
                                return (
                                    <>
                                        {/* Display all metadata in yellow info box */}
                                        {metadataAnswers.length > 0 && (
                                            <div className="mb-4 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">
                                                <div className="space-y-2">
                                                    {metadataAnswers.map((meta, idx) => {
                                                        if (meta.startsWith('__META_SUMMARY__')) {
                                                            return (
                                                                <p key={idx} className="font-semibold">
                                                                    {meta.replace('__META_SUMMARY__', '')}
                                                                </p>
                                                            );
                                                        } else if (meta.startsWith('__META_INFO__')) {
                                                            // Check if next item is a link to render inline
                                                            const nextIdx = idx + 1;
                                                            const nextMeta = metadataAnswers[nextIdx];
                                                            if (nextMeta?.startsWith('__META_LINK__')) {
                                                                const url = nextMeta.replace('__META_LINK__', '');
                                                                return (
                                                                    <p key={idx}>
                                                                        ℹ️ {meta.replace('__META_INFO__', '')}{' '}
                                                                        <Link
                                                                            href={url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="font-semibold text-amber-900 underline decoration-amber-600 underline-offset-2 hover:text-amber-800"
                                                                        >
                                                                            {url}
                                                                        </Link>
                                                                    </p>
                                                                );
                                                            }
                                                            return (
                                                                <p key={idx}>
                                                                    ℹ️ {meta.replace('__META_INFO__', '')}
                                                                </p>
                                                            );
                                                        } else if (meta.startsWith('__META_LINK__')) {
                                                            // Skip if already rendered inline with INFO
                                                            const prevIdx = idx - 1;
                                                            const prevMeta = metadataAnswers[prevIdx];
                                                            if (prevMeta?.startsWith('__META_INFO__')) {
                                                                return null;
                                                            }
                                                            // Standalone link
                                                            const url = meta.replace('__META_LINK__', '');
                                                            return (
                                                                <p key={idx}>
                                                                    <Link
                                                                        href={url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="font-semibold text-amber-900 underline decoration-amber-600 underline-offset-2 hover:text-amber-800"
                                                                    >
                                                                        {url}
                                                                    </Link>
                                                                </p>
                                                            );
                                                        } else if (meta.startsWith('__META_DATE__')) {
                                                            return (
                                                                <p key={idx} className="text-xs">
                                                                    📅 {meta.replace('__META_DATE__', '')}
                                                                </p>
                                                            );
                                                        } else if (meta.startsWith('__META_HEADER__')) {
                                                            return (
                                                                <p key={idx} className="font-semibold mt-2 pt-2 border-t border-amber-300">
                                                                    {meta.replace('__META_HEADER__', '')}
                                                                </p>
                                                            );
                                                        }
                                                        return null;
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Display regular answers as bullets */}
                                        <ul className="space-y-2">
                                            {regularAnswers.map((answer, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-900">
                                                    <span className="text-blue-600 font-bold">•</span>
                                                    <span className="whitespace-pre-line">{answer}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                );
                            })()}
                            
                            {current.referenceNote ? (
                                <p className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm text-sky-900">
                                    Note: {current.referenceNote.text}{" "}
                                    <Link
                                        href={current.referenceNote.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline decoration-sky-600 underline-offset-2 hover:text-sky-700"
                                    >
                                        {current.referenceNote.url}
                                    </Link>
                                </p>
                            ) : null}
                        </div>
                    ) : null}

                    <div className="mt-8 flex flex-wrap gap-3">
                        {!revealed ? (
                            <button
                                type="button"
                                onClick={() => setRevealed(true)}
                                className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                            >
                                Show Answer
                            </button>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={() => markResult(true)}
                                    className="rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-emerald-700 hover:to-green-700 transition-all"
                                >
                                    ✓ I Got It
                                </button>
                                <button
                                    type="button"
                                    onClick={() => markResult(false)}
                                    className="rounded-lg bg-gradient-to-r from-rose-600 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-rose-700 hover:to-red-700 transition-all"
                                >
                                    ✗ I Missed It
                                </button>
                            </>
                        )}

                        <button
                            type="button"
                            onClick={previousQuestion}
                            className="rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            ← Previous
                        </button>
                        <button
                            type="button"
                            onClick={nextQuestion}
                            className="rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Next →
                        </button>
                    </div>
                </article>
            )}
        </section>
    );
}
