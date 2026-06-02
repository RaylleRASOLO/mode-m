import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from "@/types/auth";
import { apiClient } from "./api";

export const signIn = async (
  payload: SignInRequest
): Promise<SignInResponse> => {
  const data = await apiClient.post<SignInResponse>("/auth/sign_in", payload);

  return data;
};

export const signUp = async (payload: SignUpRequest): Promise<SignUpResponse> => {
  const data = await apiClient.post<SignUpResponse>("/auth/sign_up", payload);
  
  return data;
};