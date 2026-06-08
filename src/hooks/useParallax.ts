import { useEffect, useState } from 'react';

export function useParallax(): number {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(0);
  }, []);

  return offset;
}
