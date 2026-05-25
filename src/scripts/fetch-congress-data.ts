import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

interface CongressMember {
  bioguideId: string;
  name: string;
  partyName: string;
  state: string;
  district?: number;
  updateDate?: string;
  depiction?: {
    imageUrl: string;
    attribution?: string;
  };
  terms: {
    item: Array<{
      chamber: string;
      startYear: number;
      endYear?: number;
    }>;
  };
}

interface ApiResponse {
  members: CongressMember[];
  pagination?: {
    count: number;
    next?: string;
  };
}

interface Senator {
  name: string;
  party: string;
}

interface Representative {
  name: string;
  party: string;
  district: number;
}

interface StateData {
  senators: Senator[];
  representatives: Representative[];
}

interface CongressData {
  lastUpdated: string;
  mostRecentCongressUpdate: string;
  states: Record<string, StateData>;
}

const API_KEY = process.env.CONGRESS_API_KEY;
const BASE_URL = 'https://api.congress.gov/v3/member';

async function fetchAllMembers(): Promise<CongressMember[]> {
  if (!API_KEY) {
    throw new Error('CONGRESS_API_KEY environment variable is not set');
  }

  console.log('Fetching Congress members data...');
  const allMembers: CongressMember[] = [];
  let offset = 0;
  const limit = 250;

  // Fetch all pages (should be 3 calls for ~536 members)
  while (true) {
    const url = `${BASE_URL}?format=json&offset=${offset}&limit=${limit}&currentMember=true&api_key=${API_KEY}`;
    
    console.log(`Fetching offset ${offset}...`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();
    allMembers.push(...data.members);

    console.log(`Fetched ${data.members.length} members (total so far: ${allMembers.length})`);

    // Check if there are more pages
    if (data.pagination?.next) {
      offset += limit;
    } else {
      break;
    }
  }

  console.log(`\nTotal members fetched: ${allMembers.length}`);
  return allMembers;
}

function getCurrentChamber(member: CongressMember): 'Senate' | 'House of Representatives' | null {
  // Get the most recent term
  const terms = member.terms?.item || [];
  if (terms.length === 0) return null;

  // Sort by startYear descending to get most recent
  const sortedTerms = [...terms].sort((a, b) => b.startYear - a.startYear);
  const currentTerm = sortedTerms[0];

  // If endYear exists and is not current, they're not serving in this chamber
  if (currentTerm.endYear && currentTerm.endYear < new Date().getFullYear()) {
    // Check if they have a newer term in a different chamber
    const newerTerms = sortedTerms.filter(t => !t.endYear || t.endYear >= new Date().getFullYear());
    if (newerTerms.length > 0) {
      return newerTerms[0].chamber as 'Senate' | 'House of Representatives';
    }
    return null;
  }

  return currentTerm.chamber as 'Senate' | 'House of Representatives';
}

function processMembers(members: CongressMember[]): CongressData {
  const states: Record<string, StateData> = {};
  let mostRecentUpdate = '';

  // Initialize all US states
  const US_STATES = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];

  US_STATES.forEach(state => {
    states[state] = { senators: [], representatives: [] };
  });

  let senatorCount = 0;
  let representativeCount = 0;

  members.forEach(member => {
    const chamber = getCurrentChamber(member);
    if (!chamber) return; // Skip if not currently serving

    const state = member.state;
    if (!states[state]) {
      // Skip territories and other non-state entries
      return;
    }

    // Track most recent updateDate
    if (member.updateDate && member.updateDate > mostRecentUpdate) {
      mostRecentUpdate = member.updateDate;
    }

    const imageUrl = member.depiction?.imageUrl;

    if (chamber === 'Senate') {
      states[state].senators.push({
        name: member.name,
        party: member.partyName
      });
      senatorCount++;
    } else if (chamber === 'House of Representatives' && member.district) {
      states[state].representatives.push({
        name: member.name,
        party: member.partyName,
        district: member.district
      });
      representativeCount++;
    }
  });

  // Sort representatives by district number
  Object.values(states).forEach(stateData => {
    stateData.representatives.sort((a, b) => a.district - b.district);
  });

  console.log(`\nProcessed: ${senatorCount} senators, ${representativeCount} representatives`);

  return {
    lastUpdated: new Date().toISOString(),
    mostRecentCongressUpdate: mostRecentUpdate,
    states
  };
}

async function main() {
  try {
    // Fetch all members
    const members = await fetchAllMembers();

    // Process into structured data
    const congressData = processMembers(members);

    // Write to public/data directory
    const outputDir = path.join(process.cwd(), 'public', 'data');
    const outputPath = path.join(outputDir, 'congress-members.json');

    // Create directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(outputPath, JSON.stringify(congressData, null, 2));

    console.log(`\n✅ Successfully wrote Congress data to ${outputPath}`);
    console.log(`📅 Last updated: ${congressData.lastUpdated}`);
    
    // Show some stats
    const statesWithData = Object.entries(congressData.states).filter(
      ([_, data]) => data.senators.length > 0 || data.representatives.length > 0
    );
    console.log(`📊 States with data: ${statesWithData.length}/50`);

  } catch (error) {
    console.error('❌ Error fetching Congress data:', error);
    process.exit(1);
  }
}

main();
