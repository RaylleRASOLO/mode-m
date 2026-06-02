import Image from "next/image";

export default function CardProduit() {
  return (
    <div className="w-full h-max p-4 border border-primary/30 hover:border-primary duration-300 cursor-pointer hover:-translate-y-1 bg-foreground/10">
      <div className="w-full h-max">
        <Image width={100} height={112} className="object-cover w-full" src="/heroPicture.avif" alt="Chaussure" />
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex flex-col pb-4 border-b border-primary/30">
          <span className="uppercase text-xs text-primary">Haute couture</span>
          <h2 className="text-lg text-foreground/90">Veste Onyx Gold</h2>
        </div>
        <div className="inline-flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <span className="uppercase text-[8px] text-primary">Stock</span>
            <p className="text-lg text-foreground/90">08 Unités</p>
          </div>
          <div className="flex flex-col">
            <span className="uppercase text-[8px] text-primary">Tailles</span>
            <p className="text-foreground/90">S, M, L</p>
          </div>
        </div>
      </div>
    </div>
  )
}