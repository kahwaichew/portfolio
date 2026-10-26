import { Link } from 'react-router';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page not found');

  return (
    <section className="max-w-3xl mx-auto px-6 py-32 text-center">
      <p className="font-mono text-sm font-bold text-brand">404</p>
      <h1 className="text-4xl font-display font-extrabold text-slate-900 mt-2">Page not found</h1>
      <p className="text-slate-500 mt-3">That page doesn’t exist, or it has moved.</p>
      <Link
        to="/#work"
        className="inline-flex mt-8 px-6 py-3 rounded-full font-semibold text-sm bg-brand text-white hover:bg-brand-dark"
      >
        See my work
      </Link>
    </section>
  );
}
