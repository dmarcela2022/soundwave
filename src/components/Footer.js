import Grid from '@mui/material';
import twitter from '../img/twitter.svg';
import fcb from '../img/facebook.svg';

function Footer() {
  return (

    <div>
        <a href="#">About us</a>
        <a href="#">Contact</a>
        <img src={twitter}/>
        <img src={fcb}/>
    </div>
    
  )
}
export default Footer