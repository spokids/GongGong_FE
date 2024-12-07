import { useLocation, useNavigate } from "react-router-dom";
import BotBubble from "../../components/BotBubble";
import ChatbotInput from "../../components/ChatbotInput";
import SenderBubble from "../../components/SenderBubble";
import usePostFree from "@api/hooks/chatbot/usePostFree";
import { useState } from "react";
import { Program } from "@api/types/chatbot";
import ChatbotButton from "@components/ChatbotButton";
import { LoadingIcon } from "@assets/svg";
import { Pagination, Stack } from "@mui/material";
import LessonInfo from "@pages/HomePage/LessonInfo";
import useDeleteChatRoom from "@api/hooks/chatbot/useDeleteChatRoom";

const FreeChat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { chatRoomId } = location.state || {};

  const { mutate: postFree } = usePostFree();
  const { mutate: deleteChatRoom } = useDeleteChatRoom();

  const [programs, setPrograms] = useState<Program[]>([]);
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const [messages, setMessages] = useState<{ sender: string, message: string }[]>([]);
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSending = (userFreeInput: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", message: userFreeInput },
    ]);

    if (chatRoomId) {
      postFree(
        { chatRoomId, userFreeInput },
        {
          onSuccess: (response) => {
            if (response.data && response.data.isSuccess) {
              setPrograms(response.data.programs);
              setTotalPages(response.data.totalPage);
              console.log(response.data)
              setResponseMessage(response.data.responseMessage)
            } else if (response.data) {
              setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", message:response.data?.responseMessage || "" },
              ]);
            }
          },
        }
      );
    }
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    fetchPrograms(page);
  };

  const handleReset = () => {
    if (chatRoomId) {
      deleteChatRoom(chatRoomId, {
        onSuccess: () => {
          navigate("/chatbot");
        },
      });
    }
  };

  const fetchPrograms = (page: number) => {
    if (chatRoomId) {
      const userFreeInput ="";
      postFree(
        { chatRoomId , userFreeInput,  page },
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
  


  return (
    <div className="h-full flex flex-col justify-between bg-linear-orange overflow-y-auto">
      <div className="px-4">
      <div>
        <BotBubble
          message={`안녕하세요, 우리 아이를 위한 체육 프로그램을 
            찾아주는 스포키톡이에요!
            프로그램을 찾기 위한 기준을 아래에서 선택해주세요.`}
        />
        <SenderBubble message="자유롭게 아이에게 맞는 프로그램을 찾고싶어요." />
        <BotBubble
          message={`자유롭게 아이의 나이, 거주하는 행정구역,
          또는 원하는 운동 종목 등을 입력해주세요!
          아이에게 맞는 체육 프로그램을 열심히 찾아드릴게요!`}
        />
      </div>

      <div>
        {messages.map((msg, index) => {
          return msg.sender === "user" ? (
            <SenderBubble key={index} message={msg.message} />
          ) : (
            <BotBubble key={index} message={msg.message} />
          );
        })}
      </div>
      {responseMessage &&(
        <>
        <BotBubble message={responseMessage} />

        <div className="mb-4">
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
        </>
      )}
      </div>

        {!responseMessage &&(
        <div>
        <ChatbotInput
          onClick={handleSending}
          placeholder={"ex: 아이가 13살인데, 축구를 하고 싶어해요."}
        />
      </div>
      )}
    </div>
  );
};

export default FreeChat;
