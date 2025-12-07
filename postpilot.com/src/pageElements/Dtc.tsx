import RunGumImg from '../assets/images/run the day.png'
import RunGumT from '../assets/images/rungum.png'
import BeardImg from '../assets/images/heydouglas.png'
import BeardT from '../assets/images/beardbrand.png'
import Provip20Img from '../assets/images/provip20.png'
import Promix from '../assets/images/promix.png'
import WeMeesYouImg from '../assets/images/we miss you.png'
import scotchImg from '../assets/images/scotchporter.png'

export default function Dtc() {
  return (
    <div className="dtc">
        <div className="container">
            <h2 className="dtcH2">
            Trusted by thousands<br/> of top DTC <span>brands</span>
            </h2>
            <div className="dtcBrands">
                <div className="dtcBrand">
                    <img src={RunGumImg} alt="" />
                    <img src={RunGumT} alt="" />
                </div>
                <div className="dtcBrand">
                    <img src={BeardImg} alt="" />
                    <img src={BeardT} alt="" />
                </div>
                <div className="dtcBrand">
                    <img src={Provip20Img} alt="" />
                    <img src={Promix} alt="" />
                </div>
                <div className="dtcBrand">
                    <img src={WeMeesYouImg} alt="" />
                    <img src={scotchImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
