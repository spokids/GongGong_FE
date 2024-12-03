import { useState } from "react";
import FieldButton from "@components/FieldButton";
import BotBubble from "../BotBubble";
import SenderBubble from "../SenderBubble";
import ChatbotButton from "../ChatbotButton";
import { CheckIcon } from "@assets/svg";
import usePostAbility from "@api/hooks/chatbot/usePostAbility";

interface AbilityChatProps {
  chatRoomId: number;
}

const abilities = [
  { label: "지구력", value: "EARTH" },
  { label: "민첩성", value: "AGILITY" },
  { label: "협동력", value: "COOPER" },
  { label: "근력", value: "POWER" },
  { label: "유연성", value: "FLEX" },
  { label: "반응속도", value: "REACTION" },
  { label: "표현력", value: "EXPRESSION" },
  { label: "균형감각", value: "BALANCE" },
  { label: "집중력", value: "FOCUS" },
  { label: "순발력", value: "QUICK" },
  { label: "정밀성", value: "PRECISION" },
];

const AbilityChat: React.FC<AbilityChatProps> = ({ chatRoomId }) => {
  const [selectedAbilities, setSelectedAbilities] = useState<string[]>([]);
  const { mutate } = usePostAbility();

  const handleButtonClick = (value: string) => {
    setSelectedAbilities((prevSelectedAbilities) =>
      prevSelectedAbilities.includes(value)
        ? prevSelectedAbilities.filter((item) => item !== value)
        : [...prevSelectedAbilities, value],
    );
  };

  const handleComplete = () => {
    const region = null;
    mutate({ chatRoomId, abilities: selectedAbilities, region });
  };

  return (
    <div className="flex h-full flex-col">
      <SenderBubble message="키우고 싶은 능력치를 기준으로 찾고 싶어요." />
      <BotBubble message="키우고 싶은 아이의 능력치를 선택해주세요. 여러 개 선택할 수도 있어요." />
      <div className="mt-2 flex flex-wrap gap-2">
        {abilities.map((ability) => (
          <FieldButton
            key={ability.value}
            onClick={() => handleButtonClick(ability.value)}
          >
            {ability.label}
          </FieldButton>
        ))}
      </div>
      <div className="mb-6 mt-auto flex justify-center">
        <ChatbotButton
          disabled={selectedAbilities.length === 0}
          onClick={handleComplete}
        >
          <CheckIcon
            className={`mr-[10px] ${selectedAbilities.length === 0 ? "stroke-gray-500" : "stroke-white"}`}
          />
          선택 완료했어요
        </ChatbotButton>
      </div>
    </div>
  );
};

export default AbilityChat;
