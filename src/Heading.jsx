import React from "react";


const i1 = {
    width: '100%',
    backgroundColor: 'white',
    display: 'flex'
};

const i2=
{
    color: 'black',
    padding : ' 0px 0px 0px 20px',
    fontFamily : "'Antonio', sans-serif",
    width: '40%'
};


const i3=
{
    fontSize: '20px',
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    align: 'right',
    margin: '30px 0px 0px 0px'
    
};
const i4=
{
    textDecoration: 'none',
    color: 'grey',
    width: '60%',
    padding: '20px'
}; 


const ytlink="https://www.youtube.com/playlist?list=PL1F8AmUqT1eBoiLO_dq_Sf31U1x84Q5RC";
function heading() {
    return ( <div style={i1}>
    <h1 style={i2}> TutorHere</h1>
    <ul style={i3}>
       <l1> <a href={ytlink} style={i4}> HOME </a> </l1>  
       <l1> <a href={ytlink} style={i4}> ABOUT </a> </l1>  
       <l1> <a href={ytlink} style={i4}> BLOG </a> </l1>  
       <l1> <a href={ytlink} style={i4}> SERVICES </a> </l1>  
       <l1> <a href={ytlink} style={i4}> CONTACT </a> </l1>  
    </ul>
  </div> );
}

export default heading;