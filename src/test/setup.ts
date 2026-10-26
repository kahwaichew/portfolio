import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// motion's whileInView relies on IntersectionObserver, which jsdom lacks.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
globalThis.IntersectionObserver ??= IntersectionObserverStub as unknown as typeof IntersectionObserver;
window.scrollTo = () => {};

// Vitest globals are off, so Testing Library can't register its own cleanup
afterEach(() => cleanup());
