import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="topFooter">
          <div className="left">
            <div>
              <a href="#">Sable Credit</a>
              <a href="#"><h3>Sable ONE Credit</h3></a>
              <a href="#"><h3>Credit Score <span>Comming Soon</span></h3></a>
            </div>
            <a href="#">Sable Debit</a>
            <a href="#">App</a>
            <a href="#">Learn</a>
            <div>
              <a href="#"><h3>FAQ</h3></a>
              <a href="#"><h3>About Sable</h3></a>
            </div>
          </div>
          <div className="right">
            <div className="contacts">
              <h3>Contact</h3>
              <h4>Email: help@sablecard.com</h4>
              <h4>Location: New York, NY</h4>
            </div>
            <h2>Sable.</h2>
            <div className="bottom">
              <div className="links">
                <a href="#"><FaInstagram size={30}/></a>
                <a href="#"><FaTwitter size={30}/></a>
                <a href="#"><FaFacebookSquare size={30}/></a>
                <a href="#"><FaYoutube size={30}/></a>
                <a href="#"><AiFillTikTok size={30}/></a>
              </div>
              <span>© Sable Money Inc, all rights reserved.</span>
            </div>
          </div>
        </div>
        <div className="bottomFooter">
          <span>Privacy policy | Terms and conditions</span>
          <span>*Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by Mastercard International Inc.<br/>
          Sable account is FDIC-insured up to $250,000 per depositor through Coastal Community Bank, Member FDIC.<br/>
          **If you are not a U.S. citizen, you can apply with your passport and U.S. Visa. Please note: you must submit an SSN once you receive one. If you are a U.S. citizen, SSN is required to open a bank account.<br/>
          *** Double cashback bonus (through 12/2022)</span>
          <div>
            <span>Please see www.sablecard.com/terms-and-conditions#creditrnb for terms and conditions.<br/> Some exclusions apply.</span>
            <span>Please see www.sablecard.com/terms-and-conditions for terms and conditions.</span>
            <span>This benefit is provided by MasterCard. Benefits are subject to terms, conditions<br/> and limitations, including limitations on the amount of coverage. Please see the terms<br/> and conditions.</span>
            <span>Sable estimated annual value</span>
            <span>Sable product comparisons</span>
          </div>
          <span>† Sable Remittance Best Rate Guarantee Terms</span>
        </div>
      </div>
    </footer>
  );
}