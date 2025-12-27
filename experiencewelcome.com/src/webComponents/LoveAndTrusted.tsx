import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import saleForceImg from '../assets/images/saleforce.png'
import drilleImg from '../assets/images/drilllle.png'
import bitWiseImg from '../assets/images/bitwise.png'
import firstPersonImg from '../assets/images/blondDark.jpg'
import secondPersonImg from '../assets/images/plusSize.jpg'
import thirdPersonImg from '../assets/images/blond.png'
import fourthPersonImg from '../assets/images/fourthP.png'
import fivethPersonImg from '../assets/images/fivethP.png'
import sixthPersonImg from '../assets/images/sixthP.png'
import squareImg from '../assets/images/square.png'
import adobeImg from '../assets/images/adobe.png'
import zendeskImg from '../assets/images/zendesk.png'
export default function LoveAndTrusted() {
  const [moveIdx, setMoveIdx] = React.useState<number>(0);
  function moveLeft(){
    setMoveIdx(p => Math.min(0,(p + 1)%5));
  }
  function moveRight(){
    setMoveIdx(p => Math.min(0,(p - 1)%5));
  }
  return (
    <section className="loveAndTrusted">
      <div className="container">
        <div className="block">
          <h2>Loved & trusted</h2>
          <div className="buttons">
            <button className="left" onClick={moveLeft}><IoMdArrowBack/></button>
            <button className="right" onClick={moveRight}><IoMdArrowForward/></button>
          </div>
        </div>
        <div className="cards">
          <div className="group" style={{transform:`translateX(${moveIdx*560}px)`}}>
            <div className="card">
              <p>"We chose Welcome because it’s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement."</p>
              <div className="personData">
                <img src={firstPersonImg} alt="" />
                <div className="info">
                  <div className="name">Ally Masi</div>
                  <div className="job">Director of Industries Events Marketing<br/>Salesforce</div>
                </div>
              </div>
              <img src={saleForceImg} alt="" className="companyLogo" />
            </div>
            <div className="card">
              <p>“Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. <span>With just one platform, we can do everything we want.</span>”</p>
              <div className="personData">
                <img src={secondPersonImg} alt="" />
                <div className="info">
                  <div className="name">Talisha Brantley</div>
                  <div className="job">VP of Events<br/>Bitwise</div>
                </div>
              </div>
              <img src={bitWiseImg} alt="" className="companyLogo" />
            </div>
            <div className="card">
              <p>"The Welcome experience has been 10 out of 10. When our sponsors like Facebook are considering sponsoring our events, <span>Welcome is our "secret weapon</span>"</p>
              <div className="personData">
                <img src={thirdPersonImg} alt="" />
                <div className="info">
                  <div className="name">Allen Cortney</div>
                  <div className="job">CFO of<br/>Nasdac</div>
                </div>
              </div>
              <img src={drilleImg} alt="" className="companyLogo" />
            </div>
            <div className="card">
              <p>“We used to spend thousands on production agencies just to make our town halls look professional. We finally have a tool that makes our brand look <span>as good virtually as it does in person.</span>”</p>
              <div className="personData">
                <img src={fourthPersonImg} alt="" />
                <div className="info">
                  <div className="name">Monica Geller</div>
                  <div className="job">CMO of<br/> Adobe</div>
                </div>
              </div>
              <img src={adobeImg} alt="" className="companyLogo" />
            </div>
            <div className="card">
              <p>“It handles the heavy lifting so we can focus on our speakers. It’s the first time <span>I’ve actually been able to enjoy my own event while running it.</span>”</p>
              <div className="personData">
                <img src={fivethPersonImg} alt="" />
                <div className="info">
                  <div className="name">Tom Allen</div>
                  <div className="job">Product Manager<br/>at Square</div>
                </div>
              </div>
              <img src={squareImg} alt="" className="companyLogo" />
            </div>
            <div className="card">
              <p>"The chat is alive and people are fighting to come on stage. <span>It turned our passive webinars into active, vibrant communities.</span> "</p>
              <div className="personData">
                <img src={sixthPersonImg} alt="" />
                <div className="info">
                  <div className="name">Marie Dux</div>
                  <div className="job">Founder of<br/>Zendesk</div>
                </div>
              </div>
              <img src={zendeskImg} alt="" className="companyLogo" style={{width:"80px"}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}