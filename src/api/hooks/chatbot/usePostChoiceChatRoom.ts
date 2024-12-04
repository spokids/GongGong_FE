import { postChoiceChatRoom } from "@api/chatbotAPI";
import { useMutation } from "@tanstack/react-query";

const usePostChoiceChatRoom = () => {
  return useMutation({
    mutationFn: (choice: string) => postChoiceChatRoom(choice),
  });
};

export default usePostChoiceChatRoom;
