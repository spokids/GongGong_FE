import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import routes from "./constants/routes";
import SignUpPage from "./pages/SignUp";
import SignInPage from "@pages/SignIn";
import ProgramFinder from "@pages/ProgramFinder";

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
      {
        path: routes.ProgramFinder,
        element: <ProgramFinder />,
      },
    ],
  },
]);

export default router;
