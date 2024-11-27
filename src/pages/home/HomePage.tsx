import LessonInfo from './Components/LessonInfo';
import mainIcon from '@assets/svg/mainIcon.svg';
import fire from '@assets/svg/fire.svg';
import run from '@assets/svg/run.svg';
import Button from "@components/Button";
import search from '@assets/svg/search.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="relative w-100vw h-[252px] bg-orange-400" style={{ margin: '0 -20px 0 -20px' }}>
        <div className="absolute top-[126px] left-5 z-10 text-white">
          <p className="text-body9">안녕하세요, 닉네임님</p>
          <h1 className="mt-1 text-headline1">우리 아이를 위한 <br /> 체육 활동을 찾아볼까요?</h1>
        </div>
        <img src={mainIcon} className="absolute top-0 right-0 z-0 w-60" />
      </div>

      <div className="flex flex-row w-full mt-5 mb-6">
        <img src={fire} className="w-9"/>
        <div className="flex flex-col gap-0 ml-2">
          <h2 className="text-title1">아이들이 많이 수강하는 종목 Top3</h2>
          <p className="text-body9 text-primary-60">2024.11.15 기준</p>
        </div>
      </div>

      <hr style={{ margin: '0 -20px 0 -20px', height: '8px', background: 'var(--primary_foundation-5, #F3F3F4)', border: 'none' }} />

      <div className="flex flex-row w-full mt-4 mb-6">
        <img src={run} className="w-8"/>
          <div className="flex flex-col gap-0 ml-3">
          <h2 className="text-title1">체육 프로그램 목록</h2>
          <p className="text-body9 text-primary-60">최근에 후기가 올라온 프로그램 순의 목록이에요</p>
        </div>
      </div>

      <Button className="flex gap-2 text-white bg-primary-100">
        <img src={search} className="w-5 h-5"/>
        아이에게 딱 맞는 프로그램 찾기
      </Button>

      <Link to='/Program-info'>
        <div className='mt-5'>
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
