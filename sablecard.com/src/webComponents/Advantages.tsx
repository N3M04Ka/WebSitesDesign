import { BiSolidCreditCard } from "react-icons/bi";
import { RiCompass2Fill } from "react-icons/ri";
import { HiMiniTrophy } from "react-icons/hi2";
import { GoGlobe } from "react-icons/go";
import phoneImg from '../assets/images/phone.png'
import yahooImg from '../assets/images/yahoo.png'
import bloombergImg from '../assets/images/bloomberg.png'
import forbesImg from '../assets/images/pngfind.com-forbes-logo-png-387699.png';
import bussinesInsiderImg from '../assets/images/bussinessinsider.png'
export default function Advantages() {
  return (
    <section className="advantages">
      <div className="container">
        <div className="topText">
          <p>400,00 ACCOUNTS & COUNTING</p>
          <p>No hidden fees. No credit checks.</p>
          <p>No more barries to building credit.</p>
        </div>
        <div className="row">
          <div className="rowElement">
            <BiSolidCreditCard className="rowElementImg"/>
            <p>Get a secured credit<br/> card and back account<br/>in 5 minutes</p>
            <p>No credit history, credit check, or minimum deposit required.</p>
          </div>
          <div className="rowElement">
            <RiCompass2Fill className="rowElementImg"/>
            <p>Build your U.S. credit</p>
            <p>We believe in forming positive habits. Build your U.S. credit with Sable</p>
          </div>
        </div>
        <div className="row">
          <div className="rowElement">
            <HiMiniTrophy className="rowElementImg"/>
            <p>The only premium card for building credit.</p>
            <p>2% unlimited cash back on your favorite brands, 2X first year cash back match, premium benefits and more!</p>
          </div>
          <div className="rowElement">
            <GoGlobe className="rowElementImg"/>
            <p>Bank like a global citizen with Sable.</p>
            <p>Start building credit before you even enter the country. Non-U.S. citizens can apply with their passport and visa.</p>
            
          </div>
        </div>
        <img src={phoneImg} alt="" />
      </div>
      <div className="carousel">
        <div className="brands">
          <img src={yahooImg} alt="" className="brand" />
          <img src={bloombergImg} alt="" className="brand" />
          <img src={bussinesInsiderImg} alt="" className="brand" />
          <img src={forbesImg} alt="" className="brand" />
        </div>
        <div  aria-hidden className="brands">
          <img src={yahooImg} alt="" className="brand" />
          <img src={bloombergImg} alt="" className="brand" />
          <img src={bussinesInsiderImg} alt="" className="brand" />
          <img src={forbesImg} alt="" className="brand" />
        </div>
      </div>
    </section>
  );
}