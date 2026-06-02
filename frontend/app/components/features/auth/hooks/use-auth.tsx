"use client";

import { useMutation } from "@tanstack/react-query";
import { signIn, signUp } from "@/services/auth.service";

import { useRouter } from "next/navigation";
import { SignInRequest, SignUpRequest } from "@/types/auth";

export const useAuth = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (payload: SignInRequest) =>
      signIn(payload),

    onSuccess: (data) => {
      localStorage.setItem(
        "access_token",
        data.access_token
      );

      router.push("/produit");
    },

    onError: (error) => {
      console.error(error);
    },
  });

  // 2. NOUVELLE : Mutation pour l'inscription
  const registerMutation = useMutation({
    mutationFn: (payload: SignUpRequest) => signUp(payload),
    onSuccess: (data) => {
      console.log("Inscription réussie !", data);

      // Optionnel : Si ton backend renvoie un token directement à l'inscription

      router.push("/sign_in");

      // if (data.access_token) {
      //   localStorage.setItem("access_token", data.access_token);
      //   router.push("/produit/1"); // Redirection vers l'application
      // } else {
      //   // Sinon, on le redirige vers la page de connexion
      //   router.push("/login");
      // }
    },
    onError: (error) => {
      console.error("Erreur d'inscription :", error);
    },
  });

  return {
    // lOGIN
    signIn: loginMutation.mutateAsync,
    isSigningIn: loginMutation.isPending,
    loginError: loginMutation.error,

    // REGISTER
    signUp: registerMutation.mutateAsync,
    isSigningUp: registerMutation.isPending,
    registerError: registerMutation.error,

  };
};