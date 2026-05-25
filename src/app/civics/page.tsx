import type { Metadata } from "next";
import CivicsQuiz from "./civics-quiz";

export const metadata: Metadata = {
    title: "U.S. Civics Quiz | Practice for the Citizenship Test",
    description:
        "Practice the official USCIS civics test with interactive quizzes. Study all 128 questions with sequential and random modes, filter by section, and prepare for your U.S. naturalization interview.",
    keywords: [
        "US civics quiz",
        "USCIS practice test",
        "citizenship test quiz",
        "naturalization test",
        "civics practice",
    ],
    openGraph: {
        title: "U.S. Civics Quiz | Practice for the Citizenship Test",
        description:
            "Practice the official USCIS civics test with interactive quizzes.",
        type: "website",
    },
};

export default function CivicsPage() {
    return <CivicsQuiz />;
}

