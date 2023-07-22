import './FrontPage.css';
import { FrontBox } from './FrontBox';
export const FrontPage = props => (
    <div id='container'>
       <Choose title='   Role'/>
       <FrontBox/>
    </div>
   );

   const Choose = props => (
    <h2 id="choice">{props.title}</h2>
  );