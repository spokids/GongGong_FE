interface SenderBubbleProps {
  message: string;
}

const SenderBubble = ({ message }: SenderBubbleProps) => {
  return (
    <div className="flex flex-wrap justify-end">
      <div className="mt-6 flex-shrink-0 rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-none border-[1.5px] border-orange-100 p-3 text-body8 font-medium text-orange-400">
        {message}
      </div>
    </div>
  );
};

export default SenderBubble;