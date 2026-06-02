import EnTete from "@/app/components/features/produit/en-tete";
import GaleryForm from "@/app/components/features/produit/galery-form";
import ProduitForm from "@/app/components/features/produit/produit-form";
import TailleForm from "@/app/components/features/produit/taille-form";
// import { useEffect } from "react";

export default function Dashboard() {

  //   useEffect(() => {
  //   apiClient.get('/health')
  //     .then(console.log)
  //     .catch(console.error)
  // }, [])

  return (
    <div className="max-w-7xl mx-auto w-full py-12">
      <EnTete />
      <div className="grid grid-cols-5 gap-4 my-12">
        <div className="col-span-3 flex flex-col gap-4">
          <ProduitForm />
          <TailleForm />
        </div>
        <div className="col-span-2">
          <GaleryForm />
        </div>
      </div>
    </div>
  )
}