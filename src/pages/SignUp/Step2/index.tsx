import Input from "@components/Input";
import Button from "../../../components/Button";

const Step2 = () => {
  return (
    <>
      <div className="flex flex-col gap-1 mt-10">
        <label className="text-primary-100 text-body6 font-medium">닉네임</label>
        <Input />
      </div>
      <p className="mt-[6px] text-primary-40 text-caption4">8자 이내의 한글/영문/숫자로 입력해주세요.</p>
      <Button className="mt-[366px] flex bg-orange-400 text-white w-full h-14">
        다음
      </Button>
    </>
  );
};

export default Step2;
