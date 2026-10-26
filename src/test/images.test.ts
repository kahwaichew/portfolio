import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { CASE_STUDIES } from '../data/caseStudies';

describe('case study images', () => {
  const publicImages = CASE_STUDIES.flatMap((c) => [c.cover, ...c.sections.flatMap((s) => s.images ?? [])])
    .map((image) => image.src)
    .filter((src) => src.startsWith('/work/'));

  it.each(publicImages)('%s exists in public/', (src) => {
    expect(existsSync(join('public', src))).toBe(true);
  });
});
