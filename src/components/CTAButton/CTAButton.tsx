export interface CTAButtonProps {
  label: string;
}

export default function CTAButton({ label }: CTAButtonProps) {
  return <button type="button">{label}</button>;
}
