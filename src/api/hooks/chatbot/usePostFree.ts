import { postFree } from "@api/chatbotAPI";
import { PostFreeParams } from "@api/types/chatbot";
import { useMutation } from "@tanstack/react-query";

const usePostFree = () => {
  return useMutation({
    mutationFn: (params: PostFreeParams) => postFree(params),
  });
};

export default usePostFree;
