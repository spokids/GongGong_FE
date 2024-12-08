
import { deleteUser } from "@api/authAPI";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useDeleteUser = () => {

  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => deleteUser(),
    onSuccess: () => {
      navigate("/"); 
    },
  });
};

export default useDeleteUser;
