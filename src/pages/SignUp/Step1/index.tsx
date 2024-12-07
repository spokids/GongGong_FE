import Input from "@components/Input";
import Button from "../../../components/Button";

interface Step1Props {
  onNext: () => void;
}

const Step1 = ({ onNext }: Step1Props) => {
  return (
    <>
      <div className="flex flex-col gap-1 mt-10">
        <label className="text-primary-100 text-body6 font-medium">아이디</label>
        <Input placeholder="사용하실 아이디를 입력해주세요" />
      </div>
      <div className="flex flex-col gap-1 mt-10">
      <label className="text-primary-100 text-body6 font-medium">비밀번호</label>
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div className="flex flex-col gap-1 mt-5">
      <label className="text-primary-100 text-body6 font-medium">비밀번호 확인</label>
        <Input type="password" placeholder="비밀번호를 다시 입력해주세요" />
      </div>
      <Button
        className="mt-[136px] flex bg-orange-400 text-white w-full h-14"
        onClick={onNext}
      >
        다음
      </Button>
    </>
  );
};

export default Step1;
