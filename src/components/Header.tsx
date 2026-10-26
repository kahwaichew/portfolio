import { motion } from 'motion/react';
import { Link } from 'react-router';

const NAV_ITEMS = [
  { name: 'About', hash: '#about' },
  { name: 'Work', hash: '#work' },
  { name: 'Process', hash: '#process' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-100"
      id="app-header"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1 group" aria-label="Home">
          <span className="font-display font-extrabold text-2xl text-slate-800 tracking-tight transition-colors duration-200 group-hover:text-brand">
            ckw
          </span>
          <span className="text-brand font-black text-3xl font-display leading-none">.</span>
        </Link>

        {/* Links point at "/#section" so they also work from case-study pages */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={`/${item.hash}`}
              className="text-[15px] font-medium text-slate-600 hover:text-brand transition-colors duration-150 py-2 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <Link
          to="/#work"
          className="md:hidden text-sm font-semibold text-brand px-4 py-2 rounded-full border border-indigo-100 bg-indigo-50"
        >
          View work
        </Link>
      </div>
    </motion.header>
  );
}
