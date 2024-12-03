interface BotBubbleProps {
  message: string;
}

const BotBubble: React.FC<BotBubbleProps> = ({ message }) => {
  return (
    <p className="mt-5 whitespace-pre-line text-body6 font-medium text-primary-90">
      {message}
    </p>
  );
};

export default BotBubble;
