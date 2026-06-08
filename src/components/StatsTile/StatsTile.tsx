export interface StatsTileProps {
  label: string;
  value: string;
}

export default function StatsTile({ label, value }: StatsTileProps) {
  return (
    <div>
      <div>{value}</div>
      <div>{label}</div>
    </div>
  );
}
