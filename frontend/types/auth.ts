export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
  };
}

export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  first_name?: string;
  avatar?: string;
  role: string;
}

export interface SignUpResponse {
  id: string;
  email: string;
  name: string;
  first_name?: string;
  avatar?: string;
  role: string;
  message: string;
}