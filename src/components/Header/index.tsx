import { useLocation } from "react-router-dom";
import { UserIcon } from "@assets/svg";

const Header = () => {
  const location = useLocation();

  let title = "홈";

  if (location.pathname === "/chatbot") {
    title = "스포키톡";
  } else if (location.pathname === "/sign-up") {
    title = "회원가입";
  }

  return (
    <header>
      <h1>{title}</h1>
      <UserIcon />
    </header>
  );
};

export default Header;
