import { useState } from "react";
import FieldButton from "@components/FieldButton";
import { CheckIcon, LoadingIcon } from "@assets/svg";
import usePostAbility from "@api/hooks/chatbot/usePostAbility";
import { Program } from "@api/types/chatbot";
import LessonInfo from "@pages/HomePage/LessonInfo";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SenderBubble from "@components/SenderBubble";
import BotBubble from "@components/BotBubble";
import ChatbotButton from "@components/ChatbotButton";
import { useLocation, useNavigate } from "react-router-dom";
import ChatbotInput from "@components/ChatbotInput";

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

const AbilityChat: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAbilities, setSelectedAbilities] = useState<string[]>([]);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const { mutate: postAbility } = usePostAbility();
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const { chatRoomId } = location.state || {};
  const [showChatbotInput, setShowChatbotInput] = useState(false);
  const [region, setRegion] = useState<string | null>(null);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);

  const handleButtonClick = (value: string, label: string) => {
    setSelectedAbilities((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
    setSelectedLabels((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const handleComplete = () => {
    postAbility(
      { chatRoomId, abilities: selectedAbilities, region: null },
      {
        onSuccess: (response) => {
          setIsComplete(true);
          setResponseMessage(response.data?.responseMessage || null);
          setShowChatbotInput(true);
        },
      }
    );
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    fetchPrograms(page);
  };

  const fetchPrograms = (page: number) => {
    const abilities = null;
    if (chatRoomId) {
      postAbility(
        { chatRoomId, abilities, region, page },
        {
          onSuccess: (response) => {
            if (response.data && response.data.isSuccess) {
              setPrograms(response.data.programs);
              setTotalPages(response.data.totalPage);
            }
          },
        }
      );
    }
  };

  const handleInputButtonClick = (region: string) => {
    setRegion(region);
    if (chatRoomId) {
      setShowChatbotInput(false);
      const abilities = null;
      postAbility(
        { chatRoomId, abilities, region },
        {
          onSuccess: (response) => {
            if (response.data && response.data.isSuccess) {
              setPrograms(response.data.programs);
              setTotalPages(response.data.totalPage);
            }
          },
        }
      );
    }
  };

  const handleReset = () => {
    navigate("/chatbot");
  };

  return (
    <div className="flex h-full flex-col bg-linear-orange overflow-y-auto">
      <BotBubble
        message={`안녕하세요, 우리 아이를 위한 체육 프로그램을 
          찾아주는 스포키톡이에요!
          프로그램을 찾기 위한 기준을 아래에서 선택해주세요.`}
      />
      <SenderBubble message="키우고 싶은 능력치를 기준으로 찾고 싶어요." />
      <BotBubble message={`키우고 싶은 아이의 능력치를 선택해주세요. 
        여러 개 선택할 수도 있어요.`} />

      <div className="flex flex-wrap gap-2 mt-2">
        {abilities.map((ability) => (
          <FieldButton
            key={ability.value}
            onClick={() => handleButtonClick(ability.value, ability.label)}
          >
            {ability.label}
          </FieldButton>
        ))}
      </div>

      {!isComplete && (
        <div className="flex justify-center mt-auto mb-6">
          <ChatbotButton disabled={selectedAbilities.length === 0} onClick={handleComplete}>
            <CheckIcon
              className={`mr-[10px] ${
                selectedAbilities.length === 0 ? "stroke-gray-500" : "stroke-white"
              }`}
            />
            선택 완료했어요
          </ChatbotButton>
        </div>
      )}

      {isComplete && (
        <>
          <SenderBubble message={selectedLabels.join(", ")} />
          {responseMessage && <BotBubble message={responseMessage} />}
        </>
      )}

      {region && (
        <div className="mb-4">
          <SenderBubble message={region} />
          <BotBubble message="추천 프로그램을 확인하세요!" />
          <div className="bg-white p-4 mt-4">
            {programs.map((program) => (
              <LessonInfo
                key={program.programId}
                programType={program.programType}
                programName={program.programName}
                facilityName={program.facultyName}
                programAge={program.programTarget}
                programDate={program.programDate}
              />
            ))}
          </div>

          <div className="flex justify-center w-full mt-4">
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                siblingCount={1}
                boundaryCount={1}
                shape="rounded"
              />
            </Stack>
          </div>

          <div className="mt-[60px] flex justify-center">
            <ChatbotButton className="mb-[24px]" onClick={handleReset}>
              <LoadingIcon />
              대화 초기화하기
            </ChatbotButton>
          </div>
        </div>
      )}

      {showChatbotInput && (
        <div className="mt-auto">
          <ChatbotInput
            onClick={handleInputButtonClick}
            placeholder="ex: 서울시 강남구"
          />
        </div>
      )}
    </div>
  );
};

export default AbilityChat;

