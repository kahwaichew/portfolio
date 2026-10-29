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
    icon: retailaimIcon
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
    icon: r2homeIcon
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
    icon: jade2Icon
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
    icon: gotaniIcon
  }
];
