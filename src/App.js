import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

const App = () => {
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };
  // const disableDates = new Date("December 20, 2022 23:15:30");
  // const date1 = disableDates.getDate();

  // const disabledDates = [new Date(2022, 11, 25), new Date(2022, 11, 27)];

  return (
    <div>
      <Calendar
        tileDisabled={tileDisabled}
        // tileDisabled={({ date }) => date.getDate() === date1}
        // tileDisabled={({ date, view }) =>
        //   view === "month" && // Block day tiles only
        //   disabledDates.some(
        //     (disabledDate) =>
        //       date.getFullYear() === disabledDate.getFullYear() &&
        //       date.getMonth() === disabledDate.getMonth() &&
        //       date.getDate() === disabledDate.getDate()
        //   )
        // }
        minDate={new Date()}
        maxDate={new Date(2023, 10, 19)}
        // showDoubleView={true}
        selectRange={true}
      />
    </div>
  );
};

export default App;
