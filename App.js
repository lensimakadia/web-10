// netflix app ;

// import React from 'react';
// import ReactDOM from 'react-dom';

// function ncard(cvalue)
// {

// }
// ReactDOM.render(
// <>
//     <div className="cards">
//         <div className="card">
//         <img src="https://wallpapercave.com/wp/wp4056410.jpg"
//          alt="mypic"
//          className="card_img"/>

//         <div className="card_info">
//         <span classname = "card_category"> a netflix orignal series </span>
//         <h3 className = "card_title"> Dark</h3>
//         <a href ="https://www.netflix.com/in/title/80990668?source=35" target="_blank">
//         <button> watch now</button>
//         </a>
//         </div>

//         </div>
//     </div>
//      Sdata.map(ncard);
//     </>,
//     document.getElementById('root')
// );

// :slot_machine:  🎮 and state in count a number

// import React,{useState}  from "react";
// import Slot from './Slot';
// import ReactDOM from 'reactdom';

// const SlotM = (props) => {
// //   let x = "😄";
// //   let y = "😄";
// //   let z = "👡";

// let x= props.x;
// let y= props.y;
// let z= props.z;
//   if (x ===y && y === z) {
//     return (
//       <>
//         <div className='slot_inner'>
//         <h1> {x} {y} {z}</h1>
//         <h1>this is maching</h1>
//         <hr/>
//         </div>
//       </>
//     );
//   } else {
//     return (
//         <>
//           <div className='slot_inner'>
//           <h1> {x} {y} {z}</h1>
//           <h1>this is not maching</h1>
//           <hr/>
//           </div>
//         </>
//       );
//   }
// };

// const App = () => {

// const state = useState();
// // console.log (state);
// const [count, setCount]= useState(0);
// const IncNum =()=>
// {
//    setCount (count+1); // console.log('clicked');
// };
//   return (
//     <>
//       <h1 className="heading_style">
//         🎰 welcome to <span>slot machine game</span> 🎰
//       </h1>
//       <h1> {count} </h1>
//         <button onClick={IncNum}>click me</button>
//       <div className="slotmachine">
//       <Slot x = "😆" y = "😆" z = "😆"/>
//       <Slot  x = "🏫" y = "✂️" z =  "🦂"/>
//       <Slot x = "👍" y = "👎" z = "👍"/>
//       <Slot x = "🥇" y = "🥇" z = "🥇"/>
//       <Slot x = "🎱" y = "🎰" z = "🦥"/>
//       </div>

//     </>
//   );
// };

// 🕙 digital clock

// import React, { useState } from 'react';

//  const App = () =>
// {
//     let newtime =  new Date().toLocaleTimeString();
//     const  [ctime, setCtime] = useState(newtime);

//     const UpdateTime = () =>
//     {
//          newtime =  new Date().toLocaleTimeString();
//          setCtime(newtime);
//      }
//      setInterval (UpdateTime,1000)
//      return(
//   <>
//          <h1> {ctime}</h1>
//          </>
//      );
//  };

// : button click event 

// import React, { useState } from "react";

// const App = () => {
//     const purple = "purple";
//     const [bg,setbg] = useState(purple);
//     const [Name,setName] = useState('click me');

//     const bgChange = () =>{
//         // console .log ('bgChange');
//         let newbg = "#34495e";
//         setbg(newbg);
//         setName('wowww');
//     }
//     const bgBack = ()=>{
//         setbg (purple);
//         setName('aaayo');
//     }

//   return (
//     <>
//       <div style ={{backgroundColor: bg }} >
//         <button onClick={bgChange} onDoubleClick = {bgBack}>{Name}</button>
//       </div>
//     </>
//   );
// };
import React, { useState } from 'react';

const App = ()=>
{
    const [name , setName] = useState();
    const [fullName , setfullName]=useState();
    const inputEvent = (event)=>
    {
        console.log (event.target.value);
        setName (event.target.value);
    };
    const onSubmit = () =>
    {
        setfullName(name);
    };
    return(
        <> 
            <h1> Hello {fullName}</h1>
            <input 
            type='text' 
            placeholder= "please enter your name "
            onChange = {inputEvent}
            value={name}
            />
            
            <button onClick = {onSubmit}>click me </button>
        </>
    );
}

export default App;
