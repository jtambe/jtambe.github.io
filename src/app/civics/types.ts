export type MainSection =
    | "American Government"
    | "American History"
    | "Symbols and Holidays";

export type SubSection =
    | "Principles of American Government"
    | "System of Government"
    | "Rights and Responsibilities"
    | "Colonial Period and Independence"
    | "1800s"
    | "Recent American History"
    | "Symbols"
    | "Holidays";

// Alias for backward compatibility
export type CivicsSection = MainSection;

export interface CivicsQuestion {
    id: number;
    question: string;
    answers: string[];
    section: MainSection;
    subsection: SubSection;
    isStateSpecific?: boolean;
    isFor65Plus?: boolean;
};

export type StateData = {
    senators?: string[];
    governor?: string;
    capital?: string;
    representative?: string;
};
