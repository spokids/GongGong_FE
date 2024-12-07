export interface LoginParams {
  userInputId: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterParams {
  userInputId: string;
  password: string;
  nickName: string;
}
