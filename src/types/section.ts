export type SectionId =
  | 'hero'
  | 'about'
  | 'services'
  | 'statistics'
  | 'fleet'
  | 'journey'
  | 'regions'
  | 'testimonials'
  | 'contact';

export interface SectionMeta {
  id: SectionId;
  title: string;
  description: string;
}
