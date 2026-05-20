import Button from "@/app/components/ui/button";
import TextField from "@/app/components/ui/textField";
import { DraftingCompass, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="flex flex-col max-w-md w-full">
      <h1 className="text-4xl font-bold">Créez un compte</h1>
      <p className="mb-8">Veuillez sélectionner votre profil pour commencer.</p>
      <form className="flex flex-col gap-6 w-full mb-8">
        <div className="grid grid-cols-2 gap-4">
          <span className="w-full h-20 flex flex-col gap-1 items-center justify-center border-2 border-primary/20 cursor-pointer hover:bg-primary/10 transition-colors">
            <User className="w-5 h-5 text-primary" />
            Client
          </span>
          <span className="w-full h-20 flex flex-col gap-1 items-center justify-center border-2 border-primary/20 cursor-pointer hover:bg-primary/10 transition-colors">
            <DraftingCompass className="w-5 h-5 text-primary" />
            Styliste
          </span>
        </div>
        <TextField
          type="text"
          placeholder="ex: Jean Dupont"
          label="Nom complet"
        />
        <div className="relative">
          <TextField
            type="email"
            placeholder="votrenom@gmail.com"
            label="Adresse e-mail"
          />
        </div>
        <TextField
          type="password"
          placeholder="Password"
          label="Mot de passe"
        />
        <Button variant="fill" className="w-full">
          Créer mon compte
        </Button>
      </form>

      <div className="w-full inline-flex items-center justify-center"><p className="uppercase text-xs text-foreground/20">ou</p></div>

      <div className="w-full inline-flex items-center justify-center gap-2 mt-8">
        <p className="text-foreground/80">Déjà membre ?</p>
        <Link href="/login" className="text-primary hover:underline underline-offset-4">
          Connectez-vous
        </Link>
      </div>
    </div>
  )
}

export default function Register() {
  return (
    <div className="grid grid-cols-2 min-h-screen h-full">
      <div className="w-full h-full relative">
        <Image
          src="/hero-register.jpg"
          alt="Register Hero"
          width={627}
          height={600}
          loading="eager"
          className="object-cover w-full h-screen"
        />
        <div className="absolute z-50 bottom-12 left-1/7">
          <div className="flex flex-col gap-2 w-[80%] p-6 bg-background/50 backdrop-blur-lg">
            <p className="uppercase text-xs text-primary">L'art du sur-mésure</p>
            <h1 className="text-5xl font-bold">Mode'M</h1>
            <p className="text-foreground">Rejoignez l'élite de la haute couture. Une expérience confidentielle dédiée à l'excellence artisanale.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <RegisterForm />
      </div>
    </div>
  )
}