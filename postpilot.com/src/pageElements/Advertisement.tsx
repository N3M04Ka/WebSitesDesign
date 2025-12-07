import star from '../assets/images/star.png'
import snax from '../assets/images/snax.png'
import ad180 from '../assets/images/180daywin-back.png'

export default function Advertisement() {
  return (
    <div className="advertisement">
        <div className="container">
            <div className="adText">
                <p className='first'>Meet yout <br/><span>favorite</span> new (old) marketing channel.</p>
                <p className="second">Remarkable results. Easier than email. Postcart marketing <br/> reinvented for modern ecommerce</p>
                <div className="adBottom">
                    <button className="adButton">
                        TRY IT RISK-FREE
                    </button>
                    <div className="rating">
                        <div className="stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <span>5.0 Shopify Rating</span>
                    </div>
                </div>
            </div>
        </div>
        <img src={ad180} alt="" className='ad180'/>
        <img src={snax} alt="" className='snax'/>
    </div>
  )
}
