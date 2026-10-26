import { describe, expect, it } from 'vitest';
import { CASE_STUDIES } from '../data/caseStudies';

describe('case study data', () => {
  it('has unique slugs', () => {
    const slugs = CASE_STUDIES.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(CASE_STUDIES)('$slug has unique section ids and alt text on every image', (study) => {
    const ids = study.sections.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);

    const images = [study.cover, ...study.sections.flatMap((s) => s.images ?? [])];
    for (const image of images) expect(image.alt.trim()).not.toBe('');
  });

  it('labels the self-initiated projects as concepts', () => {
    const concepts = CASE_STUDIES.filter((c) => c.isConcept).map((c) => c.slug);
    expect(concepts).toEqual(['duit', 'shelfwise']);
  });
});
