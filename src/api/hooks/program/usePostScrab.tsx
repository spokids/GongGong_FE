import { postScrap } from "@api/programAPI";
import { useMutation } from "@tanstack/react-query";

const usePostScrap = () => {
  return useMutation({
    mutationFn: (programId: number) => postScrap(programId),
  });
};

export default usePostScrap;
