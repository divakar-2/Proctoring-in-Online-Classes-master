import './Contain.css';
export const Container=props=>{
    return(
     <div className="card">
         {props.children}
     </div>
    );
}