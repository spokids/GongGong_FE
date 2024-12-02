import runIcon from '@assets/svg/run.svg';
import linkIcon from '@assets/svg/link.svg';
import calendarIcon from '@assets/svg/calendar.svg';
import WeekSchedule from './components';


const DetailTab = () => {
    
  return (
    <div className="mt-5">
        <div className="flex items-center gap-2">
            <img src={runIcon} className="w-6" alt="Run Icon" />
            <h2 className="text-xl font-semibold">프로그램 기본 정보</h2>
        </div>

        <p className="mt-5 text-body9 text-foundation-60">기관 정보</p>
        <p className="text-foundation-100 text-body8">반포종합운동장
            <span className='ml-[8px] text-caption4 text-foundation-60'>서울 서초구 반포2동 15-2</span>
        </p>

        <p className="mt-5 text-body9 text-foundation-60">프로그램 대상</p>
        <p className="text-foundation-100 text-body8">만 10세 ~ 만 16세</p>

        <p className="mt-5 text-body9 text-foundation-60">프로그램 모집 인원 수</p>
        <p className="text-foundation-100 text-body8">12명</p>

        <div className='border-[1px] bgcolor-foundation-5 mt-5 mb-5'/>

        <div className="flex items-center gap-2 mt-5">
            <img src={calendarIcon} className="w-6" alt="Run Icon" />
            <h2 className="text-xl font-semibold">프로그램 주간 계획</h2>
        </div>
        <p className="mt-5 text-body9 text-foundation-60">프로그램 기간</p>
        <p className="text-foundation-100 text-body8">24.11.11 - 25.01.11</p>

      <div className="flex w-full gap-2 px-2 py-3 mt-5 rounded-l marker:items-center bg-orange-50">
        <p className="text-orange-400 text-body8">
            매주 월, 수, 금
            <span className="px-2">|</span>
            <span>12:00-15:00</span>
        </p>
      </div>

      <WeekSchedule />

      <div className='border-[1px] bgcolor-foundation-5 mt-5 mb-5'/>


      <div className="flex items-center gap-2 mt-5">
            <img src={linkIcon} className="w-6" alt="Run Icon" />
            <h2 className="text-xl font-semibold">기타 정보</h2>
        </div>
        <p className="mt-5 text-body9 text-foundation-60">프로그램 링크</p>
        <a href="https://www.sitelink1241.com/121342" target="_blank" rel="noopener noreferrer" className='text-link text-foundation-100'>
        https://www.sitelink1241.com/121342
        </a>
    </div>
  );
};

export default DetailTab;
