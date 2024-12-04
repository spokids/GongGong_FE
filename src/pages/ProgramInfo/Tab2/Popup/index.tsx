import React, { useState } from 'react';
import { FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import Button from '@components/Button';

interface PopupProps {
  closeModal: () => void;
}

const Popup: React.FC<PopupProps> = ({closeModal}) => {
  const labels = [
    "욕설 / 비방을 포함하고 있어요",
    "상업적 광고나 부적절한 홍보 글이에요",
    "허위 사실 및 잘못된 정보가 포함 되어 있어요",
    "성적으로 불쾌감을 주는 내용이 있어요",
    "불법적인 활동이나 거래를 조장하는 글이에요",
    "기타 부적절한 내용",
  ];

  const [labelState, setLabelState] = useState<boolean[]>(
    Array(labels.length).fill(false)
  );

  const handleCheckboxChange = (index: number) => {
    setLabelState((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="p-4 bg-white rounded-lg w-[350px] h-[518px]">
        <h1 className="text-title1 text-foundation-100">후기 신고 사유</h1>
        <p className="flex flex-row gap-2">
          <span className="text-caption2 text-foundation-60">어떤 이유로 신고하시나요?</span>
          <span className="text-orange-400 text-caption4">여러 개 선택할 수 있어요</span>
        </p>

        <div className="flex items-center justify-center w-full mt-6 ml-2.5">
          <FormGroup sx={{ width: "100%", alignItems: "center", gap: 0.5 }}>
            {labels.map((label, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    defaultChecked={labelState[index]}
                    onChange={() => handleCheckboxChange(index)}
                    sx={{
                      color: "#FF8C2E",
                      "&.Mui-checked": {
                        color: "#FF8C2E",
                      },
                    }}
                  />
                }
                label={
                  <span
                    className={`text-body9 ${
                      labelState[index] ? "text-orange-400" : "text-primary-80"
                    }`}
                  >
                    {label}
                  </span>
                }
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  border: labelState[index] ? "1.5px solid #FED7AA" : "1.5px solid #F3F3F4",
                  backgroundColor: labelState[index] ? "#FFF7ED" : "#FFF",
                  padding: "0.2rem",
                  transition: "all 0.2s ease",
                }}
              />
            ))}
          </FormGroup>
        </div>

        <Button onClick={closeModal} style="filled" className="mt-6 w-[318px] h-[56px]">
          신고 완료하기
        </Button>
      </div>
    </div>
  );
};

export default Popup;
