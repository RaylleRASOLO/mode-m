export default function Stat() {

  const stats = [
    { id: 1, label: "Créations publiées", value: "+500" },
    { id: 2, label: "Stylistes actifs", value: "+120" },
    { id: 3, label: "Clients satisfaits", value: "+2 000" },
    { id: 4, label: "Commandes réalisées", value: "+800" },
  ];
  return (
    <div className="px-6 py-12 max-w-screen w-full bg-accent-foreground">
      <div className="grid grid-cols-4 max-w-7xl mx-auto">
        {stats.map(({ id, label, value }) => (
          <div key={id} className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-primary">{value}</h1>
            <p className="text-base text-foreground/70 mt-2 uppercase">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}