import { useState } from "react";
import usePostChoiceChatRoom from "@api/hooks/chatbot/usePostChoiceChatRoom";

const Chatbot = () => {
  const { mutate } = usePostChoiceChatRoom();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = (choice: string) => {
    mutate(choice, {
      onSuccess: () => {
        setButtonClicked(true);
      },
    });
  };
  //

  return (
    <div className="flex h-full flex-col bg-linear-orange">
      <p className="mt-5 text-body6 font-medium text-primary-90">
        안녕하세요, 우리 아이를 위한 체육 프로그램을
        <br />
        찾아주는 스포키톡이에요!
        <br />
        프로그램을 찾기 위한 기준을 아래에서 선택해주세요.
      </p>
      <div className="mb-6 mt-auto flex flex-col justify-center gap-2 px-[34px]">
        {!buttonClicked && (
          <>
            <button
              type="button"
              className="rounded-xl bg-primary-100 px-4 py-3 text-button2 font-semibold text-white"
              onClick={() => handleButtonClick("FREE_CHAT")}
            >
              자유롭게 아이에게 맞는 프로그램을 찾고싶어요.
            </button>
            <button
              type="button"
              className="rounded-xl bg-primary-100 px-4 py-3 text-button2 font-semibold text-white"
              onClick={() => handleButtonClick("ABILITY_CHAT")}
            >
              키우고 싶은 능력치를 기준으로 찾고 싶어요.
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
