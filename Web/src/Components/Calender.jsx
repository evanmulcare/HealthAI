import { useState } from "react";
import Calendar from "react-calendar";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      <div className="w-full">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          view="month"
          showNeighboringMonth={false}
          tileContent={({ date, view }) => {
            if (view === "month" && isToday(date)) {
              return (
                <div className="flex items-center justify-center w-8 h-8 mx-auto text-white bg-blue-500 rounded-full">
                  {date.getDate()}
                </div>
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default Calender;
