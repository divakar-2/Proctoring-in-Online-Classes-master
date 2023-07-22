import { Container } from "../container/Contain";
import NewSub from "./NewSub";
import './Sdrop.css';
const newval=(event)=>{
    <NewSub subname={event}/>
    console.log(event);
}
export const Sdrop=({closeModal})=>{
    return(
        <>
        <div className="modal">
         <Container>
           <div className="cov">
          <button onClick={()=>closeModal(false)}>x</button>
          <input type="text" placeholder="    Enter the Subject code "></input>
          <button className="se" onChange={()=>newval('dbb')}>Add</button>
          </div>
         </Container>
         </div>
        </>
    );
}