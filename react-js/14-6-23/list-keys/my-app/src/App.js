// import './App.css';

// function App() {

//   let Func = ()=>{
//     let arr = ["mit","hrushi","bhavik"];
//     let listitems = arr.map((element,index)=>{
//        return <li key={index}>{element} at index {index} </li>
//     })
//     console.log(listitems);
//     return <ul>{listitems}</ul>
//   }
//   return (
//     <>
//         <div>
//           <Func/>
//         </div>
//     </>
//   );
// }

// function App(){
//   let arr = ['mit',"hruhsi","bhavik"];

//   return (
//      <>
//          <div>
//                {arr.map((element,index)=>{
//                    return <li key={index}>{element}</li>
//                })}
//          </div>
//      </>
//   );
// }

function App() {
  let arr2 = [
    {
      id: 1,
      name: "mit",
    },
    {
      id: 2,
      name: "hrushi",
    },
  ];

  return (
    <>
      <div>
        {arr2.map((element) => {
          return <li key={element.id}>{element.name} at index {element.id}</li>;
        })}
      </div>
    </>
  );
}

export default App;
