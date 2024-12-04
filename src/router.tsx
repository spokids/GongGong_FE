import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import routes from "./constants/routes";
import SignUpPage from "@pages/SignUp";
import SignInPage from "@pages/SignIn";
import ProgramFinder from "@pages/ProgramFinder";
// import HomePage from "@pages/Home";
import ProgramInfo from "@pages/ProgramInfo";
import WriteReview from "@pages/Review";
import MyPage from "@pages/MyPage/Step1";
import AccountSetting from "@pages/MyPage/Step2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: routes.signIn,
        element: <SignInPage />,
      },
      {
        path: routes.signUp,
        element: <SignUpPage />,
      },
      // {
      //   path: routes.Home,
      //   element: <HomePage />,
      // },
      {
        path: routes.ProgramFinder,
        element: <ProgramFinder />,
      },
      {
        path: routes.ProgramInfo,
        element: <ProgramInfo />,
      },
      {
        path: routes.WriteReview,
        element: <WriteReview />,
      },
      {
        path: routes.MyPage,
        element: <MyPage />,
      },
      {
        path: routes.AccountSetting,
        element: <AccountSetting />,
      },
    ],
  },
]);
//
export default router;
