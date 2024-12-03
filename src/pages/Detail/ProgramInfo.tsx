import { SwimmingIcon } from "@assets/svg";
import badge from "@assets/svg/badge.svg";
import Chip from "@components/Chip";
import { useState } from "react";
import DetailTab from "./Step1/index";
import ReviewTab from "./Step2/ReviewTab";

const ProgramInfo = () => {
  const [activeTab, setActiveTab] = useState<"details" | "reviews">("details");

  return (
    <div className="mt-14 h-screen w-full">
      <div className="flex h-[118px] w-full flex-col">
        <div className="mt-2 flex flex-row gap-2">
          <Chip>
            <img src={SwimmingIcon} />
            수영
          </Chip>
          <Chip className="bg-system-blue bg-opacity-10 text-button3 text-system-blue">
            <img src={badge} />
            지도사 자격증 있음
          </Chip>
        </div>
        <h1 className="mt-[6px] text-title1 text-foundation-100">
          뫄뫄수영강습 (초급)
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
          후기 <span className="text-body9 text-orange-400">14개</span>
        </button>
      </div>

      <div className="w-full">
        {activeTab === "details" ? <DetailTab /> : <ReviewTab />}
      </div>
    </div>
  );
};

export default ProgramInfo;
