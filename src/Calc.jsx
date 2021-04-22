import React from 'react'
const a=10;
const b=3;
function Sum(a,  b)
{
    let c=a+b; 
    return (
<h1> Sum is {c}  </h1> );
}
function Diff(a,  b)
{
    return (
        <h1> Diff is {a-b}  </h1> );
}
function Multiply(a,  b)
{
    return (
        <h1> Multiply is {a*b}  </h1> );
}
function Div(a,  b)
{   let c=a/b; c=c.toFixed(2);
    return (
        <h1> Divide is {c}  </h1> );
    }

    export {  Sum, Diff, Multiply, Div};