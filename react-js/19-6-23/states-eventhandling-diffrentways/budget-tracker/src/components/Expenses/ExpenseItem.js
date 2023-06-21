import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [titleName,setTitleName] = useState(props.title);
    
    const changeTitle = ()=>{
          console.log("clciked");
          const newTitleName = `new ${titleName}`
          setTitleName(newTitleName)
    }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{titleName}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={changeTitle}>
            Change title
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;