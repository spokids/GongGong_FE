import { useState } from "react";
import { Link } from "react-router-dom";
import BgLogo from "@assets/BgLogo";
import LogoLogin from "@assets/LogoLogin";
import { SwimmingIcon } from "@assets/svg";
import Button from "@components/Button";
import Input from "@components/Input";
import usePostLogin from "@api/hooks/auth/usePostSignIn";

const SignIn = () => {
  const { mutate: postLogin } = usePostLogin();
  const [userInputId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 

  const handleLogin = () => {
    postLogin(
      { userInputId, password },
      {
        onError: () => {
          setErrorMessage("로그인에 실패했습니다. 아이디나 비밀번호를 확인해주세요.");
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
        <Input
          placeholder="아이디를 입력해주세요."
          value={userInputId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      {errorMessage && (
        <span
          style={{
            display: "flex",
            color: "red",
            fontSize: "14px",
            justifyContent: "center",
          }}
        >
          {errorMessage}
        </span>
      )}
      </div>

      <Button onClick={handleLogin} style="filled" className="mt-6 w-[310px] h-[54px]">
        로그인하기
      </Button>


      <span
        style={{
          display: "flex",
          color: "#484851",
          fontSize: "14px",
          letterSpacing: "-0.42px",
          marginTop: "20px",
        }}
      >
        스포키즈가 처음이신가요?
      </span>
      <Link to="/sign-up">
        <span
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
        </span>
        <SwimmingIcon />
      </Link>
    </div>
  );
};

export default SignIn;