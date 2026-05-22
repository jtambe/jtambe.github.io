import type { CivicsQuestion, StateData } from "./types";
import { STATE_SPECIFIC_ANSWERS } from "../../data/civics-data";

export function getAnswersForQuestion(question: CivicsQuestion, userState?: string): string[] {
    if (!question.isStateSpecific) {
        return question.answers;
    }

    if (!userState || !STATE_SPECIFIC_ANSWERS[userState]) {
        return ["Please select your state to see the answer"];
    }

    const stateData = STATE_SPECIFIC_ANSWERS[userState];
    const answers: string[] = [];

    if (question.question.toLowerCase().includes("senator")) {
        answers.push(...(stateData.senators || []));
    } else if (question.question.toLowerCase().includes("governor")) {
        if (stateData.governor) answers.push(stateData.governor);
    } else if (question.question.toLowerCase().includes("capital")) {
        if (stateData.capital) answers.push(stateData.capital);
    } else if (question.question.toLowerCase().includes("representative")) {
        if (stateData.representative) answers.push(stateData.representative);
    }

    return answers.length > 0 ? answers : ["Answer not available for this state"];
}
