import twitter from "../img/twitter.svg";
import fcb from "../img/facebook.svg";

function Footer() {
  return (
    <div id="footer">
      <div>
        <p>About us</p>
        <p>Contact</p>
      </div>
      <div>
        <img src={twitter} alt=""/>
        <span>Twitter</span>
        <img src={fcb} alt=""/>
        <span>Facefook</span>
      </div>
    </div>
  );
}
export default Footer;
