import type { CaseStudy } from '../types';
import fitnectImg from '../assets/images/fitnect.jpg';
import mrtoyImg from '../assets/images/mrtoy.jpg';

/** Case-study images live in /public/work/<slug>/ (Figma exports and renders of the design/ pages). */
const img = (slug: string, name: string, ext = 'png') => `/work/${slug}/${name}.${ext}`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'duit',
    title: 'Duit',
    tagline: 'A budgeting & e-wallet app that helps young Malaysian workers see where every ringgit goes.',
    platform: 'Mobile',
    role: 'Solo UX/UI Designer — research, IA, wireframes, design system, prototyping',
    timeline: '4 weeks (self-initiated)',
    tools: ['Figma', 'Figma Variables', 'Figma Prototyping'],
    figmaUrl: 'https://www.figma.com/design/813Kd8Rw5eRaHniijuYlNZ/Duit',
    prototypeUrl: 'https://www.figma.com/proto/813Kd8Rw5eRaHniijuYlNZ/Duit?node-id=6-359&starting-point-node-id=6%3A359',
    tags: ['Fintech', 'iOS', 'Design System', 'Prototype'],
    accent: '#0F9D7A',
    cover: { src: '/work/duit/cover.webp', alt: 'Duit app home, spending insights and pay screens on three phones' },
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
        // TODO(verify): sample testing note. Replace with what your own wireframe tests found.
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
    slug: 'jalan',
    title: 'Jalan',
    tagline: 'A mobile-first trip planner that turns the places you’ve saved into an itinerary that fits everyone coming along.',
    platform: 'Web',
    role: 'Solo UX/UI Designer — research, flows, wireframes, design system, responsive UI',
    timeline: '3 weeks (self-initiated)',
    tools: ['Design in code (HTML/CSS)', 'Design tokens', 'Playwright'],
    tags: ['Travel', 'Mobile-first', 'Responsive Web', 'AI-assisted'],
    accent: '#D9482B',
    cover: { src: '/work/jalan/cover.webp', alt: 'Jalan link import, itinerary and swap screens on three phones' },
    sections: [
      {
        id: 'problem',
        kind: 'text',
        phase: 'discover',
        title: 'The problem',
        body: [
          'People plan trips by saving things: TikTok videos, Instagram reels, Google Maps lists, Xiaohongshu posts and blogs. When it is time to go, those saves are scattered across five apps and nobody turns them into a day-by-day plan.',
          'Itinerary generators exist, but they plan for a generic traveller. A family with a toddler and a grandparent needs a very different day from a couple on a budget, even in the same city.',
        ],
      },
      {
        // TODO(verify): sample findings. Replace with numbers from research you actually ran.
        id: 'research',
        kind: 'insights',
        phase: 'discover',
        title: 'Research',
        body: [
          'I interviewed 6 people who had planned a group trip in the last year and reviewed how they used 4 tools (Google Maps lists, TripIt, Wanderlog and a shared spreadsheet).',
        ],
        items: [
          { label: 'saved places in 3+ different apps', value: '5/6' },
          { label: 'built the final plan by hand in notes or a spreadsheet', value: '4/6' },
          { label: 'top pain: “will this work for everyone?”', value: '#1' },
        ],
      },
      {
        id: 'personas',
        kind: 'personas',
        phase: 'define',
        title: 'Who I designed for',
        personas: [
          {
            name: 'Farah',
            age: 34,
            occupation: 'Marketing lead, planning a family trip to Japan',
            quote: 'I’ve saved 40 videos. I just need to know which ones work with a stroller and my mum’s knees.',
            goals: ['One plan the whole family can follow', 'Halal food without searching every stop'],
            frustrations: ['Saves spread across TikTok, Instagram and Maps', 'Generic plans ignore naps, stairs and rest breaks'],
          },
          {
            name: 'Daniel & Wen',
            age: 27,
            occupation: 'Young couple on a budget trip',
            quote: 'We want the cool places from Xiaohongshu, but not a plan that blows our budget by day two.',
            goals: ['See the cost of each day before booking', 'Fit more in without rushing'],
            frustrations: ['Prices hidden until they arrive', 'Rebuilding the plan when one stop closes'],
          },
        ],
      },
      {
        id: 'hmw',
        kind: 'text',
        phase: 'define',
        title: 'How might we…',
        body: [
          'How might we turn the places people already save into a realistic plan that respects who is travelling: their ages, needs, budget and pace?',
        ],
      },
      {
        id: 'flows',
        kind: 'steps',
        phase: 'ideate',
        title: 'Key flow',
        body: ['Users keep saving the way they already do. Jalan does the sorting, and only asks questions it cannot answer itself.'],
        steps: [
          { title: 'Import links', detail: 'Share or paste any link; places are pulled from captions, video text and map lists.' },
          { title: 'Who’s going', detail: 'Solo, couple, family or friends, plus babies, seniors, diet, budget and pace.' },
          { title: 'Generate', detail: 'Stops clustered by area, with real travel legs, rest breaks and a daily cost.' },
          { title: 'Swap & share', detail: 'Flags stops that don’t fit and offers three alternatives, then shares with the group.' },
        ],
        images: [{ src: img('jalan', 'flow'), alt: 'User flow from saving links to a shared itinerary, with two recovery paths', caption: 'Happy path and recovery paths' }],
      },
      {
        id: 'wireframes',
        kind: 'gallery',
        layout: 'mobile',
        phase: 'ideate',
        title: 'Low-fidelity wireframes',
        // TODO(verify): sample testing note. Replace with what your own wireframe tests found.
        body: ['I designed for a 390 px phone first, because most saves and most on-trip checking happen on a phone. Wireframe tests with 3 people merged two setup steps into one and added travel time between stops.'],
        images: [
          { src: img('jalan', 'wire-import'), alt: 'Wireframe of the link import screen' },
          { src: img('jalan', 'wire-preferences'), alt: 'Wireframe of the traveller preferences screen' },
          { src: img('jalan', 'wire-itinerary'), alt: 'Wireframe of the day itinerary screen' },
        ],
      },
      {
        id: 'design-system',
        kind: 'palette',
        phase: 'design',
        title: 'Design system',
        body: [
          'Tokens are defined once as CSS variables and reused by every component. The primary coral passes 4.5:1 contrast with white text, and the budget chart colours are checked for colour-blind separation.',
        ],
        colors: [
          { name: 'Primary / Coral', hex: '#D9482B' },
          { name: 'Teal', hex: '#0F6E6E' },
          { name: 'Ink', hex: '#1E2230' },
          { name: 'Sun', hex: '#E8A33D' },
          { name: 'Sand', hex: '#FBF7F2' },
        ],
        fonts: ['Bricolage Grotesque — headings', 'DM Sans — body & UI'],
        images: [{ src: img('jalan', 'components'), alt: 'Component sheet with buttons, chips, inputs, link cards and itinerary stops' }],
      },
      {
        id: 'hifi',
        kind: 'gallery',
        layout: 'mobile',
        phase: 'design',
        title: 'High-fidelity screens',
        images: [
          { src: img('jalan', 'import'), alt: 'Link import screen listing six saved links and places found', caption: 'Import — paste or share links; see places found per link' },
          { src: img('jalan', 'preferences'), alt: 'Traveller preferences with counters, needs toggles and budget', caption: 'Who’s going — group type, babies, seniors, diet and budget' },
          { src: img('jalan', 'itinerary'), alt: 'Day 2 itinerary timeline with travel legs and a nap break', caption: 'Itinerary — timed stops, travel legs and an auto-added nap' },
          { src: img('jalan', 'map'), alt: 'Map of the day route with a stop detail sheet', caption: 'Map — the day’s route with quick swap and directions' },
          { src: img('jalan', 'swap'), alt: 'Bottom sheet suggesting easier alternatives to a stair-heavy hike', caption: 'Swap — explains why a stop doesn’t fit and offers 3 options' },
          { src: img('jalan', 'budget'), alt: 'Budget breakdown by stay, food, transport and activities', caption: 'Budget — planned spend by category, with a saving tip' },
        ],
      },
      {
        id: 'responsive',
        kind: 'gallery',
        layout: 'web',
        phase: 'design',
        title: 'Scaling up to desktop',
        body: ['On larger screens the same components reflow into a planning view: the day timeline sits beside the map, and saved places that did not make the plan stay visible.'],
        images: [{ src: img('jalan', 'desktop'), alt: 'Desktop itinerary with timeline, route map and unplanned saved places', caption: 'Desktop — timeline and map side by side' }],
      },
      {
        id: 'learnings',
        kind: 'text',
        phase: 'test',
        title: 'What I learned',
        body: [
          'The generated plan matters less than the explanation behind it. “Swapped: 4 km of stairs” builds more trust than a silently changed schedule.',
          'Next: test the link import with real TikTok and Xiaohongshu posts, and design the shared-trip view for group voting.',
        ],
      },
    ],
  },
  // Real client work. Structure and decisions are read from the delivered screens.
  // TODO(verify): confirm the brief, dates and outcomes before publishing.
  {
    slug: 'fitnect',
    title: 'FitNect',
    tagline: 'A fitness marketplace app for finding a personal trainer, booking and paying for sessions, and staying on track.',
    platform: 'Mobile',
    role: 'UI/UX Designer (freelance) — IA, user flows, UI design',
    timeline: '', // TODO(verify): add dates
    tools: ['Figma'],
    tags: ['Client Work', 'Marketplace', 'Dark Theme', 'iOS'],
    accent: '#7D51FC',
    cover: { src: fitnectImg, alt: 'FitNect mobile app screens' },
    sections: [
      {
        id: 'overview',
        kind: 'text',
        phase: 'discover',
        title: 'Overview',
        body: [
          'FitNect is a freelance project I designed for a client. It is a marketplace that connects people with personal trainers and coaches: users find a coach, buy a package of sessions, schedule them, and track their progress.',
          'I designed the full app, from information architecture and user flows to the high-fidelity UI the client’s developers built from.',
        ],
      },
      {
        id: 'goals',
        kind: 'steps',
        phase: 'define',
        title: 'Design goals',
        body: ['A marketplace only works if both sides trust it. I designed around three questions a client asks before paying a stranger to train them.'],
        steps: [
          { title: 'Can I trust this coach?', detail: 'Ratings, number of purchases, the trainer’s gym, rules and what to bring, before any payment.' },
          { title: 'Does it fit my life?', detail: 'Service types (online, door-to-door, fixed location) and specialities such as post-injury or post-pregnancy.' },
          { title: 'Will I keep going?', detail: 'Sessions shown as progress (3/10 done), reminders, and a timeline of what is next.' },
        ],
      },
      {
        id: 'ia',
        kind: 'text',
        phase: 'define',
        title: 'Information architecture',
        body: ['Five tabs keep the app shallow. Search sits in the middle as the main action, because finding a coach is how every journey starts.'],
        images: [{ src: img('fitnect', 'sitemap'), alt: 'FitNect sitemap with Home, Activities, Search, Chat and Profile tabs', caption: 'Sitemap' }],
      },
      {
        id: 'flow',
        kind: 'text',
        phase: 'ideate',
        title: 'Core flow',
        body: ['The main flow covers what the marketplace promises: find a coach, pay safely, and turn up on time.'],
        images: [{ src: img('fitnect', 'flow'), alt: 'Six-step flow from search to tracking progress', caption: 'From search to first session' }],
      },
      {
        id: 'decisions',
        kind: 'steps',
        phase: 'design',
        title: 'Key design decisions',
        steps: [
          { title: 'Price and “Buy now” stay pinned', detail: 'On the service page the price never scrolls away, so reading more never means losing the action.' },
          { title: 'Sessions read as progress', detail: 'Packages show “3/10 completed”, which turns a purchase into a goal and prompts the next booking.' },
          { title: 'One timeline for everything', detail: 'Booked sessions and self-logged workouts share the Activities timeline, so the day reads at a glance.' },
          { title: 'Guarded destructive actions', detail: 'Deleting an account asks the user to type “Delete”, so it can’t happen by accident.' },
        ],
      },
      {
        id: 'design-system',
        kind: 'palette',
        phase: 'design',
        title: 'Visual language',
        body: ['A dark theme keeps the focus on trainer photos and progress data. Purple marks booked sessions and selected states; lime is saved for the main action and success.'],
        colors: [
          { name: 'Purple / Sessions', hex: '#7D51FC' },
          { name: 'Lime / Action', hex: '#C8F672' },
          { name: 'Surface', hex: '#2E2F31' },
          { name: 'Background', hex: '#1F2022' },
          { name: 'Text', hex: '#FFFFFF' },
        ],
        fonts: [], // TODO(verify): add the typeface used in the Figma file
      },
      {
        id: 'closeups',
        kind: 'gallery',
        layout: 'detail',
        phase: 'design',
        title: 'Screens up close',
        images: [
          { src: img('fitnect', 'detail', 'jpg'), alt: 'Service detail page for 1-on-1 personal training', caption: 'Service detail — trust signals before the pinned Buy now' },
          { src: img('fitnect', 'home', 'jpg'), alt: 'Home with upcoming sessions, session progress and progress tiles', caption: 'Home — upcoming sessions and progress' },
          { src: img('fitnect', 'activities', 'jpg'), alt: 'Activities calendar with a timeline of sessions', caption: 'Activities — sessions and workouts on one timeline' },
          { src: img('fitnect', 'payments', 'jpg'), alt: 'Payments with saved cards and transaction history', caption: 'Payments — saved cards and history' },
          { src: img('fitnect', 'help', 'jpg'), alt: 'Help centre with common issues and contact options', caption: 'Help centre — answers before support' },
        ],
      },
      {
        id: 'hifi',
        kind: 'gallery',
        layout: 'web',
        phase: 'design',
        title: 'All screens',
        images: [{ src: fitnectImg, alt: 'FitNect high-fidelity screens' }],
      },
    ],
  },
  {
    slug: 'mrtoy',
    title: 'Mr.Toy',
    tagline: 'A loyalty app proposal for the Mr.Toy toy-store chain: points, rewards, vouchers and a QR code for the counter.',
    platform: 'Mobile',
    role: 'UI/UX Designer — pitch proposal',
    timeline: '', // TODO(verify): add dates
    tools: ['Figma'],
    tags: ['Pitch', 'Loyalty', 'Retail', 'iOS'],
    accent: '#15AED0',
    cover: { src: mrtoyImg, alt: 'Mr.Toy loyalty app screens' },
    sections: [
      {
        id: 'overview',
        kind: 'text',
        phase: 'discover',
        title: 'Overview',
        body: [
          'Mr.Toy asked for proposals for a member app. I designed this one for the pitch. Mr.Toy chose another proposal, but the work shows how I approached the brief: a loyalty loop built around the store counter.',
        ],
      },
      {
        id: 'goals',
        kind: 'steps',
        phase: 'define',
        title: 'Design goals',
        steps: [
          { title: 'Bring families back', detail: 'Points, rewards and seasonal campaigns give a reason for the next visit.' },
          { title: 'Make the counter fast', detail: 'The points QR is one tap away and fills the screen, so checkout isn’t held up.' },
          { title: 'Speak to parents and kids', detail: 'Playful colour and toy photos for kids; clear terms and validity for parents.' },
        ],
      },
      {
        id: 'ia',
        kind: 'text',
        phase: 'define',
        title: 'Information architecture',
        body: ['Everything a member needs at the counter (points, vouchers, the QR code) is one tap from Home.'],
        images: [{ src: img('mrtoy', 'sitemap'), alt: 'Mr.Toy sitemap with home sections, vouchers and points QR', caption: 'Sitemap' }],
      },
      {
        id: 'flow',
        kind: 'text',
        phase: 'ideate',
        title: 'The earn → redeem loop',
        body: ['Instead of a shopping app, the proposal was designed around one loop that brings families back to the store.'],
        images: [{ src: img('mrtoy', 'flow'), alt: 'Earn and redeem flows, four steps each', caption: 'Earn and redeem flows' }],
      },
      {
        id: 'decisions',
        kind: 'steps',
        phase: 'design',
        title: 'Key design decisions',
        steps: [
          { title: 'Rewards are toys, not numbers', detail: 'Each reward shows the toy, its points price and the original price struck through.' },
          { title: 'Terms before commitment', detail: 'Vouchers explain validity, how to redeem and T&C before the Redeem button.' },
          { title: 'Time-limited redemption QR', detail: 'A redeemed voucher becomes a QR valid for 5 minutes, so screenshots can’t be reused.' },
          { title: 'Room for campaigns', detail: 'A banner carousel on Home lets marketing run seasonal sales like Raya without an app update.' },
        ],
      },
      {
        id: 'design-system',
        kind: 'palette',
        phase: 'design',
        title: 'Visual language',
        body: ['Bright cyan from the Mr.Toy brand anchors the app. A soft cyan-to-pink gradient makes reward and QR screens feel like opening a present, and a strong pink-red is kept for Redeem actions.'],
        colors: [
          { name: 'Mr.Toy Cyan', hex: '#15AED0' },
          { name: 'Sky', hex: '#7ECAD7' },
          { name: 'Blush', hex: '#E0B3B6' },
          { name: 'Redeem', hex: '#E22D5A' },
          { name: 'Card', hex: '#FFFFFF' },
        ],
        fonts: [], // TODO(verify): add the typeface used in the Figma file
      },
      {
        id: 'hifi',
        kind: 'gallery',
        layout: 'web',
        phase: 'design',
        title: 'Screens',
        images: [
          { src: mrtoyImg, alt: 'Mr.Toy home, voucher, reward and points screens', caption: 'Home, voucher detail, reward detail and My Points' },
          { src: img('mrtoy', 'points-qr', 'jpg'), alt: 'My Points screen with a full-screen QR code', caption: 'My Points — a full-screen QR for the cashier' },
        ],
      },
      {
        // TODO(verify): this reflection is a draft. Rewrite it in your own words.
        id: 'reflection',
        kind: 'text',
        phase: 'test',
        title: 'Reflection',
        body: [
          'A pitch is judged in minutes. Next time I would lead with a clickable prototype of the counter moment and a short rollout plan, because that is what a retailer has to picture before saying yes.',
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string | undefined) => CASE_STUDIES.find((c) => c.slug === slug);
