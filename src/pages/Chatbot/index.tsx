import { useState } from "react";
import usePostChoiceChatRoom from "@api/hooks/chatbot/usePostChoiceChatRoom";
import FreeChat from "./components/FreeChat";
import AbilityChat from "./components/AbilityChat";
import BotBubble from "./components/BotBubble";
import ChatbotButton from "./components/ChatbotButton";
import ChatbotInput from "./components/ChatbotInput";
import usePostAbility from "@api/hooks/chatbot/usePostAbility";
import { Program } from "@api/types/chatbot";


const Chatbot = () => {
  const { mutate: postChoiceChatRoom } = usePostChoiceChatRoom();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [choice, setChoice] = useState<string>("");
  const [chatRoomId, setChatRoomId] = useState<number | null>(null);
  const [showChatbotInput, setShowChatbotInput] = useState(false);
  const { mutate: postAbility } = usePostAbility();
  const [programs, setPrograms] = useState<Program[]>([]);
  const [region, setRegion] = useState<string | null>(null);

  const handleButtonClick = (choice: string) => {
    setChoice(choice);
    postChoiceChatRoom(choice, { 
      onSuccess: (response) => {
        if (response.data) {
          const chatRoomId = response.data.chatRoomId;
          setChatRoomId(chatRoomId);
        }
        setButtonClicked(true);
      },
    });
  };

  const handleInputButtonClick = (region: string) => {
    setRegion(region);
    if (choice === "ABILITY_CHAT" && chatRoomId) {
      setShowChatbotInput(false);
      const abilities = null;
      postAbility(
        { chatRoomId, abilities, region },
        {
          onSuccess: (response) => {
            if (response.data && response.data.isSuccess) {
              setPrograms(response.data.programs); 
              console.log(programs)
            }
          },
        }
      );
    }
  };

  return (
    <div className="flex h-full flex-col bg-linear-orange overflow-y-auto">
      <BotBubble
        message={`안녕하세요, 우리 아이를 위한 체육 프로그램을 
          찾아주는 스포키톡이에요!
          프로그램을 찾기 위한 기준을 아래에서 선택해주세요.`}
      />
      {buttonClicked && choice === "FREE_CHAT" && <FreeChat />}
      {buttonClicked && choice === "ABILITY_CHAT" && chatRoomId && (
        <AbilityChat chatRoomId={chatRoomId} setShowChatbotInput={setShowChatbotInput} programs={programs} region={region} />
      )}
      {!buttonClicked && (
        <div className="mb-6 mt-auto flex flex-col justify-center gap-2 px-[34px]">
          <>
            <ChatbotButton onClick={() => handleButtonClick("FREE_CHAT")}>
              자유롭게 아이에게 맞는 프로그램을 찾고싶어요.
            </ChatbotButton>
            <ChatbotButton onClick={() => handleButtonClick("ABILITY_CHAT")}>
              키우고 싶은 능력치를 기준으로 찾고 싶어요.
            </ChatbotButton>
          </>
        </div>
      )}
      {showChatbotInput && (
        <div className="mt-auto">
          <ChatbotInput onClick={handleInputButtonClick} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
