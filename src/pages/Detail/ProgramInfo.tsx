import { SwimmingIcon } from "@assets/svg";
import Chip from "@components/Chip";
import { useState } from "react";
import DetailTab from "./Step1/DetailTab";
import ReviewTab from "./Step2/ReviewTab";

const ProgramInfo = () => {
  const [activeTab, setActiveTab] = useState<"details" | "reviews">("details");

  return (
    <div className="w-full h-screen">

      <div className="flex flex-col h-[118px] w-full">
        <div className="flex flex-col mt-[8px]">
          <Chip>
            <img src={SwimmingIcon} />
            수영
          </Chip>
        </div>
      </div>

      <div className="flex items-center justify-between w-full h-[31px] border-b p-6">
        <button
          className={`flex-1 text-center py-3 text-subtitle1 border-b-2 w-full ml-[-24px] ${
            activeTab === "details"
              ? "text-foundation-100 border-foundation-100"
              : "text-gray-400 border-transparent"
          }`}
          onClick={() => setActiveTab("details")}
        >
          상세 정보
        </button>

        <button
          className={`flex-1 text-center py-3 text-subtitle1 border-b-2 mr-[-24px] ${
            activeTab === "reviews"
              ? "text-foundation-100 border-primary-foundation-100"
              : "text-gray-400 border-transparent"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          후기 <span className="text-orange-400 text-body9">14개</span>
        </button>
      </div>

      <div className="w-full">
        {activeTab === "details" ? (
          <DetailTab/>
        ) : (
          <ReviewTab/>
        )}
      </div>
    </div>
  );
};

export default ProgramInfo;
