import Button from "@/app/components/ui/button";
import TextField from "@/app/components/ui/textField";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="flex flex-col max-w-md w-full">
      <h1 className="text-4xl font-bold">Bienvenue au studio</h1>
      <p className="mb-8">Accédez à votre univers de création personnalisé.</p>
      <form className="flex flex-col gap-6 w-full mb-8">
        <TextField
          type="email"
          placeholder="votrenom@gmail.com"
          label="Adresse e-mail"
        />
        <div className="relative">
          <Link href="/forgot-password" className="text-xs uppercase absolute right-0 top-1 text-primary hover:underline underline-offset-4">
            Oublié ?
          </Link>
          <TextField
            type="password"
            placeholder="Password"
            label="Mot de passe"
          />
        </div>
        <Button variant="fill" className="w-full">
          Connexion
        </Button>
      </form>

      <div className="w-full inline-flex items-center justify-center mb-8"><p className="uppercase text-xs text-foreground/20">ou</p></div>

      <div className="flex flex-col">
        <Button variant="outlined" className="w-full gap-2">
          <Image src="/icons/google-icon.svg" alt="Google Icon" width={16} height={16} />
          Continuer avec Google
        </Button>
      </div>

      <div className="w-full inline-flex items-center justify-center gap-2 mt-8">
        <p className="text-foreground/80">Nouveau client ?</p>
        <Link href="/register" className="text-primary hover:underline underline-offset-4">
          Créez votre compte
        </Link>
      </div>
    </div>
  )
}

export default function Login() {
  return (
    <div className="grid grid-cols-2 min-h-screen h-full">
      <div className="w-full h-full">
        <Image
          src="/hero-loginss.jpg"
          alt="Login Hero"
          width={627}
          height={600}
          loading="eager"
          className="object-cover w-full h-screen"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <LoginForm />
      </div>
    </div>
  )
}