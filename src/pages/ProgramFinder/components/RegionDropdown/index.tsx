import React, { useState, useEffect } from "react";

interface RegionDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const RegionDropdown: React.FC<RegionDropdownProps> = ({
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
    setIsClicked(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target as Element).closest(".region-dropdown")) {
      setIsOpen(false);
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative region-dropdown">
      <button
        onClick={toggleDropdown}
        className={`w-[171px] px-[11px] py-[12px] mt-2 border-[1.5px] rounded-lg text-left ${
          isClicked
            ? "border-[#FED7AA] bg-[#FFF7ED] text-primary-100"
            : "border-orange-100 bg-white text-primary-70"
        }`}
      >
        {selectedOption || "시 / 도"}
      </button>

      {isOpen && (
        <ul className="absolute left-0 w-[171px] bg-white rounded-lg shadow-[0px_4px_52px_0px_rgba(38,39,43,0.20)] z-10 max-h-[276px] overflow-y-auto">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="p-3 cursor-pointer text-primary-70"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegionDropdown;