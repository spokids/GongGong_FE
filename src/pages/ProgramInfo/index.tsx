import { SwimmingIcon } from "@assets/svg";
import badge from "@assets/svg/badge.svg";
import Chip from "@components/Chip";
import { useEffect, useState } from "react";
import DetailTab from "./Tap1/index";
import ReviewTab from "./Tab2";
import Button from "@components/Button";
import { getProgramDetail } from "@api/programAPI";
import { useParams } from "react-router-dom";
import { ProgramDetailResponse } from "@api/types/program";

const ProgramInfo = () => {
  const { programId } = useParams<{ programId: string }>();
  const [activeTab, setActiveTab] = useState<"details" | "reviews">("details");
  const [programDetail, setProgramDetail] = useState<ProgramDetailResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const clickGetProgramDetail = async (programId: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProgramDetail(programId);
      
      if (response && response.data) {
        setProgramDetail(response.data);
      } else {
        throw new Error('프로그램 정보를 찾을 수 없습니다.');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (programId) {
      clickGetProgramDetail(Number(programId));
    }
  }, [programId]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  return (
    <div className="w-full h-screen mt-14">
      <div className="flex h-[118px] w-full flex-col">
        <div className="flex flex-row gap-2 mt-2">
          <Chip>
            <SwimmingIcon />
            {programDetail?.programType || "수영"}
          </Chip>
          {programDetail?.leaderQualification && (
             <Chip className="bg-system-blue bg-opacity-10 text-button3 text-system-blue">
             <img src={badge} alt="badge" />
             지도사 자격증 있음
           </Chip>
          )}
         
        </div>
        <h1 className="mt-[6px] text-title1 text-foundation-100">
          {programDetail?.programName || "프로그램 이름"}
        </h1>
      </div>

      <div className="flex h-[31px] w-full items-center justify-between border-b p-6">
        <button
          className={`ml-[-24px] w-full flex-1 border-b-2 py-3 text-center text-subtitle1 ${
            activeTab === "details"
              ? "border-foundation-100 text-foundation-100"
              : "border-transparent text-gray-400"
          }`}
          onClick={() => setActiveTab("details")}
        >
          상세 정보
        </button>

        <button
          className={`mr-[-24px] flex-1 border-b-2 py-3 text-center text-subtitle1 ${
            activeTab === "reviews"
              ? "border-primary-foundation-100 text-foundation-100"
              : "border-transparent text-gray-400"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          후기 <span className="text-orange-400 text-body9">{programDetail?.reviewCount}개</span>
        </button>
      </div>

      <div className="w-full">
        {activeTab === "details" ? <DetailTab /> : <ReviewTab />}
      </div>

      <Button style="filled" className="mt-[136px] w-full h-14 flex">
        다음
      </Button>
    </div>
  );
};

export default ProgramInfo;
