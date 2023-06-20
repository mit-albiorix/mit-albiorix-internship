// import React from 'react'
// import { Link } from 'react-router-dom'

// function Home() {
//   return (
//     <>
        
//         <header>
//              <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>

//              </ul>
//         </header>
//         <h1>Home</h1>
//     </>
//   )
// }

// export default Home



import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate  = useNavigate();
  const goToAbout = () =>{
     console.log("clicked");
     navigate('/about');
  }

  return (
    <>
        <Header/>
        <h1>Home</h1>
        <button onClick={goToAbout}>GoToAbout</button>
        

    </>
  )
}

export default Home
