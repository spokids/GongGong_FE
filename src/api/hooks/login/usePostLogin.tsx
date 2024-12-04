import { useMutation } from "@tanstack/react-query";
import { postLogin } from "@api/loginAPI";
import { LoginParams } from "@api/types/member";

const usePostLogin = () => {
  return useMutation({
    mutationFn: (params: LoginParams) => postLogin(params),
    onSuccess: (data) => {
      console.log("로그인 성공, 응답 데이터:", data);
    },
  });
};

export default usePostLogin;
