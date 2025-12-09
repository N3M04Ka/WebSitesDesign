import card1Img from '../assets/images/card1.png'
import card2Img from '../assets/images/card2.png'
export default function CreditCards() {
  return (
    <section className="creditCards">
      <div className="card">
        <div className="container">
          <img src={card1Img} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="container">
          <h2>Get a back account &<br/> debit card <span>in five minutes.</span></h2>
          <img src={card2Img} alt="" />
        </div>
      </div>
    </section>
  );
}