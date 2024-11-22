import Chip from "@components/chip";
import swimming from "@assets/svg/swimming.svg";

const lessonInfo = () => {
    return (
        <>
        <Chip>
            <img src={swimming} alt="Swimming" className="w-4 h-4 mr-2 text-orange-400"/>
            수영
        </Chip> 

        <h3 className="text-body6">뫄뫄수영강습 (초급)</h3>
        <div className="flex flex-row w-full h-14 mt-3 items-center gap-3 p-2 rounded-lg bg-[#F7F7F7]">
            <div className="flex flex-col">
                <p className="text-button3 text-primary-60">기관명</p>
                <p className="text-body8 text-primary-80">반포종합운동장</p>
            </div>
            <div className="flex flex-col">
                <p className="text-button3 text-primary-60">프로그램 대상</p>
                <p className="text-body8 text-primary-80">만 10세 ~ 만 16세</p>
            </div>
            <div className="flex flex-col">
                <p className="text-button3 text-primary-60">프로그램 기간</p>
                <p className="text-body8 text-primary-80">24.11.11 - 25.01.11</p>
            </div>
        </div>
        </>
             
    );
};

export default lessonInfo;