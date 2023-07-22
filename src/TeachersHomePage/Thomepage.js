import './Thome.css';
import { Container } from '../container/Contain';
import {Profile} from '../StudentHomePage/profilepic';
import { useState } from 'react';
import { Drop } from './Drop';
export const Thomepage=(props)=>{
 
  const routeChange = () =>{ 
    window.open("https://meet.google.com/");
  }
  var check=false;
  const [OpenModal,SetOpenModal]=useState(check);

  return(<>
  <div className='probox'>
    <Container>
        <Profile/>
        <h2>Name:</h2><h3>Orochimaru</h3>  
    </Container>
    </div>
    <div id='meetbox'>
    <Container>
        <button   onClick={routeChange}>Start meeting</button>
    </Container>
    <div id="mar">
    <Container >
        <button onClick={()=>{check=!check;SetOpenModal(check);}} >Select class</button>      
    </Container>
    </div>
    {OpenModal&&<Drop closeModal={SetOpenModal}/>}
    </div>
  </>
  );
  
}