import { Container } from "../container/Contain";
import { Send } from "./Send";
import './Drop.css'


export const Drop=({closeModal})=>{
    
    return(
        <>
        <div className="modal">
         <Container>
           <div className="cov">
          <button onClick={()=>closeModal(false)}>x</button>
          <input type="text" placeholder="                 Copy the link here ! "></input>
          
          <Send name="Class-A"/>
          <Send name="Class-B"/>
          </div>
         </Container>                                   
         </div>
        </>
    );
}