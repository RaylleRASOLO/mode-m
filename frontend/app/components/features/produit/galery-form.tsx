import { Image, Images, Lightbulb, Plus } from "lucide-react";

export default function GaleryForm() {
  return (
    <div className="w-full h-full border border-primary/30 p-8 bg-foreground/10">
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-1 text-primary">
          <Images width={24} height={24} />
          <h1 className="text-2xl font-medium">Galerie visuelle</h1>
        </span>

        <div className="w-full border h-48 border-dashed border-primary/30 p-4 mt-8 flex items-center flex-col gap-2 justify-center">
          <Image width={56} height={56} />
          <p className='text-foreground/50 uppercase'>Image principale</p>
          <p className='text-foreground/50'>Drag & Drop your files here</p>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="w-full h-36 border border-primary/30 flex flex-col items-center justify-center">
            <Plus width={32} height={32} />
          </div>
          <div className="w-full h-36 border border-primary/30 flex flex-col items-center justify-center">
            <Plus width={32} height={32} />
          </div>
          <div className="w-full h-36 border border-primary/30 flex flex-col items-center justify-center">
            <Plus width={32} height={32} />
          </div>
        </div>

        <div className="bg-black/10 p-4 border-l-2 border-primary">
          <span className="inline-flex items-center gap-4 justify-start">
            <Lightbulb width={38} height={38} className="text-primary" />
            <p className="text-foreground/70 text-sm">L'Atelier Luxe privilégie les fonds neutres et les éclairages studio pour une mise en valeur optimale de vos créations.</p>
          </span>
        </div>
      </div>
    </div>
  )
}