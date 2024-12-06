import { deleteChatRoom } from "@api/chatbotAPI";
import { useMutation } from "@tanstack/react-query";

const useDeleteChatRoom = () => {
  return useMutation({
    mutationFn: (chatRoomId: number) => deleteChatRoom(chatRoomId),
  });
};

export default useDeleteChatRoom;
