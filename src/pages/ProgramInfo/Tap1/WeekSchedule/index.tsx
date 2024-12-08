import React, { useEffect, useState } from "react";

interface WeekScheduleProps {
  programWeekDay: string[]; 
}

const WeekSchedule: React.FC<WeekScheduleProps> = ({ programWeekDay }) => {
  const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
  const [schedule, setSchedule] = useState<{ day: string; isActive: boolean }[]>([]);

  useEffect(() => {
    const initialSchedule = daysOfWeek.map((day) => ({
      day,
      isActive: programWeekDay.includes(day),
    }));
    setSchedule(initialSchedule);
  }, [programWeekDay]);

  return (
    <div className="mt-3 flex items-center justify-center gap-[7px]">
      {schedule.map(({ day, isActive }) => (
        <div key={day} className="flex flex-col items-center">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full text-body7 ${
              isActive
              ? "border-[1px] border-orange-400 bg-orange-50 text-orange-400"
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
