export interface ImageCardProps {
  title: string;
}

export default function ImageCard({ title }: ImageCardProps) {
  return <div>{title}</div>;
}
