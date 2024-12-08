import runIcon from "@assets/svg/run.svg";
import linkIcon from "@assets/svg/link.svg";
import calendarIcon from "@assets/svg/calendar.svg";
import WeekSchedule from "./WeekSchedule";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProgramDetailResponse } from "@api/types/program";
import { getProgramDetail } from "@api/programAPI";

const DetailTab = () => {
  const { programId } = useParams<{ programId: string }>();
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
  
  const formatWeekDays = (weekDays: string[]) => {
    return weekDays.join(", ");
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
    <div className="mt-5">
      <div className="flex items-center gap-2">
        <img src={runIcon} className="w-6" alt="Run Icon" />
        <h2 className="text-xl font-semibold">프로그램 기본 정보</h2>
      </div>

      <p className="mt-5 text-body9 text-foundation-60">기관 정보</p>
      <p className="text-body8 text-foundation-100">
        {programDetail?.facultyName}
        <span className="ml-[8px] text-caption4 text-foundation-60">
          {programDetail?.address}
        </span>
      </p>

      <p className="mt-5 text-body9 text-foundation-60">프로그램 대상</p>
      <p className="text-body8 text-foundation-100">{programDetail?.programAge}</p>

      <p className="mt-5 text-body9 text-foundation-60">
        프로그램 모집 인원 수
      </p>
      <p className="text-body8 text-foundation-100">{programDetail?.programRecruitNumber}명</p>

      <div className="bgcolor-foundation-5 mb-5 mt-5 border-[1px]" />

      <div className="flex items-center gap-2 mt-5">
        <img src={calendarIcon} className="w-6" alt="Run Icon" />
        <h2 className="text-xl font-semibold">프로그램 주간 계획</h2>
      </div>
      <p className="mt-5 text-body9 text-foundation-60">프로그램 기간</p>
      <p className="text-body8 text-foundation-100">{programDetail?.programDate}</p>

      <div className="flex w-full gap-2 px-2 py-3 mt-5 rounded-l bg-orange-50 marker:items-center">
        매주 {formatWeekDays(programDetail?.programWeekDay || [])} | {programDetail?.programTime}
      </div>

      <WeekSchedule programWeekDay={programDetail?.programWeekDay || []} />

      <div className="bgcolor-foundation-5 mb-5 mt-5 border-[1px]" />

      <div className="flex items-center gap-2 mt-5">
        <img src={linkIcon} className="w-6" alt="Run Icon" />
        <h2 className="text-xl font-semibold">기타 정보</h2>
      </div>
      <p className="mt-5 text-body9 text-foundation-60">프로그램 링크</p>
      <a
        href={programDetail?.homepageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link text-foundation-100 underline"
      >
        {programDetail?.homepageUrl}
      </a>
    </div>
  );
};

export default DetailTab;
