import { useNavigate } from "react-router-dom";
import BotBubble from "../../components/BotBubble";
import ChatbotButton from "../../components/ChatbotButton";
import routes from "constants/routes";
import usePostChoiceChatRoom from "@api/hooks/chatbot/usePostChoiceChatRoom";

const Chatbot = () => {
  const navigate = useNavigate();
  const { mutate: postChoiceChatRoom } = usePostChoiceChatRoom();

  const handleButtonClick = (choice: string) => {
    postChoiceChatRoom(choice, {
      onSuccess: (response) => {
        if (response.data) {
          const chatRoomId = response.data.chatRoomId;

          navigate(choice === "FREE_CHAT" ? routes.Free : routes.Ability, {
            state: { chatRoomId },
          });
        }
      },
    });
  };

  return (
    <div className="flex h-full flex-col bg-linear-orange overflow-y-auto px-4">
      <BotBubble
        message={`안녕하세요, 우리 아이를 위한 체육 프로그램을 
          찾아주는 스포키톡이에요!
          프로그램을 찾기 위한 기준을 아래에서 선택해주세요.`}
      />
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
    </div>
  );
};

export default Chatbot;
