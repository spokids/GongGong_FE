import HomeTab from "./components/HomeTab";
import MessageTab from "./components/MessageTab";

const TabBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <div className="flex justify-between max-w-[410px] w-full py-[9px] gap-3 bg-white">
        <HomeTab />
        <MessageTab />
      </div>
    </div>
  );
};

export default TabBar;
