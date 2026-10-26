import { useEffect } from 'react';

const SITE_NAME = 'Chew Kah Wai — Software Engineer & UI/UX Designer';

export function useDocumentTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} · Chew Kah Wai` : SITE_NAME;
  }, [page]);
}
