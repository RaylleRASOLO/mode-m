import { ArrowRight, Heart, ShoppingCart, Star } from "lucide-react";
import Button from "../../ui/button";
import Image from "next/image";
import Badge from "../../ui/badge";

interface collectionProps {
  id: number;
  type: string;
  name: string;
  image?: string;
  prix?: string;
  rating?: number;
  reviews?: number;
  new: boolean;
}

const collections = [
  {
    id: 1,
    type: "Haute couture",
    name: "Robe de Soirée Silk Velvet",
    image: "/robes.avif",
    prix: "1 200€",
    rating: 4.8,
    reviews: 120,
    new: true
  },
  {
    id: 2,
    type: "Accessoires",
    name: "Oxford en Cuir Artisanal",
    image: "/chaussure.avif",
    prix: "450€",
    rating: 4.5,
    reviews: 80,
    new: false
  },
  {
    id: 3,
    type: "Prêt-à-porter",
    name: "Veste Lin Structurée",
    image: "/veste.avif",
    prix: "680€",
    rating: 4.9,
    reviews: 150,
    new: false
  }
]

const CardCollection = ({ collection }: { collection: collectionProps }) => {
  const src = collection.image || "/placeholder.avif";
  return (
    <div className="flex flex-col h-92 bg-background group cursor-pointer overflow-hidden">
      <div className="overflow-hidden h-60">
        <Image src={src} loading="eager" width={300} height={700} alt="Collection" className="h-full object-cover group-hover:scale-110 duration-300" />
      </div>
      <div className="flex flex-col w-full p-4">
        <p className="text-sm text-primary uppercase">{collection.type}</p>
        <p className="text-lg font-medium">{collection.name}</p>
        <div className="w-full inline-flex items-center justify-between mt-4">
          <p className="text-xl font-bold">{collection.prix}</p>
          <Heart className="w-4 h-4 text-foreground/50" />
        </div>
      </div>
    </div>
  )
}

const NewCardCollection = ({ collection }: { collection: collectionProps }) => {
  const src = collection.image || "/placeholder.avif";
  return (
    <div className="flex flex-col h-92 col-span-2 bg-background group cursor-pointer overflow-hidden">
      <div className="overflow-hidden h-60 relative">
        <Badge className="absolute uppercase top-2 right-2 z-50">Nouveau</Badge>
        <Image src={src} loading="eager" width={300} height={700} alt="Collection" className="h-full w-full object-cover group-hover:scale-110 duration-300" />
      </div>
      <div className="inline-flex justify-between items-center p-4">
        <div className="flex flex-col w-full">
          <p className="text-sm text-primary uppercase">{collection.type}</p>
          <p className="text-lg font-medium">{collection.name}</p>
          <span className="inline-flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 mb-0.5" />
            <p className="text-xs text-foreground/70">{collection.rating} ({collection.reviews} avis)</p>
          </span>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xl font-bold w-max">{collection.prix}</p>
          <div className="w-8 h-8 bg-foreground/20 flex items-center justify-center mt-2">
            <ShoppingCart className="w-4 h-4 text-foreground m-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function NewCollection() {
  return (
    <div className="px-6 py-24 max-w-screen w-full bg-muted-foreground/10">
      <div className="max-w-7xl grid grid-cols-2 items-end mx-auto">
        <div className="w-[80%] flex flex-col items-start justify-center gap-2">
          <h1 className="text-5xl text-foreground">Découvrez des créations uniques et élégantes.</h1>
          <p className="text-foreground/50">Parcourez des collections réalisées par des stylistes talentueux. Commandez des tenues personnalisées ou trouvez l'inspiration.</p>
        </div>
        <div className="w-full flex items-center justify-end">
          <Button variant="ghost" className="uppercase text-sm">Voir tout le marketplace <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
        {collections.map((collection) => (
          collection.new ? (
            <NewCardCollection key={collection.id} collection={collection} />
          ) : (
            <CardCollection key={collection.id} collection={collection} />
          )
        ))}
      </div>
    </div>
  )
}