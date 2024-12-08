import { MessageIcon } from "@assets/svg";
import Button from "@components/Button";
import { Link } from "react-router-dom";

const MessageTab = () => {
  return (
    <Link to="/chatbot" className="flex-1">
      <Button style="filled" className="flex justify-center w-full gap-2 py-2 h-11 px-21">
        <MessageIcon />
        <p className="font-normal text-caption2">스포키톡</p>
      </Button>
    </Link>
  );
};

export default MessageTab;
