import { HomeIcon, MessageIcon } from "@assets/svg";
import Button from "@components/Button";

const TabBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center py-[9px]  gap-3 bg-white">
      <Button className="flex gap-2 py-2 w-[170px] px-11">
        <HomeIcon />
        <p className="font-normal text-caption2">홈</p>
      </Button>
      <Button style="filled" className="px-6 py-2 rounded-lg w-[160px] h-11">
        <MessageIcon />
        <p className="font-normal text-caption2">스포키톡</p>
      </Button>
    </div>
  );
};

export default TabBar;
