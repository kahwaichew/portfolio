import type { CaseStudy } from '../types';
import fitnectImg from '../assets/images/fitnect.jpg';
import mrtoyImg from '../assets/images/mrtoy.jpg';
import gotaniImg from '../assets/images/gotani.jpg';

/** Case-study images exported from Figma live in /public/work/<slug>/. */
const img = (slug: string, name: string) => `/work/${slug}/${name}.png`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'duit',
    title: 'Duit',
    tagline: 'A budgeting & e-wallet app that helps young Malaysian workers see where every ringgit goes.',
    platform: 'Mobile',
    isConcept: true,
    role: 'Solo UX/UI Designer — research, IA, wireframes, design system, prototyping',
    timeline: '4 weeks (self-initiated)',
    tools: ['Figma', 'FigJam', 'Figma Prototyping'],
    tags: ['Fintech', 'iOS', 'Design System', 'Prototype'],
    accent: '#0F9D7A',
    cover: { src: img('duit', 'cover'), alt: 'Duit app home, spending insights and pay screens on three phones' },
    sections: [
      {
        id: 'problem',
        kind: 'text',
        phase: 'discover',
        title: 'The problem',
        body: [
          'Fresh graduates in Malaysia juggle DuitNow transfers, two or three e-wallets, BNPL instalments and a bank card. Money leaks across apps and nobody has a single picture of their month.',
          'Existing budgeting apps are built for Western banking — they cannot read e-wallet transactions, and manual entry is abandoned within a week.',
        ],
      },
      {
        // TODO(verify): sample findings. Replace with numbers from research you actually ran.
        id: 'research',
        kind: 'insights',
        phase: 'discover',
        title: 'Research',
        body: [
          'I ran 6 remote interviews with working adults aged 22–30 and a 31-response survey, then reviewed 4 competitor apps (Touch ’n Go eWallet, Boost, Money Lover, Seedly).',
        ],
        items: [
          { label: 'use 2+ e-wallets', value: '74%' },
          { label: 'tried a budgeting app and quit within a month', value: '61%' },
          { label: 'top reason for quitting: manual entry', value: '#1' },
        ],
      },
      {
        id: 'personas',
        kind: 'personas',
        phase: 'define',
        title: 'Who I designed for',
        personas: [
          {
            name: 'Aina',
            age: 24,
            occupation: 'Junior accountant, Kuala Lumpur',
            quote: 'I know I spend too much on food delivery, I just never see the total.',
            goals: ['Save RM300 a month for a car down-payment', 'Stop overdrafting before payday'],
            frustrations: ['Spending is split across TNG, GrabPay and her bank', 'Budget apps feel like homework'],
          },
          {
            name: 'Jason',
            age: 28,
            occupation: 'Sales executive, Johor Bahru',
            quote: 'Splitting bills with friends is where my money disappears.',
            goals: ['Track shared expenses without awkward chasing', 'Understand BNPL commitments'],
            frustrations: ['Forgets who owes what', 'BNPL instalments surprise him every month'],
          },
        ],
      },
      {
        id: 'hmw',
        kind: 'text',
        phase: 'define',
        title: 'How might we…',
        body: [
          'How might we give users a single, automatic view of their spending across wallets — and nudge them before, not after, they overspend?',
        ],
      },
      {
        id: 'flows',
        kind: 'steps',
        phase: 'ideate',
        title: 'Information architecture & key flow',
        body: ['Four tabs keep the app shallow: Home, Insights, Pay, Me. The core flow is “set a budget from real data”.'],
        steps: [
          { title: 'Link wallets', detail: 'Connect bank & e-wallets once; 90 days of history imported.' },
          { title: 'Auto-categorise', detail: 'Transactions grouped into 8 categories with one-tap fixes.' },
          { title: 'Suggested budget', detail: 'Budget proposed from the last 3 months, not a blank form.' },
          { title: 'Smart nudges', detail: 'A warning at 80% of a category, never a guilt trip after the fact.' },
        ],
        images: [{ src: img('duit', 'flow'), alt: 'User flow diagram from onboarding to first budget', caption: 'Primary user flow' }],
      },
      {
        id: 'wireframes',
        kind: 'gallery',
        layout: 'mobile',
        phase: 'ideate',
        title: 'Low-fidelity wireframes',
        body: ['Grayscale wireframes let me test hierarchy with 3 users before committing to visuals. The first version buried the remaining budget below the fold — every tester missed it.'],
        images: [
          { src: img('duit', 'wire-home'), alt: 'Wireframe of the home screen' },
          { src: img('duit', 'wire-insights'), alt: 'Wireframe of the insights screen' },
          { src: img('duit', 'wire-budget'), alt: 'Wireframe of the budget setup screen' },
        ],
      },
      {
        id: 'design-system',
        kind: 'palette',
        phase: 'design',
        title: 'Design system',
        body: ['A small token-based system built with Figma variables: colours, 4-pt spacing, type scale and components with variants for every state.'],
        colors: [
          { name: 'Primary / Emerald', hex: '#0F9D7A' },
          { name: 'Ink', hex: '#0F172A' },
          { name: 'Surface', hex: '#F6F8F7' },
          { name: 'Warning', hex: '#F59E0B' },
          { name: 'Danger', hex: '#E5484D' },
        ],
        fonts: ['Plus Jakarta Sans — headings', 'Inter — body & numerals'],
        images: [{ src: img('duit', 'components'), alt: 'Component sheet with buttons, inputs, cards and tab bar' }],
      },
      {
        id: 'hifi',
        kind: 'gallery',
        layout: 'mobile',
        phase: 'design',
        title: 'High-fidelity screens',
        images: [
          { src: img('duit', 'home'), alt: 'Home screen with remaining budget ring', caption: 'Home — what is left this month, at a glance' },
          { src: img('duit', 'insights'), alt: 'Insights screen with category breakdown', caption: 'Insights — spending by category across all wallets' },
          { src: img('duit', 'budget'), alt: 'Budget setup screen with suggested amounts', caption: 'Budget — suggested from real history' },
          { src: img('duit', 'split'), alt: 'Split bill screen', caption: 'Split — share a bill and track who has paid' },
          { src: img('duit', 'pay'), alt: 'DuitNow QR pay screen', caption: 'Pay — DuitNow QR from any linked wallet' },
          { src: img('duit', 'onboarding'), alt: 'Onboarding screen for linking wallets', caption: 'Onboarding — link wallets in one step' },
        ],
      },
      {
        // TODO(verify): sample results. Replace with your own usability-test results.
        id: 'testing',
        kind: 'insights',
        phase: 'test',
        title: 'Usability testing',
        body: ['5 participants completed 3 tasks on the Figma prototype. Two changes came out of it: the budget ring got a numeric label, and “Split” moved from Me to the Pay tab.'],
        items: [
          { label: 'task success (set a budget)', value: '5/5' },
          { label: 'avg. time to first budget', value: '48s' },
          { label: 'SUS score', value: '82' },
        ],
      },
      {
        id: 'learnings',
        kind: 'text',
        phase: 'test',
        title: 'What I learned',
        body: [
          'Starting from real data instead of an empty form was the single biggest usability win.',
          'Next: test the nudge copy for tone, and design an accessible high-contrast theme.',
        ],
      },
    ],
  },
  {
    slug: 'shelfwise',
    title: 'Shelfwise',
    tagline: 'A retail-operations dashboard that shows brand managers what is happening on shelves today.',
    platform: 'Web',
    isConcept: true,
    role: 'Solo UX/UI Designer — informed by 1.5 years building RetailAIM+',
    timeline: '3 weeks (self-initiated)',
    tools: ['Figma', 'FigJam', 'Figma Variables'],
    tags: ['B2B SaaS', 'Dashboard', 'Data Viz', 'Responsive'],
    accent: '#5F5AF6',
    cover: { src: img('shelfwise', 'cover'), alt: 'Shelfwise dashboard overview on a laptop and tablet' },
    sections: [
      {
        id: 'problem',
        kind: 'text',
        phase: 'discover',
        title: 'The problem',
        body: [
          'Merchandisers visit hundreds of outlets a day and submit photos, stock counts and price checks from the field. Brand managers only see that data in a weekly Excel export — by then an out-of-stock has already cost a week of sales.',
          'While building the RetailAIM+ mobile app I saw this gap from the field side. Shelfwise is the manager-side concept.',
        ],
      },
      {
        // TODO(verify): sample findings. Replace with numbers from research you actually ran.
        id: 'research',
        kind: 'insights',
        phase: 'discover',
        title: 'Research',
        body: ['Informal interviews with 4 operations staff, plus an audit of the reports managers already ask for.'],
        items: [
          { label: 'hours a week compiling reports manually', value: '6+' },
          { label: 'questions managers ask most', value: 'OOS, compliance, attendance' },
          { label: 'devices used', value: 'Laptop + iPad' },
        ],
      },
      {
        id: 'personas',
        kind: 'personas',
        phase: 'define',
        title: 'Who I designed for',
        personas: [
          {
            name: 'Mei Ling',
            age: 34,
            occupation: 'Brand manager, FMCG distributor',
            quote: 'I need to know which stores are out of stock before the client calls me.',
            goals: ['Spot out-of-stocks the same day', 'Prove field-team performance to clients'],
            frustrations: ['Weekly Excel reports are already stale', 'Photos are scattered across chat groups'],
          },
          {
            name: 'Ravi',
            age: 41,
            occupation: 'Regional field supervisor',
            quote: 'Half my morning is checking who actually clocked in.',
            goals: ['See attendance & visit coverage per region', 'Reassign outlets quickly'],
            frustrations: ['No single view of the team', 'Calling each merchandiser to check status'],
          },
        ],
      },
      {
        id: 'flows',
        kind: 'steps',
        phase: 'ideate',
        title: 'Information architecture',
        body: ['Navigation mirrors the questions managers ask, not the database tables.'],
        steps: [
          { title: 'Overview', detail: 'Today’s KPIs: coverage, out-of-stock, compliance, alerts.' },
          { title: 'Outlets', detail: 'Map + table of outlets with drill-down to each visit.' },
          { title: 'Team', detail: 'Attendance, visit progress and reassignment.' },
          { title: 'Reports', detail: 'Scheduled exports for clients, in one click.' },
        ],
        images: [{ src: img('shelfwise', 'sitemap'), alt: 'Sitemap of the Shelfwise dashboard', caption: 'Sitemap' }],
      },
      {
        id: 'wireframes',
        kind: 'gallery',
        layout: 'web',
        phase: 'ideate',
        title: 'Wireframes',
        body: ['I explored two layouts for the overview: a map-first and a KPI-first layout. Managers preferred KPI-first — the map became a secondary tab.'],
        images: [
          { src: img('shelfwise', 'wire-overview'), alt: 'Wireframe of the KPI-first overview' },
          { src: img('shelfwise', 'wire-outlet'), alt: 'Wireframe of the outlet detail page' },
        ],
      },
      {
        id: 'design-system',
        kind: 'palette',
        phase: 'design',
        title: 'Design system',
        body: ['Light and dark modes built from Figma variables. Chart colours are checked for colour-blind safety and 3:1 contrast against the surface.'],
        colors: [
          { name: 'Brand / Indigo', hex: '#5F5AF6' },
          { name: 'Ink', hex: '#0B1329' },
          { name: 'Surface', hex: '#F7F8FC' },
          { name: 'Positive', hex: '#12A150' },
          { name: 'Alert', hex: '#E5484D' },
        ],
        fonts: ['Outfit — headings', 'Inter — UI & tables', 'JetBrains Mono — figures'],
        images: [{ src: img('shelfwise', 'components'), alt: 'Component sheet with KPI tiles, tables, filters and chart cards' }],
      },
      {
        id: 'hifi',
        kind: 'gallery',
        layout: 'web',
        phase: 'design',
        title: 'High-fidelity screens',
        images: [
          { src: img('shelfwise', 'overview'), alt: 'Overview dashboard with KPI tiles and trend charts', caption: 'Overview — today at a glance' },
          { src: img('shelfwise', 'outlets'), alt: 'Outlets table with out-of-stock flags', caption: 'Outlets — filter by region, flag, or client' },
          { src: img('shelfwise', 'outlet-detail'), alt: 'Outlet detail with shelf photos', caption: 'Outlet detail — latest shelf photos and price checks' },
          { src: img('shelfwise', 'team'), alt: 'Team attendance page', caption: 'Team — attendance and visit progress' },
          { src: img('shelfwise', 'tablet'), alt: 'Overview on a tablet', caption: 'Responsive — iPad layout for store visits' },
        ],
      },
      {
        id: 'learnings',
        kind: 'text',
        phase: 'test',
        title: 'What I learned',
        body: [
          'Designing dashboards is mostly about choosing what not to show. Each KPI tile had to answer “what do I do next?”, so every tile links to a filtered list.',
          'Next: validate alert thresholds with real usage data and design an empty state for new clients.',
        ],
      },
    ],
  },
  // Real projects: the wording below is drafted from the old portfolio copy.
  // TODO(verify): confirm research methods, numbers and outcomes before publishing.
  {
    slug: 'fitnect',
    title: 'FitNect',
    tagline: 'A fitness marketplace for booking personal trainers, scheduling workouts and tracking progress.',
    platform: 'Mobile',
    isConcept: false,
    role: 'UI/UX Designer',
    timeline: '', // TODO(verify): add dates
    tools: ['Figma'],
    tags: ['Marketplace', 'Dark Theme', 'Mobile'],
    accent: '#111827',
    cover: { src: fitnectImg, alt: 'FitNect mobile app screens' },
    sections: [
      {
        id: 'overview',
        kind: 'text',
        phase: 'discover',
        title: 'Overview',
        body: [
          'FitNect connects people with personal trainers and coaches. Users can discover coaches, book and schedule sessions, and follow their fitness journey through an activity log.',
        ],
      },
      {
        id: 'approach',
        kind: 'steps',
        phase: 'ideate',
        title: 'Approach',
        steps: [
          { title: 'Discover', detail: 'Browse and filter coaches by goal, price and availability.' },
          { title: 'Book', detail: 'Pick a slot and confirm in a few taps.' },
          { title: 'Track', detail: 'Activity log keeps workouts and progress in one place.' },
        ],
      },
      {
        id: 'hifi',
        kind: 'gallery',
        layout: 'web',
        phase: 'design',
        title: 'Screens',
        body: ['A dark theme keeps the focus on photography and progress data.'],
        images: [{ src: fitnectImg, alt: 'FitNect high-fidelity screens' }],
      },
    ],
  },
  {
    slug: 'mrtoy',
    title: 'Mr.Toy',
    tagline: 'A loyalty app for the Mr.Toy retail chain: points, membership tiers, vouchers and promotions.',
    platform: 'Mobile',
    isConcept: false,
    role: 'UI/UX Designer',
    timeline: '', // TODO(verify): add dates
    tools: ['Figma'],
    tags: ['Loyalty', 'CRM', 'Retail'],
    accent: '#F59E0B',
    cover: { src: mrtoyImg, alt: 'Mr.Toy loyalty app screens' },
    sections: [
      {
        id: 'overview',
        kind: 'text',
        phase: 'discover',
        title: 'Overview',
        body: [
          'Mr.Toy customers collect points on every purchase, move up membership tiers, and redeem vouchers. The app brings these into one place with personalised promotions.',
        ],
      },
      {
        id: 'approach',
        kind: 'steps',
        phase: 'ideate',
        title: 'Approach',
        steps: [
          { title: 'Membership card', detail: 'Scannable card on the home screen for checkout.' },
          { title: 'Tier progress', detail: 'Clear progress to the next tier to motivate repeat visits.' },
          { title: 'Rewards', detail: 'Vouchers and promos personalised to the member.' },
        ],
      },
      {
        id: 'hifi',
        kind: 'gallery',
        layout: 'web',
        phase: 'design',
        title: 'Screens',
        images: [{ src: mrtoyImg, alt: 'Mr.Toy high-fidelity screens' }],
      },
    ],
  },
  {
    slug: 'gotani',
    title: 'GoTani',
    tagline: 'A smart-farming platform with drone mapping, IoT sensors and tree-health analytics.',
    platform: 'Web & Mobile',
    isConcept: false,
    role: 'UI/UX Designer & Software Engineer',
    timeline: 'Aug 2022 – Mar 2024',
    tools: ['Figma', 'Django', 'Flutter', 'React'],
    tags: ['Dashboard', 'IoT', 'AgriTech'],
    accent: '#16A34A',
    cover: { src: gotaniImg, alt: 'GoTani web dashboard and mobile screens' },
    sections: [
      {
        id: 'overview',
        kind: 'text',
        phase: 'discover',
        title: 'Overview',
        body: [
          'GoTani lets farm owners manage plantations remotely. It combines drone mapping, AI tree recognition, hyperspectral imaging and IoT sensors that monitor farm conditions and automate irrigation.',
          'I designed the UI/UX for new features and the platform revamp, then built the Django APIs and the web and mobile front-ends.',
        ],
      },
      {
        id: 'approach',
        kind: 'steps',
        phase: 'ideate',
        title: 'Approach',
        steps: [
          { title: 'Farm dashboard', detail: 'Raw sensor data turned into readable farm and tree-health summaries.' },
          { title: 'Drone map', detail: 'Mapped blocks with per-tree status layered on top.' },
          { title: 'Tasks', detail: 'Field tasks assigned and tracked from web and mobile.' },
        ],
      },
      {
        id: 'hifi',
        kind: 'gallery',
        layout: 'web',
        phase: 'design',
        title: 'Screens',
        images: [{ src: gotaniImg, alt: 'GoTani high-fidelity screens' }],
      },
    ],
  },
];

export const getCaseStudy = (slug: string | undefined) => CASE_STUDIES.find((c) => c.slug === slug);
