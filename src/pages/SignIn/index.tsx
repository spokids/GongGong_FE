import { useState } from "react";
import { Link } from "react-router-dom";
import BgLogo from "@assets/BgLogo";
import LogoLogin from "@assets/LogoLogin";
import { SwimmingIcon } from "@assets/svg";
import Button from "@components/Button";
import Input from "@components/Input";
import usePostLogin from "@api/hooks/login/usePostLogin"; // 로그인 훅 가져오기

const SignIn = () => {
  const { mutate: postLogin } = usePostLogin();
  const [isComplete, setIsComplete] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState<string | null>(null); // 타입을 string | null로 변경

  const handleLogin = () => {
    postLogin(
      { userId, password },
      {
        onSuccess: (response) => {
          setIsComplete(true);
          setResponseMessage(response.data?.message || null); // null을 할당할 수 있음
        },
      }
    );
  };

  return (
    <div className="pace-y-6 mt-[94px] flex flex-col items-center">
      <div className="relative mb-[120px] h-[300px] w-full">
        <BgLogo className="absolute top-0 left-0 object-cover w-full h-full" />
        <LogoLogin className="absolute left-[50%] top-[60%] w-[180px] -translate-x-1/2 -translate-y-1/2 transform" />
      </div>

      <div className="mb-[70px] flex w-[350px] flex-col gap-2">
        <Input placeholder="아이디를 입력해주세요." />
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
      </div>

      <Button className="flex text-white bg-orange-400">로그인하기</Button>

      <text
        style={{
          display: "flex",
          color: "#484851",
          fontSize: "14px",
          letterSpacing: "-0.42px",
          marginTop: "20px",
        }}
      >
        스포키즈가 처음이신가요?
      </text>
      <Link to="/signup">
        <text
          style={{
            display: "flex",
            color: "#484851",
            fontSize: "14px",
            letterSpacing: "-0.42px",
            textDecorationLine: "underline",
            marginTop: "-20px",
          }}
        >
          회원가입하기
        </text>
        <SwimmingIcon />
      </Link>
    </div>
  );
};

export default SignIn;
