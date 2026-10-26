import { Route, Routes } from 'react-router';
import Header from './components/Header';
import ContactFooter from './components/ContactFooter';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudy';
import NotFound from './pages/NotFound';
import { useScrollToHash } from './hooks/useScrollToHash';

export default function App() {
  useScrollToHash();

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand/10 selection:text-brand">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ContactFooter />
    </div>
  );
}
