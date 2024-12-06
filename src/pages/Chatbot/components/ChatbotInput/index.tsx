import { useState } from "react";
import { SendIcon } from "@assets/svg";
import Input from "@components/Input";

interface ChatbotInputProps {
  onClick: (region: string) => void; 
  placeholder: string;
}

const ChatbotInput: React.FC<ChatbotInputProps> = ({ onClick, placeholder }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    onClick(inputValue); 
  };

  return (
    <div className="pt-3 px-5 pb-5 bg-white flex gap-3">
      <Input
        className="flex-grow text-body9"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="button"
        onClick={handleClick}
        className={`p-[14px] rounded-xl ${inputValue.trim() ? 'bg-orange-400' : 'bg-primary-5'}`}
        disabled={!inputValue.trim()} 
      >
        <SendIcon className={`${inputValue.trim() ? 'fill-white' : 'fill-primary-20'}`} />
      </button>
    </div>
  );
};

export default ChatbotInput;
