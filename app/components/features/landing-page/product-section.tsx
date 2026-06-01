import { Calendar, Eye, ShoppingBag, ShoppingCart, Store } from "lucide-react";

const productItems = [
  {
    id: 1,
    title: "Boutique Instantanée",
    description: "Créez votre boutique en quelques minutes et commencez à vendre vos créations.",
    icon: Store,
  },
  {
    id: 2,
    title: "Gestion des commandes",
    description: "Suivez chaque étape de vos commandes, de la conception à la livraison finale.",
    icon: ShoppingCart,
  },
  {
    id: 3,
    title: "Rendez-vous en ligne",
    description: "Recevez des demandes de rendez-vous directement via votre agenda intégré.",
    icon: Calendar,
  },
  {
    id: 4,
    title: "Visibilité digitale",
    description: "Exposez vos créations à une audience qualifiée et développez votre présence.",
    icon: Eye,
  },
]

const CardProduct = () => {
  return (
    productItems.map(({ id, title, description, icon: Icon }) => (
      <div key={id} className="w-64 col-span-1 h-80 bg-accent-foreground shadow-md p-6 group hover:border-primary border-[1px] border-transparent duration-300">
        <div className="p-4">
          <div className="bg-foreground/10 p-2 w-8 h-8 flex items-center justify-center group-hover:bg-primary duration-300">
            <Icon className="w-16 h-16 text-primary group-hover:text-foreground duration-300" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mt-6">{title}</h2>
          <p className="text-base text-foreground/70 mt-2">{description}</p>
        </div>
      </div>
    ))
  );
};

export default function Product() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-24">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl font-medium text-foreground">Tout ce dont un styliste moderne a besoin.</h1>
        <div className="w-20 h-[2px] bg-primary" />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-12">
        <CardProduct />
      </div>
    </div>
  );
};