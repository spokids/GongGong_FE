import { BadmintonIcon, BasketballIcon, BowlingIcon, DancinggIcon, DumbellsIcon, EllipicalIcon, FencingIcon, FitnessIcon, GolfIcon, HollaHoopgIcon, JumpRoopIcon, MoreCircleIcon, PiaonIcon, RollerStakeIcon, SoccerIcon, SwimmingIcon, TableTennisIcon, TennisIcon, VolleyballIcon, WarriorIcon } from "@assets/svg";
import FieldButton from "@components/FieldButton";
import RegionDropdown from "./components/RegionDropdown";
import Button from "@components/Button";
import Input from "@components/Input";
import { useGetSigungu } from "@api/hooks/program/useGetSigungu";
import { useGetDong } from "@api/hooks/program/useGetdong";
import { useEffect, useState } from "react";

const ProgramFinder = () => {
  const [isRegionSelected, setRegionSelected] = useState(false);
  const [isSigunguSelected, setSigunguSelected] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("서울특별시");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDong, setSelectedDong] = useState(false);

  const { data: sigunguData, isError: sigunguError } = useGetSigungu(selectedRegion);
  const { data: dongData, isError: dongError } = useGetDong(selectedState, selectedRegion);


  const states = sigunguError ? ["정보없음"] : sigunguData || [];
  const dongs = dongError ? ["정보없음"] : dongData || [];

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setRegionSelected(true);
    setSigunguSelected(false);
    setSelectedState("");
    setSelectedDong(false);
  };

  const handleStateSelect = (states: string) => {
    setSelectedDong(false);
    setSigunguSelected(true);
    setSelectedState(states);
  };

  const handleDongSelect = () => {
    setSelectedDong(true);
  };

  useEffect(() => {
    setSelectedDong(false);
  }, [selectedState]);

  const regions = [
    "서울특별시",
    "경상북도",
    "경기도",
    "강원특별자치도",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "충청남도",
    "경상남도",
    "충청북도",
    ];
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

  return (
    <div>
      <div className="flex flex-col gap-1 mt-3">
        <h2 className="font-semibold text-title1 text-primary-100">
          지역, 분야, 아이의 나이를 <br />
          입력하고 잘 맞는 프로그램을 찾아봐요!
        </h2>
        <h2 className="text-body7 font-regular text-primary-40">
          3개의 항목 중 한가지만 입력해도 적용할 수 있어요
        </h2>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3 mb-1">
          <p className="font-medium text-body6 text-primary-100">지역</p>
          <p className="text-orange-400 text-caption4 font-regular">시 / 도까지 필수입력</p>
        </div>
      </div>

      <RegionDropdown options={regions} onSelect={handleRegionSelect} placeholder="시/도" />

      <div className="flex flex-row gap-2 mt-3">
        {isRegionSelected && (
          <RegionDropdown options={states} onSelect={handleStateSelect} placeholder="시/군/구" />
        )}

        {isSigunguSelected && (
          <RegionDropdown options={dongs} onSelect={handleDongSelect} placeholder="동/읍/면/리" />
        )}
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3 mb-1">
          <p className="font-medium text-body6 text-primary-100">분야</p>
          <p className="text-orange-400 text-caption4 font-regular">여러 개 선택할 수 있어요</p>
        </div>
<<<<<<< HEAD
        <div className="flex flex-wrap gap-2">
=======
        <div className="flex gap-2 flex-wrap">
>>>>>>> 7d1c7d8e (#52 [Refactor] 버튼 추가)
          {fields.map((field, index) => (
            <FieldButton key={index}>
              {field.icon}
              {field.label}
            </FieldButton>
          ))}
        </div>

      </div>

      <div className="mt-[42px]">
        <div className="flex flex-col">
          <p className="font-medium text-body6 text-primary-100">아이의 나이</p>
          <p className="text-caption4 font-regular text-primary-40">
            나이는 최대 만 18세까지 입력 가능해요.
          </p>
        </div>
        <div className="flex items-center">
          <p className="mr-5 font-medium text-body6 text-primary-100">만</p>
          <Input className="w-[294px]" placeholder="숫자로 입력해주세요" />
          <p className="ml-2">세</p>
        </div>
        <Button 
          style="filled" 
          className="mt-[136px] flex h-14 w-full"
          disabled={!selectedDong}
        >
          조건적용
        </Button>
      </div>
    </div>
  );
};

export default ProgramFinder;
