import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => setStep(step + 1);
  // const handlePreviousStep = () => setStep(step - 1);

  return (
    <div>
      <div>
        <h3>회원가입</h3>
      </div>
      <div className="mt-3">
        <h2>
          {step === 1 ? "스포키즈에 오신 것을 환영해요!" : "마지막 단계에요!"}
        </h2>
        <h2
          className="mt-1"
          dangerouslySetInnerHTML={{
            __html:
              step === 1
                ? "사용하실 아이디와 <br />비밀번호를 설정해주세요."
                : "사용하실 닉네임을 알려주세요.",
          }}
        />
      </div>
      {step === 1 && <Step1 onNext={handleNextStep} />}
      {step === 2 && <Step2 />}
    </div>
  );
};

export default SignUp;
