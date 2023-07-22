import './Shome.css';
import { Container } from '../container/Contain';
import {Profile} from './profilepic';
import { Sdrop } from './Sdrop';
import { useState } from 'react';
import { SubBut } from './SubBut';
import NewSub from './NewSub';

const sub=[{id:'e1',subname:'Operating System'},{id:'e2',subname:'DAA'},{id:'e3',subname:'IOT'}];


export const Shomepage=(props)=>{
  const[Val,Setval]=useState(sub);
  var close=false;
  const [OpenModal,SetOpenModal]=useState(close);
  const change=(event)=>{
    Setval(...Val,event);
  }
  <NewSub set={change}/>
  return(<>
  <div className='con'>
  <div className='probox'>
  <Container>
  <Profile 
    />
  <h2>Name:</h2><h3>Sasuke Uchiha</h3>   

  </Container>
  {()=>Setval(...Val)}
  </div>
  <div className='butto'><button onClick={()=>{close=!close;SetOpenModal(close);}}>+</button></div>
  <div className='subbox'>
   {
    Val.map((item)=>{
        return <SubBut key={item.id} subname={item.subname} />
    })
   }
   
  </div>
  {OpenModal&&<Sdrop closeModal={SetOpenModal}/>}
  </div>
  </>);
}