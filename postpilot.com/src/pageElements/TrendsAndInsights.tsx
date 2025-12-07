import img1 from '../assets/images/div.png'
import img2 from '../assets/images/div.jpg'
import img3 from '../assets/images/div (1).jpg';

export default function TrendsAndInsights() {
  return (
    <div className="trendsAndInsights">
        <div className="container">
            <h2>Latest trends & <span>insights</span></h2>
            <div className="cards">
                <div className="card">
                    <img src={img1} alt="" />
                    <p>3 Lost-Cost Campaings You Must Run to Win BFCM</p>
                </div>
                <div className="card">
                    <img src={img2} alt="" />
                    <p>Postcard Marketing: The Definitive Guide to high ROI [2022]</p>
                </div>
                <div className="card">
                    <img src={img3} alt="" />
                    <p>The Ultimate Guide to Thank You Notes for Ecommerce</p>
                </div>
            </div>
        </div>
    </div>
  )
}
