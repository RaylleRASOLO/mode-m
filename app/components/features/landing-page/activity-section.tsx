import { CheckCircle, MoreHorizontal, PlusCircle } from "lucide-react";
import Badge from "../../ui/badge";

interface profileProps {
  id: number;
  client: string;
  raison: string;
  time: string;
}

const rendezVous = [
  { id: 1, client: "Sophie Martin", raison: "Essayage", time: "14:00" },
  { id: 2, client: "Jean Dupont", raison: "Consultation", time: "10:30" },
]

const Profile = ({ profileProps }: { profileProps: profileProps }) => {
  return (
    <div key={profileProps.id} className="w-full h-max px-4 py-2 flex items-center gap-4">
      <div className="w-8 h-8 rounded-lg shrink-0 bg-primary/20 flex items-center justify-center">
        <h1>{profileProps.client.charAt(0)}</h1>
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-base text-foreground">{profileProps.client}</h2>
        <span className="inline-flex items-center text-primary/50 gap-4">
          <p className="text-xs">{profileProps.time}</p>
          <p className="text-sm">{profileProps.raison}</p>
        </span>
      </div>
    </div>
  )
}

const BoardActivity = () => {
  const stats = [
    { id: 1, label: "Commandes", value: "24" },
    { id: 2, label: "Rendez-vous", value: "12,4k€" },
    { id: 3, label: "Visites", value: "1,2k" },
  ]
  return (
    <div className="w-150 h-100 bg-background/10 border border-foreground/50 flex flex-col justify-center gap-4 relative p-12">
      <Badge className="absolute uppercase -bottom-3 -left-3">Mode Pro activé</Badge>
      <div className="w-full bg-foreground/10 px-8 py-4 h-max">
        <span className="w-full inline-flex items-center justify-between">
          <h2 className="text-lg text-foreground">Aperçu d'activité</h2>
          <MoreHorizontal className="w-4 h-4 text-foreground" />
        </span>
        <div className="grid grid-cols-3 mt-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              <p className="text-xs uppercase text-foreground/80">{stat.label}</p>
              <p className="text-2xl text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full h-40 bg-foreground/10 p-4">
          <h3 className="uppercase text-xs text-foreground px-4">Prochain rendez-vous</h3>
          {rendezVous.map((rdv) => (
            <Profile key={rdv.id} profileProps={rdv} />
          ))}
        </div>
        <div className="w-full h-40 bg-foreground/10 p-4 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <PlusCircle className="w-6 h-6 text-primary/50" />
            <p className="text-sm text-foreground/50 mt-2 uppercase">Nouveau produit</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Activity() {
  const activities = [
    { id: 1, title: "Gestsion des produits", description: "Ajoutez vos dernières créations en quelques clics." },
    { id: 2, title: "Agenda & rendez-vous", description: "Suivez vos rencontres clients et prises de mesures." },
    { id: 3, title: "Statistiques  de ventes", description: "Analysez votre croissance et vos produits phares." },
  ];

  return (
    <div className="px-6 py-12 max-w-screen w-full bg-accent-foreground">
      <div className="grid grid-cols-5 items-center max-w-7xl mx-auto gap-8">
        <div className="col-span-2 w-[80%]">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl text-foreground">Gérez votre activité depuis un dashboard intelligent.</h2>
            <p className="text-foreground/80">Centralisez vos produits, commandes, rendez-vous et statistiques dans une interface claire et intuitive conçue pour la performance.</p>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            {activities.map((activity) => (
              <div key={activity.id} className="py-2 inline-flex items-center gap-4">
                <CheckCircle className="w-4 h-4 text-primary" />
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-foreground">{activity.title}</h3>
                  <p className="text-sm text-foreground/80">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 w-full flex items-center justify-end">
          <BoardActivity />
        </div>
      </div>
    </div>
  )
}