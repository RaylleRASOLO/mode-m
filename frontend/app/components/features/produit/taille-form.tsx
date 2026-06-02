import { RulerDimensionLine } from "lucide-react";
import TextField from "../../ui/textField";

export default function TailleForm() {
  return (
    <div className="w-full border border-primary/30 p-8 bg-foreground/10">
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-1 text-primary">
          <RulerDimensionLine width={24} height={24} />
          <h1 className="text-2xl font-medium">Tailles & Mesures</h1>
        </span>

        <div className="w-full inline-flex gap-4 mt-8 mb-4">
          <div className="w-12 h-12 bg-primary border border-primary flex items-center justify-center p-4">
            <p className="text-2xl text-foreground">S</p>
          </div>
          <div className="w-12 h-12 border border-primary bg-foreground/10 flex items-center justify-center p-4">
            <p className="text-2xl text-foreground">M</p>
          </div>
          <div className="w-12 h-12 border border-primary bg-foreground/10 flex items-center justify-center p-4">
            <p className="text-2xl text-foreground">L</p>
          </div>
          <div className="w-12 h-12 border border-primary bg-foreground/10 flex items-center justify-center p-4">
            <p className="text-2xl text-foreground">XL</p>
          </div>
          <div className="h-12 border border-primary bg-foreground/10 flex items-center justify-center p-4">
            <p className="text-2xl text-foreground uppercase">sur mesure</p>
          </div>
        </div>
        <p className="text-foreground/50 text-sm">Cochez les options disponibles pour cette pièce d'exception</p>
      </div>
    </div>
  )
}