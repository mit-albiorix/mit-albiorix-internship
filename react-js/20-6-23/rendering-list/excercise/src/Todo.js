import React from 'react'

function Todo(props) {
  return (
    <div>
        <ul>
         <li>{props.items[0]}</li>
         <li>{props.items[1]}</li>
         <li>{props.items[2]}</li>
         </ul>

         <ul>
             {props.items.map((item)=>{
                return (<li>{item}</li>)
             })}
         </ul>
    </div>
  )
}

export default Todo
