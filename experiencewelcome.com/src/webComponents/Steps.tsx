import { MdOutlineArrowOutward } from "react-icons/md";
import Img1 from '../assets/images/div3.jpg'
import Img2 from '../assets/images/div4.png'
import Img3 from '../assets/images/div8.png'
export default function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <div className="info">
          <h2>How it works</h2>
          <div className="otherInfo">
            <p>Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it’s all here.</p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="step">
          <div className="text">
            <h3>Step 1</h3>
            <h2>Create <MdOutlineArrowOutward className="arrow"/></h2>
            <p>Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.</p>
          </div>
          <img src={Img1} alt="" />
        </div>
        <div className="step">
          <div className="text">
            <h3>Step 2</h3>
            <h2>Engage <MdOutlineArrowOutward/></h2>
            <p>Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants.</p>
          </div>
          <img src={Img2} alt="" />
        </div>
        <div className="step">
          <div className="text">
            <h3>Step 3</h3>
            <h2>Analyze <MdOutlineArrowOutward/></h2>
            <p>Track the success of your events with deep insights and analytics measured across the entire attendee experience.</p>
          </div>
          <img src={Img3} alt="" />
        </div>
      </div>
    </section>
  );
}