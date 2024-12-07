// 2.1

export interface SigunguResponse {
    sigungu: string[];
}

// 2.2
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

// 2.3
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
