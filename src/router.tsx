import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import routes from "./constants/routes";
import SignupPage from "./pages/SignUp";
import SigninPage from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: routes.signIn,
        element: <SigninPage />,
      },
      {
        path: routes.signUp,
        element: <SignupPage />,
      },
    ],
  },
]);

export default router;
