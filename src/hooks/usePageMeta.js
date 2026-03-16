import { useEffect } from 'react';

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', description);
      }
    }

    return () => {
      document.title = 'GG Apps Ltd — Mobile App Development Studio | UK';
    };
  }, [title, description]);
}
