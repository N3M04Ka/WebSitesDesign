import img from '../assets/images/span (1).jpg'
import img1 from '../assets/images/purpuleGraph.png'
import img2 from '../assets/images/saleforce.png'
import img3 from '../assets/images/orangeGraph.png'
export default function DataIntegration() {
  return (
    <div className="dataIntegration">
      <div className="container">
        <div className="partners">
          <div className="column">
            <div className="partner">
              <p>Custom<br/>Integration</p>
            </div>
            <div className="partner">
              <img src={img1} alt="" style={{"height":"62px"}}/>
            </div>
            <div className="partner">
              <img src={img2} alt="" style={{"height":"62px"}}/>
            </div>
          </div>
          <div className="column">
            <div className="partner">
              <p style={{'fontSize':"30px"}}>pardot</p>
            </div>
            <div className="partner">
              <img src={img3} alt="" style={{"height":"54px"}}/>
            </div>
            <div className="partner">
              <p>Custom<br/>Integration</p>
            </div>
          </div>
        </div>
        <div className="text">
          <h2>Integrate</h2>
          <div>
            <img src={img} alt="" />
            <h2>your data</h2>
          </div>
          <p>Leverage your existing marketing platforms and sync<br/> the data seamlessly</p>
        </div>
      </div>
    </div>
  );
}