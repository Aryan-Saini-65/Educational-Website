import React from 'react';
import "./index.css";
const i2=
{
    color: 'rgb(102 34 35)',
    fontFamily : "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: "39px",
    fontWeight: "Bold"
}
const i3=
{
    padding: "50px 0px 50px 100px"
}
const i4={
fontSize: '20px'
}
const i5={
    width: "40%",
}
const i6={
    height: '40px', 
    width: '100px',
    margin: '50px 0px 0px 100px',
    borderStyle: 'solid',
    borderRadius: '10px',
    backgroundColor: 'rgb(102 34 35)',
    borderColor: '#754d09',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'auto'
}
const i7="https://www.w3schools.com/tags/tag_hn.asp";
const i8={
    textDecoration: 'none',
    color: 'white'
}
const Sec1 =() =>
        (<>
            <div className='container'> 
    <div style={i3}> 
    <p style={i2}> 
    University, College, <br/> 
    School Education</p>
    <div style={i5}> 
    <p style={i4}>
        A small river named Duden flows by their place and supplies with the necessary regeliatia.
    </p> </div>
    <button style={i6}><a href={i7} style={i8}>   Contact Us </a> </button>     
    </div>
    </div>
            </>); 
export {Sec1};