type DashboardCardProps = {
  title: string;
  value: string;
  color: string;
};

export default function DashboardCard({
  title,
  value,
  color,
}: DashboardCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
      <h2 className="text-gray-400 text-lg">{title}</h2>

      <p className={`mt-4 text-5xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
}