import { useMutation } from "@tanstack/react-query";
import { postRegister } from "@api/registerAPI";
import { RegisterParams } from "@api/types/auth";
import { useNavigate } from "react-router-dom";
import routes from "constants/routes";

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
