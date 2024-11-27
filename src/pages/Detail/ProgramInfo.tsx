import { SwimmingIcon } from "@assets/svg";
import Chip from "@components/Chip";
import { useState } from "react";

const ProgramInfo = () => {
  const [activeTab, setActiveTab] = useState<"details" | "reviews">("details");

  return (
    <div className="w-full h-screen">
      {/* 상단 섹션 */}
      <div className="flex flex-col h-[118px] w-full">
        <div className="flex flex-col mt-[8px]">
          <Chip>
            <img src={SwimmingIcon} />
            수영
          </Chip>
        </div>
      </div>

      {/* 탭바 섹션 */}
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
          후기 <span className="text-primary-foundation-100">14개</span>
        </button>
      </div>
    </div>
  );
};

export default ProgramInfo;
