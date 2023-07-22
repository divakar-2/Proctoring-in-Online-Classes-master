import './FrontPage.css';
import { Button } from 'react-bootstrap';
import { useState} from 'react';
var data=0;
export const FrontBox = props => {
    const [go,setGo]=useState(0);
    return(
        <>
    <div id='button' className='row'>
    <div id='box'>
    <Button onClick={()=>{setGo(1);data=1;}}>Teacher</Button>
    </div>
    <div id='box'>
    <Button onClick={()=>{setGo(2);data=2;}} >Student</Button>
    </div>
    </div>
    <div className='log'>
    {(data===1||data===2)&&<Login data={go}/>}
    </div>
   </>
   
   );
}














export const Login =(props)=>{ 
  
    return(
    <div id="loginform">
        <FormHeader title="Login" />
        <Form  data={props.data}/>
      </div>
  );
  }
  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
  );
  
  export const Form = (props,{data})=> {
    return(
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text"/>
      <FormInput description="Email" placeholder="Enter your Email" type="email"/>
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormButton title="Log in" data={props.data}/>
    </div>
   );
    }
  
    
   const check=()=>{
    if(data===1)window.open("teacher-homepage");
    if(data===2) window.open("student-homepage");
}
  
  
  const FormButton = props => (
  <div id="button" className="row">
    <button onClick={check}>{props.title}</button>
  
  </div>
  );
  
  const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} value={props.value}/>
  </div>  
  );