import wholeFoodsImg from '../assets/images/wholefoods2.png'
import spotifyImg from '../assets/images/spotify.png'
import amazonImg from '../assets/images/amazon.png'
import netflixImg from '../assets/images/netflix.png'
import uberEatsImg from '../assets/images/ubereats.png'
import uberImg from '../assets/images/uber.png'
export default function Benefits() {
  return (
    <section className="benefits">
      <div className="left">
        <div className="container">
          <div className="text active">
            <h2>Earn 2% cash back on<br/>favorite brands</h2>
            <p>Earn 2% cash back on favorite brands, 1% cashback on<br/> all purchases, and a 2x cashback match in your first<br/> year! Get premium benefits and much more.</p>
          </div>
          <div className="text">
            <h2>Moving to the U.S.? No SSN required</h2>
            <p>Start building credit before you even enter the country. Sign up<br/>with your international address, passport & visa instead**.</p>
          </div>
          <div className="text">
            <h2>Get help from a real person</h2>
            <p>When you’ve got questions about your finances, get<br/>multilingual customer support anytime you need from<br/>direct in-app chat, email, phone, and our site FAQs.</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="container">
          <div className="leftColumn">
            <div aria-hidden className="group">
              <div className="brand">
                <img src={wholeFoodsImg} alt="" />
              </div>
              <div className="brand">
                <img src={spotifyImg} alt="" />
              </div>
              <div className="brand">
                <img src={amazonImg} alt="" />
              </div>
              <div className="brand">
                <img src={uberImg} alt="" />
              </div>
              <div className="brand">
                <img src={uberEatsImg} alt="" />
              </div>
              <div className="brand">
                <img src={netflixImg} alt="" />
              </div>
            </div>
            <div className="group">
              <div className="brand">
                <img src={wholeFoodsImg} alt="" />
              </div>
              <div className="brand">
                <img src={spotifyImg} alt="" />
              </div>
              <div className="brand">
                <img src={amazonImg} alt="" />
              </div>
              <div className="brand">
                <img src={uberImg} alt="" />
              </div>
              <div className="brand">
                <img src={uberEatsImg} alt="" />
              </div>
              <div className="brand">
                <img src={netflixImg} alt="" />
              </div>
            </div>
          </div>
          <div className="rightColumn">
            <div aria-hidden className="group">
              <div className="brand">
                <img src={netflixImg} alt="" />
              </div>
              <div className="brand">
                <img src={uberEatsImg} alt="" />
              </div>
              <div className="brand">
                <img src={uberImg} alt="" />
              </div>
              <div className="brand">
                <img src={amazonImg} alt="" />
              </div>
              <div className="brand">
                <img src={spotifyImg} alt="" />
              </div>
              <div className="brand">
                <img src={wholeFoodsImg} alt="" />
              </div>
            </div>
            <div className="group">
              <div className="brand">
                <img src={netflixImg} alt="" />
              </div>
              <div className="brand">
                <img src={uberEatsImg} alt="" />
              </div>
              <div className="brand">
                <img src={uberImg} alt="" />
              </div>
              <div className="brand">
                <img src={amazonImg} alt="" />
              </div>
              <div className="brand">
                <img src={spotifyImg} alt="" />
              </div>
              <div className="brand">
                <img src={wholeFoodsImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}