import React from "react";
import Chip from "@components/chip";
import swimming from "@assets/svg/swimming.svg";

interface LessonInfoProps {
  programId: number;
  programType: string;
  programName: string;
  facilityName: string;
  programAge: string;
  programDate: string;
}

const InfoBox: React.FC<{ title: string; value: string; className?: string }> = ({ title, value, className }) => {
    return (
      <div className={`flex flex-col ${className} w-full max-w-[120px]`}>
        <p className="text-button3 text-primary-60">{title}</p>
        <p className="overflow-hidden truncate text-body9 text-primary-80 whitespace-nowrap">
          {value}
        </p>
      </div>
    );
  };
  
  

const LessonInfo: React.FC<LessonInfoProps> = ({
  programType,
  programName,
  facilityName,
  programAge,
  programDate,
}) => {
  return (
    <div className="mt-4 mb-4">
      <Chip>
        <img src={swimming} alt="Swimming" className="w-4 h-4 mr-2" />
        {programType}
      </Chip>

      <h3 className="mt-2 text-body6">{programName}</h3>
      <div className="flex flex-row w-full h-14 mt-3 items-center justify-between p-2 rounded-lg bg-[#F7F7F7]">
      <InfoBox title="기관명" value={facilityName} />
        <InfoBox title="프로그램 대상" value={programAge} />
        <InfoBox title="프로그램 기간" value={programDate} />
      </div>
    </div>
  );
};

export default LessonInfo;
