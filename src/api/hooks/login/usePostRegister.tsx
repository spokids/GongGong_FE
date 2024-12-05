import { useMutation } from "@tanstack/react-query";
import { postRegister } from "@api/registerAPI";
import { RegisterParams } from "@api/types/member";

const usePostRegister = () => {
  return useMutation({
    mutationFn: (params: RegisterParams) => postRegister(params),
    onSuccess: (data) => {
      console.log("로그인 성공, 응답 데이터:", data);
    },
  });
};

export default usePostRegister;
