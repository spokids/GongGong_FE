import Button from "../../../components/Button";
import Input from "../../../components/Input";

const Step2 = () => {
  return (
    <>
      <div className="flex flex-col gap-1 mt-10">
        <label>닉네임</label>
        <Input />
      </div>
      <p className="mt-[6px]">8자 이내의 한글/영문/숫자로 입력해주세요.</p>
      <Button className="mt-[366px] flex bg-[#FF8C2E] text-white" text="다음" />
    </>
  );
};

export default Step2;
