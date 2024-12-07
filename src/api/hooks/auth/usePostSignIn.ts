import { useMutation } from "@tanstack/react-query";
import { postLogin } from "@api/loginAPI";
import { LoginParams } from "@api/types/auth";
import { useNavigate } from "react-router-dom";

const usePostLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginParams) => postLogin(data),
    onSuccess: (response) => {
      if (response.data?.token){
        localStorage.setItem("accessToken",response.data.token);
        console.log(response)
        navigate("/"); 
      }
    },
  });
};

<<<<<<< HEAD
export default usePostLogin;
=======
export default usePostLogin;
>>>>>>> 1f802204 (#52 [Fix] 로그인 오류 해결 및 토큰 저장)
