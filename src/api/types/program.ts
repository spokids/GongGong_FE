export interface SigunguResponse {
  sigungu: string[];
}

export interface DongResponse {
  dong: string[];
}

// 2.3
export interface ProgramRequest {
  province: string;
  sigungu: string;
  dong?: string;
  age?: number;
  types?: string[];
}

// 2.3, 2.9
export interface ProgramResponse {
  programList: {
    programId: number;
    programType: string;
    programName: string;
    facilityName: string;
    pargarmAge: string;
    programDate: string;
  }[];
  conditionList: {
    location: string;
    age: string | null;
    existingTypes: string[] | null;
    notExistingTypes: string[] | null;
  }[];
  totalPage: number;
  currentPage: number;
}

// 2.4
export interface ProgramDetailResponse {
  programId: number;
  programName: string;
  programType: string;
  leaderQualification: boolean;
  facultyName: string;
  address: string;
  programAge: string;
  programRecruitNumber: number;
  programDate: string;
  programWeekDay: string[];
  programTime: string;
  homepageUrl: string;
  isScripted: boolean;
  reviewCount: number;
}

export interface ProgramReviewListResponse {
  reviews: {
    reviewId: number;
    nickName: string;
    content: string;
    imageUrl: string;
    createdAt: string;
  }[];
  haxNext: boolean;
}

// 2.7
export interface postProgramReviewResponse {
  reviewId: number;
}

// 2.8 - string[] 바로 사용