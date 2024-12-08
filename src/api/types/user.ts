export interface ScrapResponse {
  scraps: Scraps[];
  hasNext: boolean;
}

export interface Scraps {
  scrapId: number;
  programId: number;
  programType: string;
  programName: string;
  facilityName: string;
  programAge: string;
  programDate: string;
}



export interface UserResponse {
  nickName: string;
  userInputId: string;
}

export interface ReviewResponse {
  reviews: Reviews[];
  hasNext: boolean;
}

export interface Reviews {
  reviewId: number;
  programName: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}
