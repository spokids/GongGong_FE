import LessonInfo from "./Components/LessonInfo";
import mainIcon from "@assets/svg/mainIcon.svg";
import fire from "@assets/svg/fire.svg";
import run from "@assets/svg/run.svg";
import Button from "@components/Button";
import search from "@assets/svg/search.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <div
        className="w-100vw relative h-[252px] bg-orange-400"
        style={{ margin: "0 -20px 0 -20px" }}
      >
        <div className="absolute left-5 top-[126px] z-10 text-white">
          <p className="text-body9">안녕하세요, 닉네임님</p>
          <h1 className="mt-1 text-headline1">
            우리 아이를 위한 <br /> 체육 활동을 찾아볼까요?
          </h1>
        </div>
        <img src={mainIcon} className="absolute right-0 top-0 z-0 w-60" />
      </div>

      <div className="mb-6 mt-5 flex w-full flex-row">
        <img src={fire} className="w-9" />
        <div className="ml-2 flex flex-col gap-0">
          <h2 className="text-title1">아이들이 많이 수강하는 종목 Top3</h2>
          <p className="text-body9 text-primary-60">2024.11.15 기준</p>
        </div>
      </div>

      <hr
        style={{
          margin: "0 -20px 0 -20px",
          height: "8px",
          background: "var(--primary_foundation-5, #F3F3F4)",
          border: "none",
        }}
      />

      <div className="mb-6 mt-4 flex w-full flex-row">
        <img src={run} className="w-8" />
        <div className="ml-3 flex flex-col gap-0">
          <h2 className="text-title1">체육 프로그램 목록</h2>
          <p className="text-body9 text-primary-60">
            최근에 후기가 올라온 프로그램 순의 목록이에요
          </p>
        </div>
      </div>

      <Button className="flex gap-2 bg-primary-100 text-white">
        <img src={search} className="h-5 w-5" />
        아이에게 딱 맞는 프로그램 찾기
      </Button>

      <Link to="/Program-info">
        <div className="mt-5">
          <LessonInfo
            programId={1}
            programType="수영"
            programName="그룹레슨3"
            facilityName="강남스포츠문화센터수영장"
            programAge="만 7세 ~ 만 12세"
            programDate="24.11.01 - 24.11.30"
          />
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
