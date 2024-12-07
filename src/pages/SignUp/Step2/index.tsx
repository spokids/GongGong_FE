import Input from "@components/Input";
import Button from "../../../components/Button";
import { useFormContext } from "react-hook-form";

const Step2: React.FC = () => {
  const { register, watch } = useFormContext();
  
  const nickname = watch("nickName", "");

  const isFormValid = nickname.length > 0 && nickname.length <= 8;

  return (
    <>
      <div className="flex flex-col gap-1 mt-10">
        <label className="text-primary-100 text-body6 font-medium">닉네임</label>
        <Input
          {...register("nickName", { 
            required: "닉네임은 필수입니다.", 
            maxLength: { value: 8, message: "8자 이하로 입력해주세요." } 
          })}
        />
      </div>
      <p className="mt-[6px] text-primary-40 text-caption4">
        8자 이내의 한글/영문/숫자로 입력해주세요.
      </p>
      <Button
        type="submit"
        className="mt-[366px] flex bg-orange-400 text-white w-full h-14"
        disabled={!isFormValid}
      >
        완료
      </Button>
    </>
  );
};

export default Step2;
