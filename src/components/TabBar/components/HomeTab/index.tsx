import { HomeIcon } from "@assets/svg";
import Button from "@components/Button";
import { Link } from "react-router-dom";

const HomeTab = () => {
  return (
    <Link to="/" className="flex-1">
      <Button className="w-full gap-2 px-6 py-2 h-11">
      <HomeIcon />
        <p className="font-normal text-caption2">홈</p>
      </Button>
    </Link>
  );
};

export default HomeTab;
