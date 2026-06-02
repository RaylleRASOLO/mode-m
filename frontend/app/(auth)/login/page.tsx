"use client";

import { useAuth } from "@/app/components/features/auth/hooks/use-auth";
import Button from "@/app/components/ui/button";
import TextField from "@/app/components/ui/textField";
import { SignInRequest } from "@/types/auth";

import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInRequest>();

  const {
    signIn,
    isSigningIn,
    loginError,
  } = useAuth();

  const onSubmit = async (
    data: SignInRequest
  ) => {
    try {
      await signIn(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col max-w-md w-full">
      <h1 className="text-4xl font-bold">
        Bienvenue au studio
      </h1>

      <p className="mb-8">
        Accédez à votre univers de création
        personnalisé.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full mb-8"
      >
        <div>
          <TextField
            label="Adresse e-mail"
            type="email"
            placeholder="votrenom@gmail.com"
            autoComplete="email"
            {...register("email", {
              required: "L'email est obligatoire",
            })}
          />

          {errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative">
          <Link
            href="/forgot-password"
            className="text-xs uppercase absolute right-0 top-1 text-primary hover:underline underline-offset-4"
          >
            Oublié ?
          </Link>

          <TextField
            label="Mot de passe"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            {...register("password", {
              required:
                "Le mot de passe est obligatoire",
            })}
          />

          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {loginError && (
          <p className="text-sm text-red-500">
            {loginError.message}
          </p>
        )}

        <Button
          type="submit"
          variant="fill"
          className="w-full"
          disabled={isSigningIn}
        >
          {isSigningIn
            ? "Connexion..."
            : "Connexion"}
        </Button>
      </form>

      <div className="w-full inline-flex items-center justify-center mb-8">
        <p className="uppercase text-xs text-foreground/20">
          ou
        </p>
      </div>

      <div className="flex flex-col">
        <Button
          variant="outlined"
          className="w-full gap-2"
        >
          <Image
            src="/icons/google-icon.svg"
            alt="Google Icon"
            width={16}
            height={16}
          />
          Continuer avec Google
        </Button>
      </div>

      <div className="w-full inline-flex items-center justify-center gap-2 mt-8">
        <p className="text-foreground/80">
          Nouveau client ?
        </p>

        <Link
          href="/register"
          className="text-primary hover:underline underline-offset-4"
        >
          Créez votre compte
        </Link>
      </div>
    </div>
  );
};

export default function Login() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="hidden lg:block">
        <Image
          src="/hero-loginss.jpg"
          alt="Login Hero"
          width={627}
          height={600}
          priority
          className="object-cover w-full h-screen"
        />
      </div>

      <div className="flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
}