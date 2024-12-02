import { Link } from "react-router-dom";
import BgLogo from "@assets/BgLogo";
import LogoLogin from "@assets/LogoLogin";
import { SwimmingIcon } from "@assets/svg";
import Button from "@components/Button";
import Input from "@components/Input";
import FieldButton from "@pages/ProgramFinder/components/FieldButton";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center mt-[94px] pace-y-6">
      <div className="mb-[120px] relative w-full h-[300px]">
        <BgLogo className="absolute top-0 left-0 object-cover w-full h-full" />
        <LogoLogin className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[180px]" />
      </div>

      <div className="flex flex-col w-[350px] gap-2 mb-[70px]">
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
        <FieldButton icon={SwimmingIcon} label="수영" />
      </Link>
    </div>
  );
};

export default SignIn;
