import React from 'react'
import klaviyoImg from '../assets/images/klavio.png'
import abandonedImg from '../assets/images/abandonedCartCampaign.png'
import statsImg from '../assets/images/stats.png'
import longShotImg from '../assets/images/longshot.png'
import poststampImg from '../assets/images/poststamp.png'
import designImg from '../assets/images/Design.png'
type Props = {}

export default function CardsSection({}: Props) {
  return (
    <div className="cardsSection">
        <div className="container">
            <h2>Everything your brand needs to<br/> <span>make your brand unforgettable</span></h2>
            <div className="cards">
                <div className="card">
                    <img src={klaviyoImg} alt="" />
                    <h3>Plug-and-play with<br/> your stack</h3>
                    <p>Native integrations provide seamless<br/>segmentation, automation & tracking. No<br/> clunky spreadsheets</p>
                </div>
                <div className="card">
                    <img src={abandonedImg} alt="" />
                    <h3>Run campaigns<br/> on autopilot</h3>
                    <p>Ink profits while you sleep: Just set it and<br/> forget it.</p>
                </div>
                <div className="card">
                    <img src={statsImg} alt="" />
                    <h3>Real time ROI cashboard</h3>
                    <p>Track perfomance of every postcard by<br/>customer of discount code. Your CFO will<br/> love it.</p>
                </div>
                <div className="card">
                    <img src={longShotImg} alt="" />
                    <h3>Deliver WOW with *real*<br/>handwriting cards</h3>
                    <p>Our proprietary robots use real pens and<br/>ink for an unforgettable VIP touch.</p>
                </div>
                <div className="card">
                    <img src={poststampImg} alt="" />
                    <h3>Predictable pricing</h3>
                    <p>Unlike CPCs, postage rates don't change<br/>based on competition or who you're<br/> targeting.</p>
                </div>
                <div className="card">
                    <img src={designImg} alt="" />
                    <h3>Complimentary<br/> concierge service</h3>
                    <p>DTC is in our DNA. Our props will build your<br/>strategy and customs designs using battle-<br/> tested best practices.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
