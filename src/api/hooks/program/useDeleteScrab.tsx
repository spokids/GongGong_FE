import { deleteScrap } from "@api/programAPI";
import { useMutation } from "@tanstack/react-query";

const useDeleteScrab = () => {
  return useMutation({
    mutationFn: (programId: number) => deleteScrap(programId),
  });
};

export default useDeleteScrab;