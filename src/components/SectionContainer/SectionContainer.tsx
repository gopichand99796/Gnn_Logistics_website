import type { ReactNode } from 'react';

export interface SectionContainerProps {
  children: ReactNode;
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return <section className="section">{children}</section>;
}
