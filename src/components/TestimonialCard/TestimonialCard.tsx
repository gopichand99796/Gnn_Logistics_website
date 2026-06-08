export interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div>
      <p>{quote}</p>
      <small>{author}</small>
    </div>
  );
}
