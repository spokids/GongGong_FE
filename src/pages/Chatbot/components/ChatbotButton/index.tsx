interface ChatbotButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="flex rounded-xl bg-primary-100 px-4 py-3 text-button2 font-semibold text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ChatbotButton;
