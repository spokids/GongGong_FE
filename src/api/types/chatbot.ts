export interface ChoiceChatRoomResponse {
  chatRoomId: number;
}

export interface Program {
  programId: number;
  programType: string;
  programName: string;
  facultyName: string;
  programTarget: string;
  programDate: string;
}

export interface AbilityResponse {
  isSuccess: boolean;
  responseMessage: string;
  programs: Program[];
  totalPage: number;
  currentPage: number;
}

export interface PostAbilityParams {
  chatRoomId: number;
  abilities: string[] | null;
  region: string | null;
}