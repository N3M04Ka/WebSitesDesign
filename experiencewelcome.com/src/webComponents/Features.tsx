import photoBoothImg from '../assets/images/photobooth.png'
import stageKitImg from '../assets/images/stageKit.png'
import greenRoomImg from '../assets/images/greenRoom.jpg'
import { GoArrowRight } from "react-icons/go";
export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Powered by</h2>
        <h1>Welcome</h1>
        <h1>Studio</h1>
        <div className="layout">
          <div className="cardWide">
            <h2>Drag-n-drop Agenda Builder</h2>
            <p>Quickly rearrange your webinar’s sequence of actions and instantly generate an agenda that auto-updates as you move actions around.</p>
          </div>
          <div className="card">
            <h2>Brand customization</h2>
            <p>Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.</p>
            <img src={photoBoothImg} alt="" />
          </div>
          <div className="card">
            <h2>Stage Kit</h2>
            <p>Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.</p>
            <img src={stageKitImg} alt="" />
          </div>
          <div className="card">
            <h2>Green Room</h2>
            <p>Invite speakers to a private waiting room to meet and prep to go on stage.</p>
            <img src={greenRoomImg} alt="" />
          </div>
        </div>
        <button><span>See all features</span><GoArrowRight className='arrow'/></button>
      </div>
    </section>
  );
}