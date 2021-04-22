import React from 'react';
const text= "Nurture is a lovely and engaging children education website template design that will trigger everyone's interest. Whether you operate a learning center for kids or you plan to operate online exclusively, a website is a must either way.";
const i1=
{
    width: '25%',
    backgroundColor: '#ff6817f5',
    padding: '20px',
    textAlign: 'center',
    fontFamily: "-webkit-pictograph"

}
const i2=
{
    width: '25%',
    backgroundColor: 'grey',
    padding: '20px',
    textAlign: 'center',
    fontFamily: "-webkit-pictograph"
}

const Card1=()=>
(
    <>
    <div style={i1}>
    <h2 > Lorem Ipsum</h2>
    <p> {text}</p>     </div>
    </>
);
const Card2=()=>
(
    <>
    <div style={i2}>
    <h2 > Lorem Ipsum</h2>
    <p> {text}</p>     </div>
    </>
);

export {Card1, Card2};