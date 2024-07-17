// src/MyDatePicker.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div>
      <label>Select a date:</label>
      <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        dateFormat="yyyy-MM-dd"
        placeholderText="Click to select a date"
      />
    </div>
  );
};

export default MyDatePicker;
