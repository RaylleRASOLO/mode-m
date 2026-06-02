"use client";

import { useAuth } from "@/app/components/features/auth/hooks/use-auth";
import Button from "@/app/components/ui/button";
import TextField from "@/app/components/ui/textField";
import { SignUpRequest } from "@/types/auth";
import { DraftingCompass, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch, // <-- On ajoute watch pour écouter la valeur sélectionnée en temps réel
    formState: { errors },
  } = useForm<SignUpRequest>({
    defaultValues: {
      role: "CLIENT", // <-- Optionnel : Définit un profil par défaut (évite d'avoir une valeur vide)
    },
  });

  const {
    signUp,
    isSigningUp,
    registerError,
  } = useAuth();

  // On écoute le champ "role" pour savoir quel bouton styliser
  const selectedRole = watch("role");

  const onSubmit = async (data: SignUpRequest) => {
    try {
      await signUp(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col max-w-md w-full">
      <h1 className="text-4xl font-bold">Créez un compte</h1>
      <p className="mb-8">Veuillez sélectionner votre profil pour commencer.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full mb-8">

        {/* SÉLECTEUR DE ROLE DYNAMIQUE */}
        <div className="grid grid-cols-2 gap-4">

          {/* Option CLIENT */}
          <label
            className={`w-full h-20 flex flex-col gap-1 items-center justify-center border-2 cursor-pointer transition-colors
              ${selectedRole === "CLIENT"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary/20 hover:bg-primary/10 text-foreground"
              }`}
          >
            {/* L'input natif est caché mais présent pour l'accessibilité et React Hook Form */}
            <input
              type="radio"
              value="CLIENT"
              className="sr-only"
              {...register("role", { required: "Veuillez choisir un profil" })}
            />
            <User className={`w-5 h-5 ${selectedRole === "CLIENT" ? "text-primary-foreground" : "text-primary"}`} />
            Client
          </label>

          {/* Option STYLISTE */}
          <label
            className={`w-full h-20 flex flex-col gap-1 items-center justify-center border-2 cursor-pointer transition-colors
              ${selectedRole === "STYLIST" // ou "STYLIST" selon la nomenclature de tes types
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary/20 hover:bg-primary/10 text-foreground"
              }`}
          >
            <input
              type="radio"
              value="STYLIST" // ou "STYLIST"
              className="sr-only"
              {...register("role", { required: "Veuillez choisir un profil" })}
            />
            <DraftingCompass className={`w-5 h-5 ${selectedRole === "STYLIST" ? "text-primary-foreground" : "text-primary"}`} />
            Styliste
          </label>

        </div>
        {errors.role && (
          <p className="text-sm text-red-500 -mt-4">
            {errors.role.message}
          </p>
        )}

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <TextField
              type="text"
              placeholder="ex: Dupont"
              label="Nom"
              {...register("name", {
                required: "Le nom est obligatoire",
              })}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <TextField
              type="text"
              placeholder="ex: Jean"
              label="Prénom"
              {...register("first_name", {
                required: "Le prénom est obligatoire",
              })}
            />
            {errors.first_name && (
              <p className="text-sm text-red-500 mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>
        </div>

        <div className="relative">
          <TextField
            type="email"
            placeholder="votrenom@gmail.com"
            label="Adresse e-mail"
            {...register("email", {
              required: "L'adresse e-mail est obligatoire",
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <TextField
            type="password"
            placeholder="Password"
            label="Mot de passe"
            {...register("password", {
              required: "Le mot de passe est obligatoire",
              minLength: {
                value: 6,
                message: "Le mot de passe doit contenir au moins 6 caractères",
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {registerError && (
          <p className="text-sm text-red-500">
            {registerError.message}
          </p>
        )}

        <Button
          type="submit"
          variant="fill"
          className="w-full"
          disabled={isSigningUp}
        >
          {isSigningUp ? "Inscription..." : "Inscription"}
        </Button>
      </form>

      <div className="w-full inline-flex items-center justify-center">
        <p className="uppercase text-xs text-foreground/20">ou</p>
      </div>

      <div className="w-full inline-flex items-center justify-center gap-2 mt-8">
        <p className="text-foreground/80">Déjà membre ?</p>
        <Link href="/login" className="text-primary hover:underline underline-offset-4">
          Connectez-vous
        </Link>
      </div>
    </div>
  );
};

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