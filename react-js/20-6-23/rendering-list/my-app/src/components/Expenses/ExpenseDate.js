import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.toLocaleString('en-US',{year : 'numeric'});
// const year = props.date.getFullYear;

  console.log("individual month days and yearr");
  console.log(month,day,year);
  console.log("whole date");
  console.log(props.date);

// const year =props.date.getFullYear;

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
