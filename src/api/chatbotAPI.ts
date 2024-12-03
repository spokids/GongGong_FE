import { authApiPost } from "./apiUtil";
import {
  ChoiceChatRoomResponse,
  AbilityResponse,
  PostAbilityParams,
} from "./types/chatbot";

export const postChoiceChatRoom = (choice: string) => {
  return authApiPost<ChoiceChatRoomResponse>("/chatRoom/choice", {
    choice,
  });
};

export const postAbility = ({
  chatRoomId,
  abilities,
  region,
}: PostAbilityParams) => {
  return authApiPost<AbilityResponse>("/chat/ability", {
    chatRoomId,
    abilities,
    region,
  });
};
