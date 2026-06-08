import { useEffect, useState } from 'react';

export function useSectionInView() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(false);
  }, []);

  return { isInView };
}
