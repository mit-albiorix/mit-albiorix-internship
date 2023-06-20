import React,{memo} from 'react'

function Home(props) {
    console.log(props.data);
  return (
    <div>
      <h1>hello in the home</h1>
      
    </div>
  )
}

export default memo(Home)
