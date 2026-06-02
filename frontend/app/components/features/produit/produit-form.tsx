import { ListCheck } from "lucide-react";
import TextField from "../../ui/textField";
import Select from "../../ui/select";

export default function ProduitForm() {
  return (
    <div className="w-full border border-primary/30 p-8 bg-foreground/10">
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-1 text-primary">
          <ListCheck width={24} height={24} />
          <h1 className="text-2xl font-medium">Détails du produit</h1>
        </span>

        <form action="">
          <div className="w-full flex flex-col gap-8 mt-8">
            <TextField type="text" label="Nom du produit" placeholder="ex Veste noire" />
            <div className="grid grid-cols-2 gap-8">
              <Select
                options={[
                  { value: "1", label: "Haute couture" },
                  { value: "2", label: "Prête à porter" },
                  { value: "3", label: "Accessoires" }
                ]}
                label="Catégorie"
              />
              <TextField type="number" label="Stock disponible" />
            </div>
            <TextField type="text" label="Prix de vente (EUR)" placeholder="ex Veste noire" />
          </div>
        </form>
      </div>
    </div>
  )
}