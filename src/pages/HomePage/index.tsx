import LessonInfo from './LessonInfo';
import { FireIcon, MainIcon, Popular2Icon, Popular3Icon, RunIcon, SearchIcon } from '@assets/svg';
import Button from "@components/Button";
import { Link, useNavigate } from 'react-router-dom';
import { BadmintonIcon, BasketballIcon, BowlingIcon, DancinggIcon, DumbellsIcon, EllipicalIcon, FencingIcon, FitnessIcon, GolfIcon, HollaHoopgIcon, JumpRoopIcon, MoreCircleIcon, PiaonIcon, Popular1Icon, RollerStakeIcon, SoccerIcon, SwimmingIcon, TableTennisIcon, TennisIcon, VolleyballIcon, WarriorIcon } from "@assets/svg";
import { getProgramReviewed, getProgramTop3 } from '@api/programAPI';
import { useEffect, useState } from 'react';
import Pagination from './Pagenation';

  const HomePage = () => {
    const navigate = useNavigate();
    const [top3data, setTop3data] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState<number | null>(null);
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const [programLists, setProgramLists] = useState<any[]>([]);
  
    const useGetProgramTop3 = async () => {
      const response = await getProgramTop3();
      if (response && Array.isArray(response.data)) {
        setTop3data(response.data);
      }
    };
  
    const fetchReviewedPrograms = async (page: number) => {
      try {
        const response = await getProgramReviewed(page, 10);
        console.log('API Response:', response);
        console.log('API Response data:', response.data);
    
        if (response && response.data && Array.isArray(response.data.programList)) {
          setCurrentPage(response.data.currentPage); 
          setProgramLists(response.data.programList);
          setTotalPages(response.data.totalPage);
        } else {
          console.error('Invalid data format:', response);
        }
      } catch (error) {
        console.error('Error fetching reviewed programs:', error);
      }
    };
    
  
    useEffect(() => {
      useGetProgramTop3();
      fetchReviewedPrograms(1);
    }, []);

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages!) {
        fetchReviewedPrograms(page);
      }
    };
    
  const handleFinder = () => {
    navigate("/program-finder");
  };

  const fields = [
    { icon: <SwimmingIcon />, label: "수영" },
    { icon: <BadmintonIcon />, label: "배드민턴" },
    { icon: <FitnessIcon />, label: "에어로빅" },
    { icon: <BasketballIcon />, label: "농구" },
    { icon: <DumbellsIcon />, label: "헬스" },
    { icon: <TableTennisIcon />, label: "탁구" },
    { icon: <RollerStakeIcon />, label: "인라인" },
    { icon: <DancinggIcon />, label: "댄스" },
    { icon: <GolfIcon />, label: "골프" },
    { icon: <HollaHoopgIcon />, label: "무용" },
    { icon: <SoccerIcon />, label: "축구" },
    { icon: <FencingIcon />, label: "검도" },
    { icon: <VolleyballIcon />, label: "배구" },
    { icon: <BowlingIcon />, label: "볼링" },
    { icon: <EllipicalIcon />, label: "스피닝" },
    { icon: <TennisIcon />, label: "스쿼시" },
    { icon: <WarriorIcon />, label: "자세교정" },
    { icon: <TennisIcon />, label: "테니스" },
    { icon: <PiaonIcon />, label: "피아노" },
    { icon: <JumpRoopIcon />, label: "음악줄넘기" },
    { icon: <MoreCircleIcon />, label: "기타" },
  ];

  const selectedFields = fields.filter(field =>
    top3data.includes(field.label)
  );

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-100vw relative h-[252px] bg-orange-400" style={{ margin: "0 -20px 0 -20px" }}>
        <div className="absolute left-5 top-[126px] z-10 text-white">
          <p className="text-body9">안녕하세요, 닉네임님</p>
          <h1 className="mt-1 text-headline1">
            우리 아이를 위한 <br /> 체육 활동을 찾아볼까요?
          </h1>
        </div>
        <MainIcon className="absolute top-0 right-0 z-0 w-60" />
      </div>

      <div className="flex flex-row w-full mt-5">
        <FireIcon className="w-9" />
        <div className="flex flex-col gap-0 ml-2">
          <h2 className="text-title1">아이들이 많이 수강하는 종목 Top3</h2>
          <p className="text-body9 text-primary-60">2024.11.15 기준</p>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2 mt-6 mb-6">
        {selectedFields.map((field, index) => (
          <div key={index} className="relative flex flex-col justify-end">
            <div className="relative flex flex-col justify-end">
              <div className="absolute inset-0 z-0 flex items-center w-8 h-8" style={{ marginTop: `${23 + index * 2}px`, marginLeft: `${20 + index * 3}px` }}>
                {field.icon}
              </div>
            </div>
            <div className="object-cover">
              {index === 0 && <Popular2Icon className="object-cover" />}
              {index === 1 && <Popular1Icon className="object-cover" />}
              {index === 2 && <Popular3Icon className="object-cover" />}
            </div>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center mt-[105px]">
              <span className="text-white text-body8">{field.label}</span>
            </div>
          </div>
        ))}
      </div>

      <hr style={{ margin: "0 -20px 0 -20px", height: "8px", background: "var(--primary_foundation-5, #F3F3F4)", border: "none" }} />

      <div className="flex flex-row w-full mt-4 mb-6">
        <RunIcon className="w-8" />
        <div className="flex flex-col gap-0 ml-3">
          <h2 className="text-title1">체육 프로그램 목록</h2>
          <p className="text-body9 text-primary-60">최근에 후기가 올라온 프로그램 순의 목록이에요</p>
        </div>
      </div>

      <Button style="filled" className="mt-6 w-full h-[54px] items-center flex gap-2 bg-primary-100" onClick={handleFinder}>
        <SearchIcon className="w-5 h-5" />
        아이에게 딱 맞는 프로그램 찾기
      </Button>

      <div className="mt-5">
        {programLists.map((programList) => (
          <Link to={`/program-info/${programList.programId}`} key={programList.programId}>
            <LessonInfo
              programId={programList.programId}
              programType={programList.programType}
              programName={programList.programName}
              facilityName={programList.facilityName}
              programAge={programList.programAge}
              programDate={programList.programDate}
            />
          </Link>
        ))}
      </div>

      {totalPages && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default HomePage;
