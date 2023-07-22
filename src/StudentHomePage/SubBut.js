import { useState } from 'react';
import { Container } from '../container/Contain';
import { Sublink } from './Sublink';
import './SubBut.css';
export const SubBut=(props)=>{
    const [open,setOpen]=useState(false);
    var check=open;
    return(
        <>
        
        <Container>
           <button onClick={()=>{setOpen(!check)}}>{props.subname}</button>
        </Container>
        {check&&<Sublink/>}
        </>
    );
}