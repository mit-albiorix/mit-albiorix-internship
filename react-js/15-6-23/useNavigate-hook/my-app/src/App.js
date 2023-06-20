// code for video 1 of thapa tech for router series about intro to routers
// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route  path="/" element={<div> Home Page</div>} />
//           <Route  path="/about" element={<div> about Page</div>} />
//           <Route  path="/contact" element={<div> contact Page</div>} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// // code for video 2,3,4,5 of thapa tech for router series about page components,link components , navbar acive class to routers

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path="/" element={ <Home/>} />
          <Route  path="/about" element={ <About/>} />
          <Route  path="/contact" element={ <Contact/>} />
          <Route  path="*" element={ <ErrorPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

