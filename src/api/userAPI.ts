import { authApiDelete, authApiGet } from "./apiUtil";
import { ReviewResponse, ScrapResponse, UserResponse } from "./types/user";

export const getScrap = (lastScrapId?: number) => {
  const params = lastScrapId ? { lastScrapId } : undefined;
  return authApiGet<ScrapResponse>('/program/scrap', params);
};

export const getUser = () => {
  return authApiGet<UserResponse>("/user");
};

export const getReview = (lastReviewId?: number) => {
  const params = lastReviewId ? { lastReviewId } : undefined;
  return authApiGet<ReviewResponse>('/review/mypage', params);
};

export const deleteReview = (reviewId: number) => {
  return authApiDelete(`/review/mypage/${reviewId}`);
};