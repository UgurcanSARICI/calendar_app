import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const App = () => {
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };
  return (
    <div>
      <Calendar
        tileDisabled={tileDisabled}
        minDate={new Date()}
        maxDate={new Date(2023, 10, 19)}
        showDoubleView={true}
        selectRange={true}
      />
      {}
    </div>
  );
};

export default App;
