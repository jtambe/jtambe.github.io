This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## USCIS N-400 Civics Test (Oct 2025 Version)

This portfolio includes an interactive USCIS N-400 Civics Test section with all 128 questions required for the U.S. naturalization test. The test includes live data integration with the Congress.gov API for state-specific questions about U.S. Senators and Representatives.

### Features
- All 128 USCIS civics questions organized by sections and subsections
- Live Congress.gov API integration for current senators and representatives
- Sequential and random quiz modes
- Filter by sections, subsections, or 65+ questions
- Progress tracking with star and mistake marking
- State-specific answers for questions about your state

### Updating Congress Data Locally

The Congress data needs to be fetched manually before building. Here's how:

1. **Get a Congress.gov API Key**
   - Visit [api.congress.gov](https://api.congress.gov/sign-up/) to sign up for a free API key
   - The API allows 5,000 requests per hour

2. **Set up environment variables**
   - Create a `.env.local` file in the root directory
   - Add your API key:
     ```
     CONGRESS_API_KEY=your_api_key_here
     ```

3. **Fetch the latest Congress data**
   ```bash
   npm run fetch-congress-data
   ```
   - This fetches data for all 100 senators and 435+ representatives
   - Data is saved to `public/data/congress-members.json`
   - This file is committed to git and used during build

4. **Build and deploy**
   ```bash
   npm run build
   # or build with fresh data
   npm run build:with-data
   ```

5. **Push to GitHub**
   - The updated `congress-members.json` will be included in your commit
   - GitHub Pages will use this data for state-specific questions

**Note**: Fetch Congress data periodically (monthly or when there are congressional elections) to keep the information current.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
