import Input from "@components/Input";
import Button from "../../../components/Button";
import { useFormContext } from "react-hook-form";

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const {
    register,
    watch,
    formState: { isValid },
  } = useFormContext();
  

  const [userInputId, password, confirmPassword] = watch([
    "userInputId",
    "password",
    "confirmPassword",
  ]);

  const isPasswordValid = password === confirmPassword;

  return (
    <>
      <div className="flex flex-col gap-1 mt-10">
        <label className="text-primary-100 text-body6 font-medium">아이디</label>
        <Input
          placeholder="사용하실 아이디를 입력해주세요"
          {...register('userInputId', { required: true })}
        />
      </div>

      <div className="flex flex-col gap-1 mt-10">
        <label className="text-primary-100 text-body6 font-medium">비밀번호</label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register('password', { required: true })}
        />
      </div>

      <div className="flex flex-col gap-1 mt-5">
        <label className="text-primary-100 text-body6 font-medium">비밀번호 확인</label>
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          {...register('confirmPassword', {
            required: true,
          })}
        />
      </div>

      <Button
        className="mt-[136px] flex bg-orange-400 text-white w-full h-14"
        type="submit"
        disabled={!isValid || !isPasswordValid}
        onClick={onNext}
      >
        다음
      </Button>
    </>
  );
};

export default Step1;
