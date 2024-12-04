export interface LoginParams {
  userId: string;
  password: string;
}

export interface LoginResponse {
  code: number;
  message: string;
  data: {
    token: string;
  };
}

export interface RegisterParams {
  userId: string;
  password: string;
  nickName: string;
}

export interface RegisterResponse {
  code: number;
  message: string;
  data: {
    token: string;
  };
}