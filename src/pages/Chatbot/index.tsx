import usePostChoiceChatRoom from "@api/hooks/chatbot/usePostChoiceChatRoom";

const Chatbot = () => {
  const { mutate } = usePostChoiceChatRoom();

  const handleButtonClick = (choice: string) => {
    mutate(choice);
  };

  return (
    <div className="bg-linear-orange h-full flex flex-col">
      <p className="mt-5 text-body6 font-medium text-primary-90">
        안녕하세요, 우리 아이를 위한 체육 프로그램을
        <br />
        찾아주는 스포키톡이에요!
        <br />
        프로그램을 찾기 위한 기준을 아래에서 선택해주세요.
      </p>
      <div className="flex flex-col justify-center mt-auto mb-6 px-[34px] gap-2">
        <button
          type="button"
          className="rounded-xl bg-primary-100 text-white text-button2 font-semibold py-3 px-4"
          onClick={() => handleButtonClick("FREE_CHAT")}
        >
          자유롭게 아이에게 맞는 프로그램을 찾고싶어요.
        </button>
        <button
          type="button"
          className="rounded-xl bg-primary-100 text-white text-button2 font-semibold py-3 px-4"
          onClick={() => handleButtonClick("ABILITY_CHAT")}
        >
          키우고 싶은 능력치를 기준으로 찾고 싶어요.
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
