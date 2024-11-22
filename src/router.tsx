import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import routes from "./constants/routes";
import SignUpPage from "./pages/SignUp";
import SignInPage from "@pages/SignIn";

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
    ],
  },
]);

export default router;
