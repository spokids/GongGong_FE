import { postAbility } from "@api/chatbotAPI";
import { PostAbilityParams } from "@api/types/chatbot";
import { useMutation } from "@tanstack/react-query";

const usePostAbility = () => {
  return useMutation({
    mutationFn: (params: PostAbilityParams) => postAbility(params),
  });
};

export default usePostAbility;