import LessonInfo from './LessonInfo';
import {FireIcon, MainIcon, Popular1Icon, Popular2Icon, Popular3Icon, RunIcon, SearchIcon, SwimmingIcon} from '@assets/svg';
import Button from "@components/Button";
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleFinder = () => {
    navigate("/program-finder");
  };

  return (
    <div className="w-full min-h-screen bg-white">
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
        <MainIcon className="absolute top-0 right-0 z-0 w-60" />
      </div>

      <div className="flex flex-row w-full mt-5">
        <FireIcon className="w-9"/>
        <div className="flex flex-col gap-0 ml-2">
          <h2 className="text-title1">아이들이 많이 수강하는 종목 Top3</h2>
          <p className="text-body9 text-primary-60">2024.11.15 기준</p>
        </div>
      </div>
      
      <div className="flex flex-row justify-center gap-2 mt-6 mb-6">
  <div className="relative flex flex-col justify-end">
    <SwimmingIcon className="absolute inset-0 z-0 flex w-8 h-8 mt-[46px] ml-[21px]" />
    <Popular2Icon className="object-cover" />
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center mt-[105px]">
      <span className="text-white text-body8">name</span>
    </div>
  </div>

  <div className="relative flex flex-col justify-end">
    <SwimmingIcon className="absolute inset-0 z-0 flex w-8 h-8 mt-5 ml-[21px]" />
    <Popular1Icon className="object-cover" />
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center mt-[105px]">
      <span className="text-white text-body8">name</span>
    </div>
  </div>

  <div className="relative flex flex-col justify-end">
    <SwimmingIcon className="absolute inset-0 z-0 flex w-8 h-8 mt-[74px] ml-[21px]" />
    <Popular3Icon className="flex justify-end object-cover" />
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center mt-[105px]">
      <span className="text-white text-body8">name</span>
    </div>
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
      <hr
        style={{
          margin: "0 -20px 0 -20px",
          height: "8px",
          background: "var(--primary_foundation-5, #F3F3F4)",
          border: "none",
        }}
      />

      <div className="flex flex-row w-full mt-4 mb-6">
        <RunIcon className="w-8"/>
          <div className="flex flex-col gap-0 ml-3">
          <h2 className="text-title1">체육 프로그램 목록</h2>
          <p className="text-body9 text-primary-60">
            최근에 후기가 올라온 프로그램 순의 목록이에요
          </p>
        </div>
      </div>

      <Button style="filled" className="mt-6 w-full h-[54px] items-center flex gap-2 bg-primary-100" onClick={handleFinder}>
        <SearchIcon className="w-5 h-5"/>
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
