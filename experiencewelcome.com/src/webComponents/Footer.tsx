import logoImg from '../assets/images/logo2.png'
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="top">
          <img src={logoImg} alt="" />
          <div className="column">
            <h3>Product</h3>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Book a demo</a>
          </div>
          <div className="column">
            <h3>Explore</h3>
            <a href="#">Events</a>
            <a href="#">Blog</a>
          </div>
          <div className="column">
            <h3>Company</h3>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="left">
            <a href="#">© 2022 Welcome. All right reserved.</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="right">
            <a href="#"><FaYoutube className='icon'/></a>
            <a href="#"><FaTwitter className='icon'/></a>
            <a href="#"><FaLinkedin className='icon'/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}