import { HomeIcon, MessageIcon } from "@assets/svg";
import Button from "@components/Button";

const TabBar = () => {
  return (
    <div className="flex justify-center py-[9px] gap-3">
      <Button className="flex gap-2 py-2 px-11">
        <HomeIcon />
        <p className="font-normal text-caption2">홈</p>
      </Button>
      <Button style="filled" className="px-6 py-2 rounded-lg">
        <MessageIcon />
        <p className="font-normal text-caption2">스포키톡</p>
      </Button>
    </div>
  );
};

export default TabBar;
