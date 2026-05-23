import { CivicsQuestion, StateData, MainSection, SubSection } from "../app/civics/types";

export const SECTION_OPTIONS = [
    "American Government",
    "American History",
    "Symbols and Holidays"
] as const;

export const SUBSECTION_MAP: Record<MainSection, SubSection[]> = {
    "American Government": [
        "Principles of American Government",
        "System of Government",
        "Rights and Responsibilities"
    ],
    "American History": [
        "Colonial Period and Independence",
        "1800s",
        "Recent American History"
    ],
    "Symbols and Holidays": [
        "Symbols",
        "Holidays"
    ]
};

export const ALL_SUBSECTIONS: SubSection[] = [
    "Principles of American Government",
    "System of Government",
    "Rights and Responsibilities",
    "Colonial Period and Independence",
    "1800s",
    "Recent American History",
    "Symbols",
    "Holidays"
];

export const US_STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export const STATE_SPECIFIC_ANSWERS: Record<string, StateData> = {
    "Alabama": {
        senators: ["Katie Britt", "Tommy Tuberville"],
        governor: "Kay Ivey",
        capital: "Montgomery"
    },
    "Alaska": {
        senators: ["Dan Sullivan", "Lisa Murkowski"],
        governor: "Mike Dunleavy",
        capital: "Juneau"
    },
    "Arizona": {
        senators: ["Mark Kelly", "Ruben Gallego"],
        governor: "Katie Hobbs",
        capital: "Phoenix"
    },
    "Arkansas": {
        senators: ["John Boozman", "Tom Cotton"],
        governor: "Sarah Huckabee Sanders",
        capital: "Little Rock"
    },
    "California": {
        senators: ["Adam Schiff", "Alex Padilla"],
        governor: "Gavin Newsom",
        capital: "Sacramento"
    },
    "Colorado": {
        senators: ["John Hickenlooper", "Michael Bennet"],
        governor: "Jared Polis",
        capital: "Denver"
    },
    "Connecticut": {
        senators: ["Chris Murphy", "Richard Blumenthal"],
        governor: "Ned Lamont",
        capital: "Hartford"
    },
    "Delaware": {
        senators: ["Chris Coons", "Lisa Blunt Rochester"],
        governor: "Matt Meyer",
        capital: "Dover"
    },
    "Florida": {
        senators: ["Rick Scott", "Unknown / Appointed Interim"],
        governor: "Ron DeSantis",
        capital: "Tallahassee"
    },
    "Georgia": {
        senators: ["Jon Ossoff", "Raphael Warnock"],
        governor: "Brian Kemp",
        capital: "Atlanta"
    },
    "Hawaii": {
        senators: ["Brian Schatz", "Mazie Hirono"],
        governor: "Josh Green",
        capital: "Honolulu"
    },
    "Idaho": {
        senators: ["Jim Risch", "Mike Crapo"],
        governor: "Brad Little",
        capital: "Boise"
    },
    "Illinois": {
        senators: ["Dick Durbin", "Tammy Duckworth"],
        governor: "J.B. Pritzker",
        capital: "Springfield"
    },
    "Indiana": {
        senators: ["Jim Banks", "Todd Young"],
        governor: "Mike Braun",
        capital: "Indianapolis"
    },
    "Iowa": {
        senators: ["Chuck Grassley", "Joni Ernst"],
        governor: "Kim Reynolds",
        capital: "Des Moines"
    },
    "Kansas": {
        senators: ["Jerry Moran", "Roger Marshall"],
        governor: "Laura Kelly",
        capital: "Topeka"
    },
    "Kentucky": {
        senators: ["Mitch McConnell", "Rand Paul"],
        governor: "Andy Beshear",
        capital: "Frankfort"
    },
    "Louisiana": {
        senators: ["Bill Cassidy", "John Kennedy"],
        governor: "Jeff Landry",
        capital: "Baton Rouge"
    },
    "Maine": {
        senators: ["Angus King", "Susan Collins"],
        governor: "Janet Mills",
        capital: "Augusta"
    },
    "Maryland": {
        senators: ["Angela Alsobrooks", "Chris Van Hollen"],
        governor: "Wes Moore",
        capital: "Annanpolis"
    },
    "Massachusetts": {
        senators: ["Ed Markey", "Elizabeth Warren"],
        governor: "Maura Healey",
        capital: "Boston"
    },
    "Michigan": {
        senators: ["Debbie Stabenow", "Gary Peters"],
        governor: "Gretchen Whitmer",
        capital: "Lansing"
    },
    "Minnesota": {
        senators: ["Amy Klobuchar", "Tina Smith"],
        governor: "Tim Walz",
        capital: "St. Paul"
    },
    "Mississippi": {
        senators: ["Cindy Hyde-Smith", "Roger Wicker"],
        governor: "Tate Reeves",
        capital: "Jackson"
    },
    "Missouri": {
        senators: ["Eric Schmitt", "Josh Hawley"],
        governor: "Mike Kehoe",
        capital: "Jefferson City"
    },
    "Montana": {
        senators: ["Jon Tester", "Steve Daines"],
        governor: "Greg Gianforte",
        capital: "Helena"
    },
    "Nebraska": {
        senators: ["Deb Fischer", "Pete Ricketts"],
        governor: "Jim Pillen",
        capital: "Lincoln"
    },
    "Nevada": {
        senators: ["Catherine Cortez Masto", "Jacky Rosen"],
        governor: "Joe Lombardo",
        capital: "Carson City"
    },
    "New Hampshire": {
        senators: ["Jeanne Shaheen", "Maggie Hassan"],
        governor: "Kelly Ayotte",
        capital: "Concord"
    },
    "New Jersey": {
        senators: ["Cory Booker", "George Helmy"],
        governor: "Mikie Sherrill",
        capital: "Trenton"
    },
    "New Mexico": {
        senators: ["Martin Heinrich", "Ben Ray Luján"],
        governor: "Michelle Lujan Grisham",
        capital: "Santa Fe"
    },
    "New York": {
        senators: ["Chuck Schumer", "Kirsten Gillibrand"],
        governor: "Kathy Hochul",
        capital: "Albany"
    },
    "North Carolina": {
        senators: ["Ted Budd", "Thom Tillis"],
        governor: "Josh Stein",
        capital: "Raleigh"
    },
    "North Dakota": {
        senators: ["John Hoeven", "Kevin Cramer"],
        governor: "Kelly Armstrong",
        capital: "Bismarck"
    },
    "Ohio": {
        senators: ["Sherrod Brown", "Unknown / Appointed Interim"],
        governor: "Mike DeWine",
        capital: "Columbus"
    },
    "Oklahoma": {
        senators: ["Alan Armstrong", "James Lankford"],
        governor: "Kevin Stitt",
        capital: "Oklahoma City"
    },
    "Oregon": {
        senators: ["Jeff Merkley", "Ron Wyden"],
        governor: "Tina Kotek",
        capital: "Salem"
    },
    "Pennsylvania": {
        senators: ["Bob Casey Jr.", "John Fetterman"],
        governor: "Josh Shapiro",
        capital: "Harrisburg"
    },
    "Rhode Island": {
        senators: ["Jack Reed", "Sheldon Whitehouse"],
        governor: "Dan McKee",
        capital: "Providence"
    },
    "South Carolina": {
        senators: ["Lindsey Graham", "Tim Scott"],
        governor: "Henry McMaster",
        capital: "Columbia"
    },
    "South Dakota": {
        senators: ["John Thune", "Mike Rounds"],
        governor: "Larry Rhoden",
        capital: "Pierre"
    },
    "Tennessee": {
        senators: ["Marsha Blackburn", "Bill Hagerty"],
        governor: "Bill Lee",
        capital: "Nashville"
    },
    "Texas": {
        senators: ["John Cornyn", "Ted Cruz"],
        governor: "Greg Abbott",
        capital: "Austin"
    },
    "Utah": {
        senators: ["Mike Lee", "Mitt Romney"],
        governor: "Spencer Cox",
        capital: "Salt Lake City"
    },
    "Vermont": {
        senators: ["Bernie Sanders", "Peter Welch"],
        governor: "Phil Scott",
        capital: "Montpelier"
    },
    "Virginia": {
        senators: ["Mark Warner", "Tim Kaine"],
        governor: "Abigail Spanberger",
        capital: "Richmond"
    },
    "Washington": {
        senators: ["Maria Cantwell", "Patty Murray"],
        governor: "Bob Ferguson",
        capital: "Olympia"
    },
    "West Virginia": {
        senators: ["Jim Justice", "Shelley Moore Capito"],
        governor: "Patrick Morrisey",
        capital: "Charleston"
    },
    "Wisconsin": {
        senators: ["Ron Johnson", "Tammy Baldwin"],
        governor: "Tony Evers",
        capital: "Madison"
    },
    "Wyoming": {
        senators: ["John Barrasso", "Cynthia Lummis"],
        governor: "Mark Gordon",
        capital: "Cheyenne"
    }
};

