import { useState } from "react";

const DetailPage = () => {
    const [activeTab, setActiveTab] = useState<"details" | "reviews">("details");

  return (
    <div className="flex items-center justify-between w-full border-b">
      {/* Tab Items */}
      <button
        className={`flex-1 text-center py-3 text-subtitle1 border-b-2 text-foundation-100 ${
          activeTab === "details" ? "border-foundation-100" : "border-transparent"
        }`}
        onClick={() => setActiveTab("details")}
      >
        상세 정보
      </button>

      <button
        className={`flex-1 text-center py-3 border-b-2 text-foundation-100 text-subtitle1 ${
          activeTab === "reviews" ? " border-primary-foundation-100" : "border-transparent"
        }`}
        onClick={() => setActiveTab("reviews")}
      >
        후기 <span className="text-orange-500">14개</span>
      </button>
    </div>
  );
};

export default DetailPage;