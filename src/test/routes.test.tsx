import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from '../App';
import { CASE_STUDIES } from '../data/caseStudies';

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

describe('routing', () => {
  it('lists every case study on the home page', () => {
    renderAt('/');
    for (const study of CASE_STUDIES) {
      expect(screen.getByRole('link', { name: new RegExp(study.title) })).toHaveAttribute(
        'href',
        `/work/${study.slug}`,
      );
    }
  });

  it.each(CASE_STUDIES)('renders the $slug case study with every section', (study) => {
    renderAt(`/work/${study.slug}`);
    expect(screen.getByRole('heading', { level: 1, name: study.title })).toBeInTheDocument();
    for (const section of study.sections) {
      expect(screen.getByRole('heading', { level: 2, name: section.title })).toBeInTheDocument();
    }
  });

  it('shows a 404 for an unknown case study', () => {
    renderAt('/work/does-not-exist');
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('opens and closes the lightbox from a gallery image', async () => {
    const user = userEvent.setup();
    renderAt('/work/duit');
    await user.click(screen.getByRole('button', { name: /Enlarge: Home screen/ }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    // AnimatePresence keeps the dialog mounted until its exit animation finishes
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });
});
