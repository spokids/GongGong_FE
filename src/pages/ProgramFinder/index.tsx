import Input from "@components/Input";
import FieldButton from "./components/FieldButton";
import { SwimmingIcon } from "@assets/svg";
import Button from "@components/Button";
import RegionDropdown from "./components/RegionDropdown";

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

  return (
    <div>
      <div className="flex flex-col gap-1 mt-3">
        <h2 className="font-semibold text-primary-100 text-title1">
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
          <p className="text-orange-400 text-caption4 font-regular">
            시 / 도까지 필수입력
          </p>
        </div>
      </div>

      <RegionDropdown options={regions} onSelect={handleRegionSelect} />

      <div className="mt-10">
        <div className="flex items-center gap-3 mb-1">
          <p className="font-medium text-body6 text-primary-100">분야</p>
          <p className="text-orange-400 text-caption4 font-regular">
            여러 개 선택할 수 있어요
          </p>
        </div>
        <FieldButton icon={SwimmingIcon} label="수영" />
      </div>

      <div className="mt-[42px]">
        <div className="flex flex-col">
          <p className="font-medium text-primary-100 text-body6">아이의 나이</p>
          <p className="text-caption4 text-primary-40 font-regular">
            나이는 최대 만 18세까지 입력 가능해요.
          </p>
        </div>
        <div className="flex items-center">
          <p className="mr-5 font-medium text-body6 text-primary-100">만</p>
          <Input className="w-[294px]" placeholder="숫자로 입력해주세요" />
          <p className="ml-2">세</p>
        </div>
        <Button
          className="mt-[136px] flex bg-[#FF8C2E] text-white"
          text="다음"
        />
      </div>
    </div>
  );
};

export default ProgramFinder;
