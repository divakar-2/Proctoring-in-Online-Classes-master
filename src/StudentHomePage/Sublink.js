import { Container } from "../container/Contain";
import { useState,useEffect } from "react";
import {API_URL} from '../URL/URL';
import './SubBut.css';
import axios from 'axios';
export const Sublink=()=>{
    const [data,setData]=useState([]);
    const callAPI=async()=>{
       const resp=await axios.get(API_URL);
       setData(resp.data[0].meeting);
    }
    useEffect(
        ()=>{
            callAPI();
        },[]
    );
    return(
        <>
        <Container>
       <div id="link">
         {data}
         </div>
        </Container>
        </>
    );
}