import Button from "../../ui/button";

interface EnteteProps {
  caption?: string;
  title?: string;
  btnAction?: boolean;
}

export default function EnTete({ caption, title, btnAction }: EnteteProps) {
  return (
    <div className="w-full inline-flex items-end justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-primary font-sans">{caption || "Espace créateur"}</h2>
        <h1 className="text-3xl font-medium">{title || "Nouvelle création"}</h1>
      </div>
      {btnAction && (
        <div className="inline-flex items-center gap-2">
          <Button variant="outlined">Annuler</Button>
          <Button variant="fill">Publier produit</Button>
        </div>
      )}
    </div>
  )
}