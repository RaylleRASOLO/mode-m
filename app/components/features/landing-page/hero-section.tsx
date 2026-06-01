import Image from "next/image";
import Button from "../../ui/button";
import Avatar from "../../ui/avatar";

export default function Hero() {
  return (
    <div className="max-w-7xl w-full px-6 py-12">
      <div className="grid grid-cols-3 gap-12 items-center">
        {/* Left section */}
        <div className="col-span-2">
          <div className="flex flex-col gap-2 w-[60%]">
            <h1 className="text-5xl font-bold">Donnez vie à votre talent et trouvez vos prochains clients.</h1>
            <p className="text-base">Une plateforme moderne dédiée aux couturiers et stylistes pour exposer leurs créations, gérer leurs commandes et développer leur visibilité en ligne.</p>

            <div className="inline-flex items-center gap-2 mt-4">
              <Button variant="fill">Commencer maintenant</Button>
              <Button variant="outlined">Explorer les créations</Button>
            </div>

            {/* Avatar */}
            <div className="inline-flex items-center gap-4 mt-6">
              <div className="inline-flex items-center -space-x-2">
                <Avatar />
                <Avatar />
              </div>
              <div className="flex flex-col gap-0">
                <h3 className="text-xl text-primary">10k +</h3>
                <p className="text-sm text-foreground/70">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="col-span-1 border border-foreground p-4 relative">
          <Image width={400} height={400} loading="eager" src="/heroPicture.avif" alt="Hero Image" className="hover:scale-105 duration-500" />
          <div className="px-4 py-2 bg-background/50 backdrop-blur-lg absolute -translate-y-1/2 translate-x-1/3 left-4 bottom-4 rounded-md">
            <p className="text-primary text-sm">Collection Hiver</p>
            <h2 className="text-xl text-foreground">Le Manteau Signature</h2>
          </div>
        </div>
      </div>
    </div>
  )
}