export const CIVICS_QUESTIONS: CivicsQuestion[] = [
    // Questions 1-15: Principles of American Government
    {
        id: 1,
        question: "What is the form of government of the United States?",
        answers: [
            "Republic",
            "Constitution-based federal republic",
            "Representative democracy"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 2,
        question: "What is the supreme law of the land?",
        answers: [
            "(U.S.) Constitution"
        ],
        section: "American Government",
        subsection: "Principles of American Government",
        isFor65Plus: true
    },
    {
        id: 3,
        question: "Name one thing the U.S. Constitution does.",
        answers: [
            "Forms the government",
            "Defines powers of government",
            "Defines the parts of government",
            "Protects the rights of the people"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 4,
        question: 'The U.S. Constitution starts with the words "We the People." What does "We the People" mean?',
        answers: [
            "Self-government",
            "Popular sovereignty",
            "Consent of the governed",
            "People should govern themselves",
            "(Example of) social contract"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 5,
        question: "How are changes made to the U.S. Constitution?",
        answers: [
            "Amendments",
            "The amendment process"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 6,
        question: "What does the Bill of Rights protect?",
        answers: [
            "(The basic) rights of Americans",
            "(The basic) rights of people living in the United States"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 7,
        question: "How many amendments does the U.S. Constitution have?",
        answers: [
            "Twenty-seven (27)"
        ],
        section: "American Government",
        subsection: "Principles of American Government",
        isFor65Plus: true
    },
    {
        id: 8,
        question: "Why is the Declaration of Independence important?",
        answers: [
            "It says America is free from British control.",
            "It says all people are created equal.",
            "It identifies inherent rights.",
            "It identifies individual freedoms."
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 9,
        question: "What founding document said the American colonies were free from Britain?",
        answers: [
            "Declaration of Independence"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 10,
        question: "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
        answers: [
            "Equality",
            "Liberty",
            "Social contract",
            "Natural rights",
            "Limited government",
            "Self-government"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 11,
        question: 'The words "Life, Liberty, and the pursuit of Happiness" are in what founding document?',
        answers: [
            "Declaration of Independence"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 12,
        question: "What is the economic system of the United States?",
        answers: [
            "Capitalism",
            "Free market economy"
        ],
        section: "American Government",
        subsection: "Principles of American Government",
        isFor65Plus: true
    },
    {
        id: 13,
        question: "What is the rule of law?",
        answers: [
            "Everyone must follow the law.",
            "Leaders must obey the law.",
            "Government must obey the law.",
            "No one is above the law."
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 14,
        question: "Many documents influenced the U.S. Constitution. Name one.",
        answers: [
            "Declaration of Independence",
            "Articles of Confederation",
            "Federalist Papers",
            "Anti-Federalist Papers",
            "Virginia Declaration of Rights",
            "Fundamental Orders of Connecticut",
            "Mayflower Compact",
            "Iroquois Great Law of Peace"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    {
        id: 15,
        question: "There are three branches of government. Why?",
        answers: [
            "So one part does not become too powerful",
            "Checks and balances",
            "Separation of powers"
        ],
        section: "American Government",
        subsection: "Principles of American Government"
    },
    // Questions 16-62: System of Government
    {
        id: 16,
        question: "Name the three branches of government.",
        answers: [
            "Legislative, executive, and judicial",
            "Congress, president, and the courts"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 17,
        question: "The President of the United States is in charge of which branch of government?",
        answers: [
            "Executive branch"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 18,
        question: "What part of the federal government writes laws?",
        answers: [
            "(U.S.) Congress",
            "(U.S. or national) legislature",
            "Legislative branch"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 19,
        question: "What are the two parts of the U.S. Congress?",
        answers: [
            "Senate and House (of Representatives)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 20,
        question: "Name one power of the U.S. Congress.",
        answers: [
            "Writes laws",
            "Declares war",
            "Makes the federal budget"
        ],
        section: "American Government",
        subsection: "System of Government",
        isFor65Plus: true
    },
    {
        id: 21,
        question: "How many U.S. senators are there?",
        answers: [
            "One hundred (100)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 22,
        question: "How long is a term for a U.S. senator?",
        answers: [
            "Six (6) years"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 23,
        question: "Who is one of your state's U.S. senators now?",
        answers: [],
        section: "American Government",
        subsection: "System of Government",
        isStateSpecific: true
    },
    {
        id: 24,
        question: "How many voting members are in the House of Representatives?",
        answers: [
            "Four hundred thirty-five (435)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 25,
        question: "How long is a term for a member of the House of Representatives?",
        answers: [
            "Two (2) years"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 26,
        question: "Why do U.S. representatives serve shorter terms than U.S. senators?",
        answers: [
            "To more closely follow public opinion"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 27,
        question: "How many senators does each state have?",
        answers: [
            "Two (2)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 28,
        question: "Why does each state have two senators?",
        answers: [
            "Equal representation (for small states)",
            "The Great Compromise (Connecticut Compromise)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 29,
        question: "Name your U.S. representative.",
        answers: [],
        section: "American Government",
        subsection: "System of Government",
        isStateSpecific: true
    },
    {
        id: 30,
        question: "What is the name of the Speaker of the House of Representatives now?",
        answers: [
            "Mike Johnson",
            "Johnson",
            "James Michael Johnson (birth name)"
        ],
        referenceNote: {
            text: "For the latest official updates, visit USCIS test updates.",
            url: "https://www.uscis.gov/citizenship/testupdates"
        },
        section: "American Government",
        subsection: "System of Government",
        isFor65Plus: true
    },
    {
        id: 31,
        question: "Who does a U.S. senator represent?",
        answers: [
            "Citizens of their state",
            "People of their state"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 32,
        question: "Who elects U.S. senators?",
        answers: [
            "Citizens from their state"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 33,
        question: "Who does a member of the House of Representatives represent?",
        answers: [
            "Citizens in their (congressional) district",
            "Citizens in their district",
            "People from their (congressional) district",
            "People in their district"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 34,
        question: "Who elects members of the House of Representatives?",
        answers: [
            "Citizens from their (congressional) district"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 35,
        question: "Some states have more representatives than other states. Why?",
        answers: [
            "(Because of) the state's population",
            "(Because) they have more people",
            "(Because) some states have more people"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 36,
        question: "The President of the United States is elected for how many years?",
        answers: [
            "Four (4) years"
        ],
        section: "American Government",
        subsection: "System of Government",
        isFor65Plus: true
    },
    {
        id: 37,
        question: "The President of the United States can serve only two terms. Why?",
        answers: [
            "(Because of) the 22nd Amendment",
            "To keep the president from becoming too powerful"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 38,
        question: "What is the name of the President of the United States now?",
        answers: [
            "Donald J. Trump",
            "Donald Trump",
            "Trump"
        ],
        referenceNote: {
            text: "For the latest official updates, visit USCIS test updates.",
            url: "https://www.uscis.gov/citizenship/testupdates"
        },
        section: "American Government",
        subsection: "System of Government",
        isFor65Plus: true
    },
    {
        id: 39,
        question: "What is the name of the Vice President of the United States now?",
        answers: [
            "JD Vance",
            "Vance"
        ],
        referenceNote: {
            text: "For the latest official updates, visit USCIS test updates.",
            url: "https://www.uscis.gov/citizenship/testupdates"
        },
        section: "American Government",
        subsection: "System of Government",
        isFor65Plus: true
    },
    {
        id: 40,
        question: "If the president can no longer serve, who becomes president?",
        answers: [
            "The Vice President (of the United States)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 41,
        question: "Name one power of the president.",
        answers: [
            "Signs bills into law",
            "Vetoes bills",
            "Enforces laws",
            "Commander in Chief (of the military)",
            "Chief diplomat",
            "Appoints federal judges"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 42,
        question: "Who is Commander in Chief of the U.S. military?",
        answers: [
            "The President (of the United States)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 43,
        question: "Who signs bills to become laws?",
        answers: [
            "The President (of the United States)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 44,
        question: "Who vetoes bills?",
        answers: [
            "The President (of the United States)"
        ],
        section: "American Government",
        subsection: "System of Government",
        isFor65Plus: true
    },
    {
        id: 45,
        question: "Who appoints federal judges?",
        answers: [
            "The President (of the United States)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 46,
        question: "The executive branch has many parts. Name one.",
        answers: [
            "President (of the United States)",
            "Cabinet",
            "Federal departments and agencies"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 47,
        question: "What does the President's Cabinet do?",
        answers: [
            "Advises the President (of the United States)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 48,
        question: "What are two Cabinet-level positions?",
        answers: [
            "Attorney General",
            "Secretary of Agriculture",
            "Secretary of Commerce",
            "Secretary of Education",
            "Secretary of Energy",
            "Secretary of Health and Human Services",
            "Secretary of Homeland Security",
            "Secretary of Housing and Urban Development",
            "Secretary of the Interior",
            "Secretary of Labor",
            "Secretary of State",
            "Secretary of Transportation",
            "Secretary of the Treasury",
            "Secretary of Veterans Affairs",
            "Secretary of War (Defense)",
            "Vice-President",
            "Administrator of the Environmental Protection Agency",
            "Administrator of the Small Business Administration",
            "Director of the Central Intelligence Agency",
            "Director of the Office of Management and Budget",
            "Director of National Intelligence",
            "United States Trade Representative"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 49,
        question: "Why is the Electoral College important?",
        answers: [
            "It decides who is elected president.",
            "It provides a compromise between the popular election of the president and congressional selection."
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 50,
        question: "What is one part of the judicial branch?",
        answers: [
            "Supreme Court",
            "Federal Courts"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 51,
        question: "What does the judicial branch do?",
        answers: [
            "Reviews laws",
            "Explains laws",
            "Resolves disputes (disagreements) about the law",
            "Decides if a law goes against the (U.S.) Constitution"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 52,
        question: "What is the highest court in the United States?",
        answers: [
            "Supreme Court"
        ],
        section: "American Government",
        subsection: "System of Government",
        isFor65Plus: true
    },
    {
        id: 53,
        question: "How many seats are on the Supreme Court?",
        answers: [
            "Nine (9)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 54,
        question: "How many Supreme Court justices are usually needed to decide a case?",
        answers: [
            "Five (5)"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 55,
        question: "How long do Supreme Court justices serve?",
        answers: [
            "(For) life",
            "Lifetime appointment",
            "(Until) retirement"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 56,
        question: "Supreme Court justices serve for life. Why?",
        answers: [
            "To be independent (of politics)",
            "To limit outside (political) influence"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 57,
        question: "Who is the Chief Justice of the United States now?",
        answers: [
            "John Roberts",
            "John G. Roberts, Jr.",
            "Roberts"
        ],
        referenceNote: {
            text: "For the latest official updates, visit USCIS test updates.",
            url: "https://www.uscis.gov/citizenship/testupdates"
        },
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 58,
        question: "Name one power that is only for the federal government.",
        answers: [
            "Print paper money",
            "Mint coins",
            "Declare war",
            "Create an army",
            "Make treaties",
            "Set foreign policy"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 59,
        question: "Name one power that is only for the states.",
        answers: [
            "Provide schooling and education",
            "Provide protection (police)",
            "Provide safety (fire departments)",
            "Give a driver's license",
            "Approve zoning and land use"
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 60,
        question: "What is the purpose of the 10th Amendment?",
        answers: [
            "(It states that the) powers not given to the federal government belong to the states or to the people."
        ],
        section: "American Government",
        subsection: "System of Government"
    },
    {
        id: 61,
        question: "Who is the governor of your state now?",
        answers: [],
        section: "American Government",
        subsection: "System of Government",
        isStateSpecific: true,
        isFor65Plus: true
    },
    {
        id: 62,
        question: "What is the capital of your state?",
        answers: [],
        section: "American Government",
        subsection: "System of Government",
        isStateSpecific: true
    },
    // Questions 63-72: Rights and Responsibilities
    {
        id: 63,
        question: "There are four amendments to the U.S. Constitution about who can vote. Describe one of them.",
        answers: [
            "Citizens eighteen (18) and older (can vote).",
            "You don't have to pay (a poll tax) to vote.",
            "Any citizen can vote. (Women and men can vote.)",
            "A male citizen of any race (can vote)."
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities"
    },
    {
        id: 64,
        question: "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
        answers: [
            "Citizens",
            "Citizens of the United States",
            "U.S. citizens"
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities"
    },
    {
        id: 65,
        question: "What are three rights of everyone living in the United States?",
        answers: [
            "Freedom of expression",
            "Freedom of speech",
            "Freedom of assembly",
            "Freedom to petition the government",
            "Freedom of religion",
            "The right to bear arms"
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities"
    },
    {
        id: 66,
        question: "What do we show loyalty to when we say the Pledge of Allegiance?",
        answers: [
            "The United States",
            "The flag"
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities",
        isFor65Plus: true
    },
    {
        id: 67,
        question: "Name two promises that new citizens make in the Oath of Allegiance.",
        answers: [
            "Give up loyalty to other countries",
            "Defend the (U.S.) Constitution",
            "Obey the laws of the United States",
            "Serve in the military (if needed)",
            "Serve (help, do important work for) the nation (if needed)",
            "Be loyal to the United States"
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities"
    },
    {
        id: 68,
        question: "How can people become United States citizens?",
        answers: [
            "Be born in the United States, under the conditions set by the 14th Amendment",
            "Naturalize",
            "Derive citizenship (under conditions set by Congress)"
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities"
    },
    {
        id: 69,
        question: "What are two examples of civic participation in the United States?",
        answers: [
            "Vote",
            "Run for office",
            "Join a political party",
            "Help with a campaign",
            "Join a civic group",
            "Join a community group",
            "Give an elected official your opinion (on an issue)",
            "Contact elected officials",
            "Support or oppose an issue or policy",
            "Write to a newspaper"
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities"
    },
    {
        id: 70,
        question: "What is one way Americans can serve their country?",
        answers: [
            "Vote",
            "Pay taxes",
            "Obey the law",
            "Serve in the military",
            "Run for office",
            "Work for local, state, or federal government"
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities"
    },
    {
        id: 71,
        question: "Why is it important to pay federal taxes?",
        answers: [
            "Required by law",
            "All people pay to fund the federal government",
            "Required by the (U.S.) Constitution (16th Amendment)",
            "Civic duty"
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities"
    },
    {
        id: 72,
        question: "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
        answers: [
            "Required by law",
            "Civic duty",
            "Makes the draft fair, if needed"
        ],
        section: "American Government",
        subsection: "Rights and Responsibilities"
    },
    // Questions 73-89: Colonial Period and Independence
    {
        id: 73,
        question: "The colonists came to America for many reasons. Name one.",
        answers: [
            "Freedom",
            "Political liberty",
            "Religious freedom",
            "Economic opportunity",
            "Escape persecution"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 74,
        question: "Who lived in America before the Europeans arrived?",
        answers: [
            "American Indians",
            "Native Americans"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence",
        isFor65Plus: true
    },
    {
        id: 75,
        question: "What group of people was taken and sold as slaves?",
        answers: [
            "Africans",
            "People from Africa"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 76,
        question: "What war did the Americans fight to win independence from Britain?",
        answers: [
            "American Revolution",
            "The (American) Revolutionary War",
            "War for (American) Independence"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 77,
        question: "Name one reason why the Americans declared independence from Britain.",
        answers: [
            "High taxes",
            "Taxation without representation",
            "British soldiers stayed in Americans' houses (boarding, quartering)",
            "They did not have self-government",
            "Boston Massacre",
            "Boston Tea Party (Tea Act)",
            "Stamp Act",
            "Sugar Act",
            "Townshend Acts",
            "Intolerable (Coercive) Acts"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 78,
        question: "Who wrote the Declaration of Independence?",
        answers: [
            "(Thomas) Jefferson"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence",
        isFor65Plus: true
    },
    {
        id: 79,
        question: "When was the Declaration of Independence adopted?",
        answers: [
            "July 4, 1776"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 80,
        question: "The American Revolution had many important events. Name one.",
        answers: [
            "(Battle of) Bunker Hill",
            "Declaration of Independence",
            "Washington Crossing the Delaware (Battle of Trenton)",
            "(Battle of) Saratoga",
            "Valley Forge (Encampment)",
            "(Battle of) Yorktown (British surrender at Yorktown)"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 81,
        question: "There were 13 original states. Name five.",
        answers: [
            "New Hampshire",
            "Massachusetts",
            "Rhode Island",
            "Connecticut",
            "New York",
            "New Jersey",
            "Pennsylvania",
            "Delaware",
            "Maryland",
            "Virginia",
            "North Carolina",
            "South Carolina",
            "Georgia"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 82,
        question: "What founding document was written in 1787?",
        answers: [
            "(U.S.) Constitution"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 83,
        question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
        answers: [
            "(James) Madison",
            "(Alexander) Hamilton",
            "(John) Jay",
            "Publius"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 84,
        question: "Why were the Federalist Papers important?",
        answers: [
            "They helped people understand the (U.S.) Constitution.",
            "They supported passing the (U.S.) Constitution."
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 85,
        question: "Benjamin Franklin is famous for many things. Name one.",
        answers: [
            "Founded the first free public libraries",
            "First Postmaster General of the United States",
            "Helped write the Declaration of Independence",
            "Inventor",
            "U.S. diplomat"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 86,
        question: "George Washington is famous for many things. Name one.",
        answers: [
            '"Father of Our Country"',
            "First president of the United States",
            "General of the Continental Army",
            "President of the Constitutional Convention"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence",
        isFor65Plus: true
    },
    {
        id: 87,
        question: "Thomas Jefferson is famous for many things. Name one.",
        answers: [
            "Writer of the Declaration of Independence",
            "Third president of the United States",
            "Doubled the size of the United States (Louisiana Purchase)",
            "First Secretary of State",
            "Founded the University of Virginia",
            "Writer of the Virginia Statute on Religious Freedom"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 88,
        question: "James Madison is famous for many things. Name one.",
        answers: [
            '"Father of the Constitution"',
            "Fourth president of the United States",
            "President during the War of 1812",
            "One of the writers of the Federalist Papers"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    {
        id: 89,
        question: "Alexander Hamilton is famous for many things. Name one.",
        answers: [
            "First Secretary of the Treasury",
            "One of the writers of the Federalist Papers",
            "Helped establish the First Bank of the United States",
            "Aide to General George Washington",
            "Member of the Continental Congress"
        ],
        section: "American History",
        subsection: "Colonial Period and Independence"
    },
    // Questions 90-99: 1800s
    {
        id: 90,
        question: "What territory did the United States buy from France in 1803?",
        answers: [
            "Louisiana Territory",
            "Louisiana"
        ],
        section: "American History",
        subsection: "1800s"
    },
    {
        id: 91,
        question: "Name one war fought by the United States in the 1800s.",
        answers: [
            "War of 1812",
            "Mexican-American War",
            "Civil War",
            "Spanish-American War"
        ],
        section: "American History",
        subsection: "1800s"
    },
    {
        id: 92,
        question: "Name the U.S. war between the North and the South.",
        answers: [
            "The Civil War"
        ],
        section: "American History",
        subsection: "1800s"
    },
    {
        id: 93,
        question: "The Civil War had many important events. Name one.",
        answers: [
            "(Battle of) Fort Sumter",
            "Emancipation Proclamation",
            "(Battle of) Vicksburg",
            "(Battle of) Gettysburg",
            "Sherman's March",
            "(Surrender at) Appomattox",
            "(Battle of) Antietam/Sharpsburg",
            "Lincoln was assassinated."
        ],
        section: "American History",
        subsection: "1800s"
    },
    {
        id: 94,
        question: "Abraham Lincoln is famous for many things. Name one.",
        answers: [
            "Freed the slaves (Emancipation Proclamation)",
            "Saved (or preserved) the Union",
            "Led the United States during the Civil War",
            "16th president of the United States",
            "Delivered the Gettysburg Address"
        ],
        section: "American History",
        subsection: "1800s",
        isFor65Plus: true
    },
    {
        id: 95,
        question: "What did the Emancipation Proclamation do?",
        answers: [
            "Freed the slaves",
            "Freed slaves in the Confederacy",
            "Freed slaves in the Confederate states",
            "Freed slaves in most Southern states"
        ],
        section: "American History",
        subsection: "1800s"
    },
    {
        id: 96,
        question: "What U.S. war ended slavery?",
        answers: [
            "The Civil War"
        ],
        section: "American History",
        subsection: "1800s"
    },
    {
        id: 97,
        question: "What amendment says all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are U.S. citizens?",
        answers: [
            "14th Amendment"
        ],
        section: "American History",
        subsection: "1800s"
    },
    {
        id: 98,
        question: "When did all men get the right to vote?",
        answers: [
            "After the Civil War",
            "During Reconstruction",
            "(With the) 15th Amendment",
            "1870"
        ],
        section: "American History",
        subsection: "1800s"
    },
    {
        id: 99,
        question: "Name one leader of the women's rights movement in the 1800s.",
        answers: [
            "Susan B. Anthony",
            "Elizabeth Cady Stanton",
            "Sojourner Truth",
            "Harriet Tubman",
            "Lucretia Mott",
            "Lucy Stone"
        ],
        section: "American History",
        subsection: "1800s"
    },
    // Questions 100-118: Recent American History
    {
        id: 100,
        question: "Name one war fought by the United States in the 1900s.",
        answers: [
            "World War I",
            "World War II",
            "Korean War",
            "Vietnam War",
            "(Persian) Gulf War"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 101,
        question: "Why did the United States enter World War I?",
        answers: [
            "Because Germany attacked U.S. (civilian) ships",
            "To support the Allied Powers (England, France, Italy, and Russia)",
            "To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 102,
        question: "When did all women get the right to vote?",
        answers: [
            "1920",
            "After World War I",
            "(With the) 19th Amendment"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 103,
        question: "What was the Great Depression?",
        answers: [
            "Longest economic recession in modern history"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 104,
        question: "When did the Great Depression start?",
        answers: [
            "The Great Crash (1929)",
            "Stock market crash of 1929"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 105,
        question: "Who was president during the Great Depression and World War II?",
        answers: [
            "(Franklin) Roosevelt"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 106,
        question: "Why did the United States enter World War II?",
        answers: [
            "(Bombing of) Pearl Harbor",
            "Japanese attacked Pearl Harbor",
            "To support the Allied Powers (England, France, and Russia)",
            "To oppose the Axis Powers (Germany, Italy, and Japan)"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 107,
        question: "Dwight Eisenhower is famous for many things. Name one.",
        answers: [
            "General during World War II",
            "President at the end of (during) the Korean War",
            "34th president of the United States",
            "Signed the Federal-Aid Highway Act of 1956 (Created the Interstate System)"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 108,
        question: "Who was the United States' main rival during the Cold War?",
        answers: [
            "Soviet Union",
            "USSR",
            "Russia"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 109,
        question: "During the Cold War, what was one main concern of the United States?",
        answers: [
            "Communism",
            "Nuclear war"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 110,
        question: "Why did the United States enter the Korean War?",
        answers: [
            "To stop the spread of communism"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 111,
        question: "Why did the United States enter the Vietnam War?",
        answers: [
            "To stop the spread of communism"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 112,
        question: "What did the civil rights movement do?",
        answers: [
            "Fought to end racial discrimination"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 113,
        question: "Martin Luther King, Jr. is famous for many things. Name one.",
        answers: [
            "Fought for civil rights",
            "Worked for equality for all Americans",
            'Worked to ensure that people would "not be judged by the color of their skin, but by the content of their character"'
        ],
        section: "American History",
        subsection: "Recent American History",
        isFor65Plus: true
    },
    {
        id: 114,
        question: "Why did the United States enter the Persian Gulf War?",
        answers: [
            "To force the Iraqi military from Kuwait"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 115,
        question: "What major event happened on September 11, 2001 in the United States?",
        answers: [
            "Terrorists attacked the United States",
            "Terrorists took over two planes and crashed them into the World Trade Center in New York City",
            "Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia",
            "Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania"
        ],
        section: "American History",
        subsection: "Recent American History",
        isFor65Plus: true
    },
    {
        id: 116,
        question: "Name one U.S. military conflict after the September 11, 2001 attacks.",
        answers: [
            "(Global) War on Terror",
            "War in Afghanistan",
            "War in Iraq"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 117,
        question: "Name one American Indian tribe in the United States.",
        answers: [
            "Apache",
            "Blackfeet",
            "Cayuga",
            "Cherokee",
            "Cheyenne",
            "Chippewa",
            "Choctaw",
            "Creek",
            "Crow",
            "Hopi",
            "Huron",
            "Inupiat",
            "Lakota",
            "Mohawk",
            "Mohegan",
            "Navajo",
            "Oneida",
            "Onondaga",
            "Pueblo",
            "Seminole",
            "Seneca",
            "Shawnee",
            "Sioux",
            "Teton",
            "Tuscarora"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    {
        id: 118,
        question: "Name one example of an American innovation.",
        answers: [
            "Light bulb",
            "Automobile (cars, internal combustion engine)",
            "Skyscrapers",
            "Airplane",
            "Assembly line",
            "Landing on the moon",
            "Integrated circuit (IC)"
        ],
        section: "American History",
        subsection: "Recent American History"
    },
    // Questions 119-124: Symbols
    {
        id: 119,
        question: "What is the capital of the United States?",
        answers: [
            "Washington, D.C."
        ],
        section: "Symbols and Holidays",
        subsection: "Symbols"
    },
    {
        id: 120,
        question: "Where is the Statue of Liberty?",
        answers: [
            "New York (Harbor)",
            "Liberty Island [Also acceptable are New Jersey, near New York City, and on the Hudson (River).]"
        ],
        section: "Symbols and Holidays",
        subsection: "Symbols"
    },
    {
        id: 121,
        question: "Why does the flag have 13 stripes?",
        answers: [
            "(Because there were) 13 original colonies",
            "(Because the stripes) represent the original colonies"
        ],
        section: "Symbols and Holidays",
        subsection: "Symbols",
        isFor65Plus: true
    },
    {
        id: 122,
        question: "Why does the flag have 50 stars?",
        answers: [
            "(Because there is) one star for each state",
            "(Because) each star represents a state",
            "(Because there are) 50 states"
        ],
        section: "Symbols and Holidays",
        subsection: "Symbols"
    },
    {
        id: 123,
        question: "What is the name of the national anthem?",
        answers: [
            "The Star-Spangled Banner"
        ],
        section: "Symbols and Holidays",
        subsection: "Symbols"
    },
    {
        id: 124,
        question: 'The Nation\'s first motto was "E Pluribus Unum." What does that mean?',
        answers: [
            "Out of many, one",
            "We all become one"
        ],
        section: "Symbols and Holidays",
        subsection: "Symbols"
    },
    // Questions 125-128: Holidays
    {
        id: 125,
        question: "What is Independence Day?",
        answers: [
            "A holiday to celebrate U.S. independence (from Britain)",
            "The country's birthday"
        ],
        section: "Symbols and Holidays",
        subsection: "Holidays"
    },
    {
        id: 126,
        question: "Name three national U.S. holidays.",
        answers: [
            "New Year's Day",
            "Martin Luther King, Jr. Day",
            "Presidents Day (Washington's Birthday)",
            "Memorial Day",
            "Juneteenth",
            "Independence Day",
            "Labor Day",
            "Columbus Day",
            "Veterans Day",
            "Thanksgiving Day",
            "Christmas Day"
        ],
        section: "Symbols and Holidays",
        subsection: "Holidays",
        isFor65Plus: true
    },
    {
        id: 127,
        question: "What is Memorial Day?",
        answers: [
            "A holiday to honor soldiers who died in military service"
        ],
        section: "Symbols and Holidays",
        subsection: "Holidays"
    },
    {
        id: 128,
        question: "What is Veterans Day?",
        answers: [
            "A holiday to honor people in the (U.S.) military",
            "A holiday to honor people who have served (in the U.S. military)"
        ],
        section: "Symbols and Holidays",
        subsection: "Holidays"
    }
];
