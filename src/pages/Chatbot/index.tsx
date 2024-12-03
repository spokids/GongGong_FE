import { useState } from "react";
import usePostChoiceChatRoom from "@api/hooks/chatbot/usePostChoiceChatRoom";
import FreeChat from "./components/FreeChat";
import AbilityChat from "./components/AbilityChat";
import BotBubble from "./components/BotBubble";
import ChatbotButton from "./components/ChatbotButton";

const Chatbot = () => {
  const { mutate } = usePostChoiceChatRoom();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [choice, setChoice] = useState<string>("");

  const handleButtonClick = (choice: string) => {
    setChoice(choice);
    mutate(choice, {
      onSuccess: () => {
        setButtonClicked(true);
      },
    });
  };

  return (
    <div className="flex h-full flex-col bg-linear-orange">
      <BotBubble
        message={`안녕하세요, 우리 아이를 위한 체육 프로그램을 
          찾아주는 스포키톡이에요!
          프로그램을 찾기 위한 기준을 아래에서 선택해주세요.`}
      />
      {buttonClicked && choice === "FREE_CHAT" && <FreeChat />}
      {buttonClicked && choice === "ABILITY_CHAT" && <AbilityChat />}
      <div className="mb-6 mt-auto flex flex-col justify-center gap-2 px-[34px]">
        {!buttonClicked && (
          <>
            <ChatbotButton onClick={() => handleButtonClick("FREE_CHAT")}>
              자유롭게 아이에게 맞는 프로그램을 찾고싶어요.
            </ChatbotButton>
            <ChatbotButton onClick={() => handleButtonClick("ABILITY_CHAT")}>
              키우고 싶은 능력치를 기준으로 찾고 싶어요.
            </ChatbotButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
