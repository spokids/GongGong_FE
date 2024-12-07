import { BadmintonIcon, BasketballIcon, BowlingIcon, DancinggIcon, DumbellsIcon, EllipicalIcon, FencingIcon, FitnessIcon, GolfIcon, HollaHoopgIcon, JumpRoopIcon, MoreCircleIcon, PiaonIcon, RollerStakeIcon, SoccerIcon, SwimmingIcon, TableTennisIcon, TennisIcon, VolleyballIcon, WarriorIcon } from "@assets/svg";
import FieldButton from "@components/FieldButton";
import RegionDropdown from "./components/RegionDropdown";
import Button from "@components/Button";
import Input from "@components/Input";

const ProgramFinder = () => {
  const handleRegionSelect = (region: string) => {
    console.log("선택된 지역:", region);
  };

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

  return (
    <div>
      <div className="mt-3 flex flex-col gap-1">
        <h2 className="text-title1 font-semibold text-primary-100">
          지역, 분야, 아이의 나이를 <br />
          입력하고 잘 맞는 프로그램을 찾아봐요!
        </h2>
        <h2 className="text-body7 font-regular text-primary-40">
          3개의 항목 중 한가지만 입력해도 적용할 수 있어요
        </h2>
      </div>
      <div className="mt-10">
        <div className="mb-1 flex items-center gap-3">
          <p className="text-body6 font-medium text-primary-100">지역</p>
          <p className="text-caption4 font-regular text-orange-400">
            시 / 도까지 필수입력
          </p>
        </div>
      </div>

      <RegionDropdown options={regions} onSelect={handleRegionSelect} />

      <div className="mt-10">
        <div className="mb-1 flex items-center gap-3">
          <p className="text-body6 font-medium text-primary-100">분야</p>
          <p className="text-caption4 font-regular text-orange-400">
            여러 개 선택할 수 있어요
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
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
          <p className="text-body6 font-medium text-primary-100">아이의 나이</p>
          <p className="text-caption4 font-regular text-primary-40">
            나이는 최대 만 18세까지 입력 가능해요.
          </p>
        </div>
        <div className="flex items-center">
          <p className="mr-5 text-body6 font-medium text-primary-100">만</p>
          <Input className="w-[294px]" placeholder="숫자로 입력해주세요" />
          <p className="ml-2">세</p>
        </div>
        <Button style="filled" className="mt-[136px] flex h-14 w-full">
          다음
        </Button>
      </div>
    </div>
  );
};

export default ProgramFinder;
