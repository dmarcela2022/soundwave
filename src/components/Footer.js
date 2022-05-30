import Grid from "@mui/material";
import twitter from "../img/twitter.svg";
import fcb from "../img/facebook.svg";

function Footer() {
  return (
    <div id="footer">
      <div>
        <a>About us</a>
        <a>Contact</a>
      </div>
      <div>
        <img src={twitter}/><span>Twitter</span>
        <img src={fcb}/><span>Facefook</span>
      </div>
    </div>
  );
}
export default Footer;
