import type { CivicsQuestion, StateData } from "./types";
import { STATE_SPECIFIC_ANSWERS } from "../../data/civics-data";

// Import Congress data if available
let congressData: any = null;
try {
    congressData = require("../../../public/data/congress-members.json");
} catch (e) {
    console.warn("Congress data not found, using fallback data");
}

export function getAnswersForQuestion(question: CivicsQuestion, userState?: string): string[] {
    if (!question.isStateSpecific) {
        return question.answers;
    }

    if (!userState) {
        return ["Please select your state to see the answer"];
    }

    const answers: string[] = [];
    const questionText = question.question.toLowerCase();

    // Try to use Congress API data first, fall back to static data
    const stateCongressData = congressData?.states?.[userState];
    const staticStateData = STATE_SPECIFIC_ANSWERS[userState];
    const dataUpdateDate = congressData?.mostRecentCongressUpdate;

    if (questionText.includes("senator")) {
        // Use Congress API data if available
        if (stateCongressData?.senators?.length > 0) {
            answers.push(...stateCongressData.senators.map((s: any) => `${s.name} (${s.party})`));
            
            // Add data freshness info as metadata
            if (dataUpdateDate) {
                const updateDate = new Date(dataUpdateDate);
                answers.push(`__META_DATE__Information last updated: ${updateDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`);
            }
        } else if (staticStateData?.senators) {
            answers.push(...staticStateData.senators);
        }
    } else if (questionText.includes("governor")) {
        // Governors not in Congress API, use static data
        if (staticStateData?.governor) {
            answers.push(staticStateData.governor);
        }
    } else if (questionText.includes("capital")) {
        // Capitals not in Congress API, use static data
        if (staticStateData?.capital) {
            answers.push(staticStateData.capital);
        }
    } else if (questionText.includes("representative")) {
        // Use Congress API data if available
        if (stateCongressData?.representatives?.length > 0) {
            const repCount = stateCongressData.representatives.length;
            
            // Calculate data update info
            let updateInfo = '';
            if (dataUpdateDate) {
                const updateDate = new Date(dataUpdateDate);
                updateInfo = `${updateDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
            }
            
            // Add metadata as special markers that the component will parse
            answers.push(`__META_SUMMARY__${userState} currently has ${repCount} U.S. Representative${repCount !== 1 ? 's' : ''} in the House`);
            answers.push(`__META_INFO__To find your specific U.S. Representative, please look up your congressional district number at`);
            answers.push(`__META_LINK__https://www.house.gov/representatives/find-your-representative`);
            if (updateInfo) {
                answers.push(`__META_DATE__Information last updated: ${updateInfo}`);
            }
            answers.push(`__META_HEADER__${userState} Congressional Districts and Representatives:`);
            
            // List of districts and representatives
            stateCongressData.representatives.forEach((rep: any) => {
                // Display "At-Large" for states with single representative (district 0)
                const districtLabel = rep.district === 0 ? 'At-Large' : `District ${rep.district}`;
                answers.push(`${districtLabel}: ${rep.name} (${rep.party})`);
            });
            
        } else if (staticStateData?.representative) {
            answers.push(staticStateData.representative);
        }
    }

    return answers.length > 0 ? answers : ["Answer not available for this state"];
}
