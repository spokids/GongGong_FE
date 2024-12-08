import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserIcon } from "@assets/svg";
import { useMemo } from "react";
import routes from "constants/routes";

const Header = () => {
  const location = useLocation();
  const { programId } = useParams<{ programId: string }>();
  const navigate = useNavigate();

  const isTokenValid = (token: string | null) => {
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiration = payload.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      return expiration > currentTime;
    } catch (error) {
      console.error("JWT 디코딩 오류:", error);
      return false;
    }
  };

  const { title, needUserIcon } = useMemo(() => {
    let title = "홈";
    let iconNeeded = false;

    if (location.pathname === "/chatbot") {
      title = "스포키톡";
      iconNeeded = true;
    } else if (location.pathname === "/") {
      title = "홈";
      iconNeeded = true;
    } else if (location.pathname === "/sign-up") {
      title = "회원가입";
      iconNeeded = false;
    } else if (location.pathname.startsWith("/program-info") && programId) {
      title = `프로그램 정보 - ${programId}`;
      iconNeeded = false;
    }

    return { title, needUserIcon: iconNeeded };
  }, [location.pathname, programId]);

  const handleUserIconClick = () => {
    const token = localStorage.getItem("accessToken");
    if (isTokenValid(token)) {
      navigate(routes.MyPage);
    } else {
      navigate(routes.signIn);
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-[10px]">
      <h1 className={`text-title1 font-bold ${needUserIcon ? 'text-center' : 'flex-1 text-left'}`}>{title}</h1>
      {needUserIcon && <UserIcon type="button" className="cursor-pointer" onClick={handleUserIconClick} />}
    </header>
  );
};

export default Header;
