import { useMutation } from "@tanstack/react-query";
import { RegisterParams } from "@api/types/auth";
import { useNavigate } from "react-router-dom";
import routes from "constants/routes";
import { postRegister } from "@api/authAPI";

const usePostRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (params: RegisterParams) => postRegister(params),
    onSuccess: () => {
      navigate(routes.homePage);
    },
  });
};

export default usePostRegister;
