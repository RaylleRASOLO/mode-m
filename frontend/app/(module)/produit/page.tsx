import CardProduit from "@/app/components/features/produit/card-produit";
import EnTete from "@/app/components/features/produit/en-tete";

export default function ProduitPage() {
  return (
    <div className="p-12 mx-auto max-w-5xl">
      <EnTete caption="Gestion de produit" title="Liste des produits" />
      <div className="w-full grid grid-cols-4 gap-4 flex-wrap mt-4">
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
      </div>
    </div>
  )
}