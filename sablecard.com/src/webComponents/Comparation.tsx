import card1 from '../assets/images/card3.png'
import card2 from '../assets/images/card4.png'
import { FaCheck } from "react-icons/fa6";
export default function Comparation() {
  return (
    <section className="comparation">
      <div className="container">
        <h2>Compare Sable · Compare Sable</h2>
        <div className="table">
          <div className="item"></div>
          <div className="item">
            <img src={card1} alt="" />
            <h3>Sable Secured<br/> Cderid & Debit Card</h3>
          </div>
          <div className="item">
            <img src={card2} alt="" />
            <h3>Sable Debit <br/> Card</h3>
          </div>
          <div className="item"><h4>No monthly fees or minimum balance</h4></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><h4>Deposits FDIC insured up to $250,000</h4></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><h4>Rewards, cash back & card perks</h4></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><h4>Send checks & transfer money for free</h4></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><h4>Build credit history from Day 1</h4></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><h4>No credit check required for sign up</h4></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><FaCheck/></div>
          <div className="item"><h4>Cost per year</h4></div>
          <div className="item"><h5>$0 <span>/year</span></h5></div>
          <div className="item"><h5>$0 <span>/year</span></h5></div>
          <div className="item"></div>
          <div className="item"><button>GET CREDIT & DEBIT</button></div>
          <div className="item"><button>GET DEBIT</button></div>
        </div>
      </div>
    </section>
  );
}