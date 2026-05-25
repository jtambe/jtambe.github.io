import type { Metadata } from "next";
import AllQuestionsClient from "./all-questions-client";

export const metadata: Metadata = {
    title: "All USCIS Civics Questions | U.S. Citizenship Test",
    description:
        "Browse all 128 USCIS civics questions and answers organized by section. Prepare for the U.S. naturalization civics test with complete question and answer reference.",
    keywords: [
        "USCIS civics questions",
        "US citizenship test",
        "naturalization civics",
        "128 civics questions",
        "civics answers",
    ],
    openGraph: {
        title: "All USCIS Civics Questions | U.S. Citizenship Test",
        description:
            "Browse all 128 USCIS civics questions and answers organized by section.",
        type: "website",
    },
};

export default function AllQuestionsPage() {
    return <AllQuestionsClient />;
}
