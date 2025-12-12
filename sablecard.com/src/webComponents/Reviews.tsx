import commasImg from '../assets/images/commas.png'
export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <h2>4.8</h2>
        <div className="carousel">
          <div className="group">
            <div className="item">
              <img src={commasImg} alt="" />
              <div className="right">
                <h3>Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable’s customer service helped me answer all the questions that I needed to switch.</h3>
                <h4>K Oiwake</h4>
              </div>
            </div>
            <div className="item">
              <img src={commasImg} alt="" />
              <div className="right">
                <h3>The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!</h3>
                <h4>E Berhe</h4>
              </div>
            </div>
            <div className="item">
              <img src={commasImg} alt="" />
              <div className="right">
                <h3>Truly a seamless experience. I was nervous about moving my accounts away from a big bank, but the support team walked me through every step.</h3>
                <h4>M. Sterling</h4>
              </div>
            </div>
            <div className="item">
              <img src={commasImg} alt="" />
              <div className="right">
                <h3>"Best decision I’ve made for my finances. The customer service is incredibly responsive and actually gave me clear answers instead of automated scripts. </h3>
                <h4>J. Aris</h4>
              </div>
            </div>
          </div>
          <div aria-hidden className="group">
            <div className="item">
              <img src={commasImg} alt="" />
              <div className="right">
                <h3>Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable’s customer service helped me answer all the questions that I needed to switch.</h3>
                <h4>K Oiwake</h4>
              </div>
            </div>
            <div className="item">
              <img src={commasImg} alt="" />
              <div className="right">
                <h3>The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!</h3>
                <h4>E Berhe</h4>
              </div>
            </div>
            <div className="item">
              <img src={commasImg} alt="" />
              <div className="right">
                <h3>Truly a seamless experience. I was nervous about moving my accounts away from a big bank, but the support team walked me through every step.</h3>
                <h4>M. Sterling</h4>
              </div>
            </div>
            <div className="item">
              <img src={commasImg} alt="" />
              <div className="right">
                <h3>"Best decision I’ve made for my finances. The customer service is incredibly responsive and actually gave me clear answers instead of automated scripts. </h3>
                <h4>J. Aris</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}