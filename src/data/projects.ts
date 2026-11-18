import type { Project } from '../types';
import retailaimIcon from '../assets/images/icons/retailaim.png';
import r2homeIcon from '../assets/images/icons/r2home.png';
import jade2Icon from '../assets/images/icons/jade2.png';
import gotaniIcon from '../assets/images/icons/gotani.png';

export const PROJECTS: Project[] = [
  {
    id: 'retailaim',
    title: 'RetailAIM+',
    tag: 'RETAIL WORKFORCE MANAGEMENT MOBILE APP',
    description: 'A mobile platform for retailers to manage merchandiser and promoter daily tasks — outlet assignments, task lists, AI-powered product scanning, clock-in/out, and leave management.',
    users: 'Merchandisers & Promoters in retail',
    tech: ['Flutter', '.NET', 'App Store', 'Play Store'],
    role: 'Designed & implemented proof of delivery system, order picking system, leave module, testing, App Store deployment',
    highlight: 'Launched in July 2025 — used by 1000+ promoters and merchandisers',
    bannerColor: 'bg-[#e5ecfb]',
    icon: retailaimIcon,
    accent: '#0f9488',
    detail: {
      overview: [
        'RetailAIM+ is a field-force app for brands and their agencies. A brand plans which outlets its merchandisers and promoters visit, how often, and what they do at each visit. The field team then clocks in at the outlet and completes those tasks on their phone.',
        'I worked on it as a full-stack mobile developer, building features that customers asked for, from the Flutter screens down to the .NET API, and shipping them to the App Store and Google Play.',
      ],
      appStoreUrl: 'https://apps.apple.com/my/app/retailaim/id6741841800',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.alwaysepromode.retailaimplus',
      responsibilities: [
        'Built new features requested by customers end to end: Flutter app screens and .NET 9 Web API endpoints',
        'Fixed bugs reported from the field',
        'Wrote test cases and handed each build to the support team for testing',
        'Scheduled releases and deployed to the App Store and Google Play',
      ],
      flowTitle: 'How a brand gets work done in the field',
      flow: [
        { title: 'Brand opts in' },
        { title: 'SKUs added', detail: 'The brand provides its product list for our database' },
        { title: 'Outlets planned', detail: 'Which outlets to visit, and how often' },
        { title: 'Tasks planned', detail: 'What to do at each visit' },
        { title: 'Promoters assigned' },
        { title: 'Tasks completed', detail: 'On site, in the app' },
      ],
      features: [
        { title: 'Clock in & out', detail: 'Clock in/out and lunch in/out, each saved with the latitude, longitude and timestamp so supervisors can see who was at which outlet and when.' },
        { title: 'Stock check', detail: 'Promoters key in stock counts for each SKU at the outlet.' },
        { title: 'Image recognition', detail: 'Scan the shelf with the camera and the SKUs on it are recognised automatically. The recognition model is built by the AI team; the app captures and uploads the photos.' },
        { title: 'Goods return', detail: 'Record expired or broken products to be returned.' },
        { title: 'Proof of delivery', detail: 'Confirm that goods were delivered to the outlet.' },
      ],
      challenges: [
        {
          title: 'Uploads failing in underground outlets',
          problem: 'Users complained that in outlets with poor signal, such as underground floors of malls, image uploads failed and their work was lost.',
          solution: 'I built an offline mode. Everything the promoter captures is saved locally in SQLite first, so the app keeps working without a connection, and the data is sent when the connection is back.',
        },
        {
          title: 'Every new task type needed an app release',
          problem: 'Customers kept asking for new tasks that were similar to existing ones. Each task was a hard-coded form, so every request meant UI changes and a new app version through both stores.',
          solution: 'I turned tasks into dynamic forms. The customer’s admin sets up the questions and input types on the web portal, and the app draws the form from that configuration. New tasks no longer need an app release.',
        },
      ],
      stack: [
        { layer: 'App', parts: [{ name: 'Flutter', note: 'iOS & Android', mine: true }, { name: 'SQLite', note: 'Offline storage', mine: true }] },
        { layer: 'Services', parts: [{ name: '.NET 9 Web API', mine: true }, { name: 'Image recognition', note: 'AI team' }] },
        { layer: 'Data & hosting', parts: [{ name: 'Microsoft SQL Server', mine: true }, { name: 'Azure', note: 'Hosting' }] },
        { layer: 'Process', parts: [{ name: 'Jira', mine: true }, { name: 'App Store & Google Play', mine: true }] },
      ],
    },
  },
  {
    id: 'r2home',
    title: 'R2Home',
    tag: 'NEIGHBOURHOOD DELIVERY APP CONNECTING STORES & CUSTOMERS',
    description: 'A hyper-local delivery ecosystem where promoters update product listings and prices daily inside RetailAIM+, and customers browse & buy from nearby stores via the R2Home consumer app.',
    users: 'Promoters (RetailAIM+) & Customers (R2Home app)',
    tech: ['Flutter', '.NET', 'RESTful API'],
    role: 'Designed the full R2Home module in RetailAIM+, implemented promoter-side testing, training & deployment',
    highlight: 'Launched in April 2026 — already live and adopted by multiple retailers',
    bannerColor: 'bg-[#fbe8e9]',
    icon: r2homeIcon,
    accent: '#e11d48',
    detail: {
      overview: [
        'R2Home turns promoters who are already working inside stores into a neighbourhood delivery service. Promoters list the products on the shelf from the RetailAIM+ app, customers order them in the R2Home app, and the promoter buys and delivers the order.',
        'Three of us planned the whole system together. I then owned the RetailAIM+ side, the promoter and supervisor features, while a teammate built the R2Home consumer app.',
      ],
      appStoreUrl: 'https://apps.apple.com/my/app/r2home/id6756256919',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.alwaysepromode.r2home',
      responsibilities: [
        'Planned the project with two teammates',
        'Built the promoter and supervisor side inside RetailAIM+: Flutter screens and .NET 9 Web API',
        'Wrote test cases and handed builds to the support team for testing',
        'Scheduled releases, deployed to the App Store and Google Play, and fixed bugs after launch',
      ],
      flowTitle: 'From store shelf to customer’s door',
      flow: [
        { title: 'Promoter lists product', detail: 'Takes a photo at the outlet and uploads it in RetailAIM+' },
        { title: 'Supervisor approves' },
        { title: 'Live in R2Home', detail: 'The product appears in the consumer app' },
        { title: 'Customer orders' },
        { title: 'Promoter notified', detail: 'Push notification through Firebase' },
        { title: 'Buy & deliver', detail: 'The promoter buys the product and delivers it' },
      ],
      features: [
        { title: 'Product listing', detail: 'Promoters photograph products at the outlet and upload them with their details.' },
        { title: 'Product approval', detail: 'Supervisors review each listing before it goes live, so customers only see checked products.' },
        { title: 'Purchase order', detail: 'Customer orders reach the right promoter, who is alerted with a push notification.' },
        { title: 'Deliver order', detail: 'The promoter tracks the order through buying and delivery.' },
      ],
      challenges: [],
      stack: [
        { layer: 'Apps', parts: [{ name: 'RetailAIM+ (Flutter)', note: 'Promoter & supervisor side', mine: true }, { name: 'R2Home (Flutter)', note: 'Consumer app, teammate' }] },
        { layer: 'Services', parts: [{ name: '.NET 9 Web API', mine: true }, { name: 'Firebase Cloud Messaging', note: 'Push notifications', mine: true }] },
        { layer: 'Data', parts: [{ name: 'Microsoft SQL Server', mine: true }] },
        { layer: 'Process', parts: [{ name: 'Jira', mine: true }, { name: 'App Store & Google Play', mine: true }] },
      ],
    },
  },
  {
    id: 'jade2',
    title: 'Jade 2.0',
    tag: 'CROSS-PLATFORM POS SYSTEM FOR F&B',
    description: 'A full-featured POS system running on traditional countertop machines, iPads, and handheld Android devices — including server-side order kiosk, kitchen TV, receipt printing, and payment terminal.',
    users: 'F&B restaurant owners & staff',
    tech: ['Flutter', 'Java', 'Android', 'Dual Screen'],
    role: 'Coordinated with hardware suppliers, wrote Flutter frontend, Java bridge for Android POS compatibility',
    highlight: 'Made app responsive across all screen sizes & enabled dual-screen POS display support',
    bannerColor: 'bg-[#fffde6]',
    icon: jade2Icon,
    accent: '#ca8a04',
    detail: {
      overview: [
        'Jade 2.0 is a Flutter POS for F&B businesses. It had been running on iPads for years when I joined. The business wanted to move it onto dual-screen Android POS machines, where the second screen faces the customer and shows ads and the order total.',
        'My job was to make that work: find hardware that could do it, get the existing app running on it, and make the layout fit each machine.',
      ],
      appStoreUrl: 'https://apps.apple.com/my/app/jade2/id1531255233',
      responsibilities: [
        'Contacted hardware suppliers in China to find compatible dual-screen Android POS machines, and tested the demo units they sent',
        'Configured the existing app to drive the customer-facing second screen',
        'Made the app responsive to the different screen sizes of each machine',
      ],
      flowTitle: 'How I took the POS to dual-screen hardware',
      flow: [
        { title: 'Source suppliers', detail: 'Dual-screen Android POS makers in China' },
        { title: 'Test demo units', detail: 'Different brands and firmware' },
        { title: 'Drive the second screen' },
        { title: 'Fit each screen size', detail: 'Responsive layout' },
        { title: 'Pick the machine', detail: 'One that supports a separate app on screen two' },
      ],
      features: [
        { title: 'Customer display', detail: 'The second screen faces the customer, showing ads while idle and the order total at checkout.' },
        { title: 'Responsive layout', detail: 'The same POS app adapts to each machine’s screen size, as well as the iPads it already ran on.' },
      ],
      challenges: [
        {
          title: 'Getting the second screen to work',
          problem: 'Every brand and firmware behaved differently. Most machines only duplicated the main screen onto the second one, and even in extended mode they would not let another app open there.',
          solution: 'I looked at running a second Flutter engine inside the app to draw the customer screen, and kept testing machines from different suppliers. In the end I found a machine that supports opening another app on the second screen, which let the customer display run separately from the POS.',
        },
      ],
      stack: [
        { layer: 'App', parts: [{ name: 'Flutter POS', note: 'Existing app' }, { name: 'Responsive layout', mine: true }, { name: 'Customer display', mine: true }] },
        { layer: 'Hardware', parts: [{ name: 'iPad', note: 'Existing' }, { name: 'Dual-screen Android POS', note: 'Sourced & tested', mine: true }] },
      ],
      illustration: 'dual-screen',
    },
  },
  {
    id: 'gotani',
    title: 'GoTani',
    tag: 'SMART FARMING PLATFORM WITH AI & IOT',
    description: 'A comprehensive smart farming platform integrating drone mapping, AI tree recognition, hyperspectral imaging, and IoT sensors to monitor farm conditions and automate irrigation.',
    users: 'Farm owners & agricultural managers',
    tech: ['ReactJS', 'Django', 'SASS', 'MQTT'],
    role: 'UI/UX design for all new features & revamp, Django APIs, mobile & web development, auto irrigation system',
    highlight: 'Built informative farm & user dashboards from raw sensor data & improved UX across web & mobile',
    bannerColor: 'bg-[#e1faf0]',
    icon: gotaniIcon,
    accent: '#059669',
    detail: {
      overview: [
        'GoTani is a farm management platform. Drones map the farm, AI recognises and tags every tree, and IoT sensors in the field report conditions, so farmers can see how each tree is doing and how fertiliser affects growth.',
        'I worked across the whole product: gathering requirements, writing the specs, designing the UI, and building the mobile app, the web app and the Django API.',
      ],
      responsibilities: [
        'Gathered requirements and wrote the spec documents',
        'Designed the UI mockups in Adobe XD and Figma',
        'Built the mobile app in Flutter and the web app in vanilla JS and ReactJS',
        'Built the Django API',
      ],
      flowTitle: 'From drone flight to farm insight',
      flow: [
        { title: 'Farm opts in' },
        { title: 'Drone flight', detail: 'Aerial images of the farm' },
        { title: 'Image processing' },
        { title: 'AI tree recognition', detail: 'Every tree tagged with an ID' },
        { title: 'IoT sensors installed' },
        { title: 'Data displayed', detail: 'Sensor readings in the app' },
        { title: 'Log & observe', detail: 'How fertiliser affects growth' },
      ],
      features: [
        { title: 'Dashboard', detail: 'The farm at a glance: weather forecast, growth rate and total trees.' },
        { title: 'Digital farm', detail: 'A map of the farm with every tree plotted by ID, showing its diameter, height and whether it is healthy.' },
        { title: 'Sensor data', detail: 'Readings from the IoT sensors installed in the field.' },
        { title: 'Logbook', detail: 'Log fertilising and pesticide work against the farm.' },
        { title: 'Irrigation', detail: 'Set up automatic irrigation, or turn valves on and off remotely over MQTT.' },
      ],
      challenges: [
        {
          title: 'Turning raw data into something a farmer can use',
          problem: 'The sensors and tree recognition produced a lot of raw numbers, but a farmer needs a few clear answers, not a table of readings.',
          solution: 'I worked out which information farmers actually need and derived it from the data. For example, comparing each tree’s height this month with last month gives a growth rate, and comparing that with the previous month’s growth rate shows whether growth is speeding up or slowing down.',
        },
      ],
      stack: [
        { layer: 'Clients', parts: [{ name: 'Flutter', note: 'Mobile', mine: true }, { name: 'Vanilla JS & ReactJS', note: 'Web', mine: true }] },
        { layer: 'Services', parts: [{ name: 'Django API', mine: true }, { name: 'MQTT', note: 'IoT sensors & valves', mine: true }, { name: 'Drone imagery & AI tree recognition' }] },
        { layer: 'Data', parts: [{ name: 'MySQL', mine: true }] },
        { layer: 'Design & process', parts: [{ name: 'Adobe XD & Figma', mine: true }, { name: 'Trello', mine: true }] },
      ],
    },
  },
];

export const getProject = (id: string | undefined) => PROJECTS.find((p) => p.id === id);
