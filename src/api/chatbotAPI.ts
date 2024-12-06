import { authApiDelete, authApiPost } from "./apiUtil";
import {
  ChoiceChatRoomResponse,
  AbilityResponse,
  PostAbilityParams,
  PostFreeParams,
  FreeResponse,
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
  page, 
}: PostAbilityParams) => {
  let url = "/chat/ability";
  if (page) {
    url += `?page=${page}`;
  }

  return authApiPost<AbilityResponse>(url, {
    chatRoomId,
    abilities,
    region,
  });
};

export const postFree = ({
  chatRoomId,
  userFreeInput,
  page
}: PostFreeParams) => {
  let url = "v1/chat/completions";
  if (page) {
    url += `?page=${page}`;
  }

  return authApiPost<FreeResponse>(url, {
    chatRoomId,
    userFreeInput,
  });
};

export const deleteChatRoom = (chatRoomId: number) => {
  return authApiDelete(`/chat/${chatRoomId}`);
};
