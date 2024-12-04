import { useState } from "react";
import { SendIcon } from "@assets/svg";
import Input from "@components/Input";

const ChatbotInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="pt-3 px-5 pb-5 bg-white flex gap-3">
      <Input
        className="flex-grow"
        placeholder="ex: 서울시 강남구"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className={`p-[14px] rounded-xl ${inputValue.trim() ? 'bg-orange-400' : 'bg-primary-5'}`}
        disabled={!inputValue.trim()} 
      >
        <SendIcon className={`${inputValue.trim() ? 'fill-white' : 'fill-primary-20'}`} />
      </button>
    </div>
  );
};

export default ChatbotInput;
