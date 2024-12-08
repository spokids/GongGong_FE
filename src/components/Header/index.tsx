import { useLocation, useParams } from "react-router-dom";
import { UserIcon } from "@assets/svg";

const Header = () => {
  const location = useLocation();
  const { programId } = useParams<{ programId: string }>();

  let title = "홈";

  if (location.pathname === "/chatbot") {
    title = "스포키톡";
  } else if (location.pathname === "/sign-up") {
    title = "회원가입";
  } else if (location.pathname.startsWith("/program-info") && programId) {
    title = `프로그램 정보 - ${programId}`;
  }

  return (
    <header className="flex items-center justify-between px-4 py-[10px]">
      <h1 className="font-semibold text-center text-title1">{title}</h1>
      <UserIcon />
    </header>
  );
};

export default Header;
