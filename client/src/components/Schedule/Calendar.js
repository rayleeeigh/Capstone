import React, { useState } from 'react';
import { ReactCalendar } from './Calendar.style';

export default function CalendarSchedule() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <ReactCalendar onChange={onChange} value={value} />
    </div>
  );
}