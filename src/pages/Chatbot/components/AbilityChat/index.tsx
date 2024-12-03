import { useState } from "react";
import FieldButton from "@pages/ProgramFinder/components/FieldButton";
import BotBubble from "../BotBubble";
import SenderBubble from "../SenderBubble";
import ChatbotButton from "../ChatbotButton";
import { CheckIcon } from "@assets/svg";

const AbilityChat = () => {
  const [selectedAbilities, setSelectedAbilities] = useState<string[]>([]);

  const handleButtonClick = (ability: string) => {
    setSelectedAbilities((prevSelectedAbilities) => {
      if (prevSelectedAbilities.includes(ability)) {
        return prevSelectedAbilities.filter((item) => item !== ability);
      } else {
        return [...prevSelectedAbilities, ability];
      }
    });
  };

  return (
    <div className="flex h-full flex-col">
      <SenderBubble message="키우고 싶은 능력치를 기준으로 찾고 싶어요." />
      <BotBubble
        message={`키우고 싶은 아이의 능력치를 선택해주세요.
          여러 개 선택할 수도 있어요.`}
      />
      <div className="mt-2 flex flex-wrap gap-2">
        <FieldButton onClick={() => handleButtonClick("지구력")}>
          지구력
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("민첩성")}>
          민첩성
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("협동력")}>
          협동력
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("근력")}>
          근력
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("유연성")}>
          유연성
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("반응속도")}>
          반응속도
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("표현력")}>
          표현력
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("균형감각")}>
          균형감각
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("집중력")}>
          집중력
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("순발력")}>
          순발력
        </FieldButton>
        <FieldButton onClick={() => handleButtonClick("정밀성")}>
          정밀성
        </FieldButton>
      </div>
      <div className="mb-6 mt-auto flex justify-center">
        <ChatbotButton
          onClick={() => console.log("선택 완료!")}
          disabled={selectedAbilities.length === 0}
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
