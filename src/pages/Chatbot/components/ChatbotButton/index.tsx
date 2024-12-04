interface ChatbotButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={`flex rounded-xl bg-primary-100 px-4 py-3 text-button2 font-semibold ${
        disabled ? "cursor-not-allowed text-primary-70" : "text-white"
      }`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ChatbotButton;