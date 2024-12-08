import { useMutation } from "@tanstack/react-query";
import { LoginParams } from "@api/types/auth";
import { useNavigate } from "react-router-dom";
import { postLogin } from "@api/authAPI";

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

export default usePostLogin;