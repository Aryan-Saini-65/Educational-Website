import React from 'react'
import {Card1, Card2} from './Card';
const i1={
    width: '100%',
    display: 'flex'
}
const Lsec=()=>
(
    <>
    <div style={i1}>
     <Card1></Card1>
     <Card2></Card2>
     <Card1></Card1>
     <Card2></Card2>
     </div>
    </>
);

export {Lsec};