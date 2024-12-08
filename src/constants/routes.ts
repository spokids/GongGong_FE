const routes = {
  main: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  homePage: "/",
  ProgramFinder: "/program-finder",
  // ProgramInfo: (programId: string) => `/program-info/${programId}`, // 동적 경로
  WriteReview: "/write-review",
  MyPage: "/my-page",
  AccountSetting: "/account-setting",
  Chatbot: "/chatbot",
  Ability: "/chatbot/ability",
  Free: "/chatbot/free",
} as const;

export default routes;
 