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
    <header className="flex justify-between p-[10px] items-center">
      <h1 className="text-title1 font-semibold text-center">{title}</h1>
      <UserIcon />
    </header>
  );
};

export default Header;
