import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from './App'

ReactDOM.render(<App/>, document.getElementById('root'));
//  these two modules are required
// now to show anythhing on the page using react we can use render
// ReactDOM.render(<h1> Aaryan Saini </h1>, document.getElementById('root'));
// now in render we have to give two arguements first is what to show and second is where
// const link1="https://www.youtube.com/watch?v=5aSYXcRV0I4";
// now like if we want to add multiple elements in render method then we have to put all of them under one element
// const line1=
// {
//   listStyleType: 'none',
//   color: 'aliceblue',
//   textDecoration: 'none',
//   width: '10%',
//   padding : '20px 0px 20px 0px',
//   fontSize : '18px'
// };
// ReactDOM.render(
//   <>
//     <header>
//       <div className="navbar">
//         <p className="head"> Tutor here    </p>
//         <ul className="line2">   
//         <a  href={link1} style={line1}>    <li> Lorem  </li> </a>
//         <a  href={link1} style={line1}>    <li> Ipsum </li> </a>
//         <a  href={link1} style={line1}>    <li> Lorem  </li> </a>
//         <a  href={link1} style={line1}>    <li> Ipsum </li> </a>
//          </ul>
//       </div>
//     </header>
//   </>,
//   document.getElementById("root")
// );

// till now dont know the reason but in react we use inline css very much in order to do it we make a object like
// .line1 my line 1 class is like this so we have to make oject like it lets make object of line1 only
// {
  
//   list-style-type: none;
//   color: aliceblue;
//   text-decoration: none;
//   width: 10%;
//   padding: 20px 0px 20px 0px;
//   font-size: 18px;
// }

// const d= new Date();
// const c=d.getHours();
// const zruri=
// {
//   margin: 'auto',
//   width: '35%',
//   borderStyle: 'solid',
//   borderRadius: '20px',
//   borderWidth: '3px',
//   backgroundColor: '#ffe9c5', 
//   borderColor: 'plum',
//   marginTop: '18%'
// };
// const heading=
// {
//   textAlign: 'center',
//   color: '#fa9191'
// };
// if(c<=11)
// {
// ReactDOM.render(
// <> <div style={zruri}> 
// <h1  style={heading}>Hello Sir, Good Morning</h1> 
// </div>
// </>, document.getElementById("root"));
// }
// else if(c<19)
// {
//   ReactDOM.render(
//     <>
//   <div style={zruri}>
//   <h1 style={heading}>Hello Sir, Good Afternoon</h1>
//     </div>
//   </>
//   , document.getElementById('root'));
// }
// else 
// {
//   ReactDOM.render(
//     <> <div style={zruri}> 
//     <h1  style={heading}>Hello Sir, Good Evening</h1> 
//     </div>
//     </>, document.getElementById("root"));
// }
// .zruri
// {
//   margin: auto;
//   width: 35%;
//   border-style: solid;
//   border-radius: 25px;
//   background-color: peachpuff;
// }





