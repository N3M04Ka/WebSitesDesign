import pawImg from '../assets/images/paw.png'
import { IoMdStar } from "react-icons/io";

export default function TryOutSection() {
  return (
    <div className="tryoutsection">
        <div className="container">
            <div className="info">
                <h2>Try PostPilot Risk-Free</h2>
                <p>No contracts. No commitments. Guaranteed results.*</p>
                <div className="interaction">
                    <button>GET STARTED</button>
                    <div>
                        <div className="stars">
                            <IoMdStar/>
                            <IoMdStar/>
                            <IoMdStar/>
                            <IoMdStar/>
                            <IoMdStar/>
                        </div>
                        <p>5.0 Shopify Rating</p>
                    </div>
                </div>
                <p>* for qualified  brands with over $1m annual Shopify revenue.</p>
            </div>
            <img src={pawImg} alt="" />
        </div>
    </div>
  )
}
