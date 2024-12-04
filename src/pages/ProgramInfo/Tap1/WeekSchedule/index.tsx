import React, { useEffect, useState } from "react";

const WeekSchedule: React.FC = () => {
  const [schedule, setSchedule] = useState<
    { day: string; isActive: boolean }[]
  >([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch("/api/schedule");
      const data = await response.json();
      setSchedule(data);
    };

    fetchSchedule();
  }, []);

  const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <div className="mt-3 flex items-center justify-center gap-[7px]">
      {daysOfWeek.map((day, index) => (
        <div key={day} className="flex flex-col items-center">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full text-body7 ${
              schedule[index]?.isActive
                ? "border-orange-400 bg-orange-50 text-orange-400"
                : "bg-foundation-5 text-foundation-40"
            }`}
          >
            {day}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekSchedule;
