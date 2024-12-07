import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import usePostRegister from "@api/hooks/auth/usePostRegister";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type SingUpData = {
  userInputId: string;
  password: string;
  nickName: string;
};

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<SingUpData>({ mode: "onChange" });
  const { mutate } = usePostRegister();

  const handleNextStep = () => setStep(step + 1);
  // const handlePreviousStep = () => setStep(step - 1);

  const handleSubmit: SubmitHandler<SingUpData> = (data) => {
    const signUpData = {
      userInputId: data.userInputId,
      password: data.password,
      nickName: data.nickName,
    };
    console.log(signUpData)
    mutate(signUpData);
  };

  return (
    <div className="h-full px-4">
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
      <div className="mt-3">
        <h2 className="text-orange-400 font-regular text-body7">
          {step === 1 ? "스포키즈에 오신 것을 환영해요!" : "마지막 단계에요!"}
        </h2>
        <h2
          className="mt-1 text-primary-100 text-title1 font-semibold"
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
      </form>
        </FormProvider>
    </div>
  );
};

export default SignUp;
