import obviCardsImg from '../assets/images/obvicards.png'
import obviImg from '../assets/images/obvi.png'
import bulletProofImg from '../assets/images/bulletproof.png'
import boomImg from '../assets/images/boom.png'
import orbitBabyImg from '../assets/images/orbitbaby.png'

export default function SuccessStory() {
  return (
    <div className="successStory">
        <div className="container">
            <img src={obviCardsImg} alt="" />
            <div className="description">
                <h2>How <span>Obvi</span> Drives Profits with Hands-Off Postcard Campaigns</h2>
                <p>The 🚀 supplements brand wanted to offset high ad costs<br/>and reach dormant customers.They scored 1000%+ ROI's.</p>
                <div className="stats">
                    <div className="stat">
                        <h3>1468%</h3>
                        <p>POI</p>
                    </div>
                    <div className="stat">
                        <h3>8.59%</h3>
                        <p>Conversion Rate</p>
                    </div>
                    <div className="stat">
                        <h3>$73,457</h3>
                        <p>Sales Generated</p>
                    </div>
                </div>
                <button>READ CASE STUDY</button>
                <div className="brands">
                    <div className="brand">
                        <img src={obviImg} alt="" />
                    </div>
                    <div className="brand">
                        <img src={bulletProofImg} alt="" />
                    </div>
                    <div className="brand">
                        <img src={boomImg} alt="" />
                    </div>
                    <div className="brand">
                        <img src={orbitBabyImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
