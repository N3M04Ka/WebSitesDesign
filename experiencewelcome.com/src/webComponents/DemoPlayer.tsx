import { IoMdPlay } from "react-icons/io";
import laptopImg from '../assets/images/laptop.png'
import LauchImg from '../assets/images/launchDay.png'
import videoImg from '../assets/images/video.jpg'
export default function DemoPlayer() {
  return (
    <section className="demoPlayer">
      <div className="buttons">
        <button>Demo</button>
        <button><IoMdPlay/>How it works</button>
      </div>
      <img src={laptopImg} alt="" />
      <img src={LauchImg} alt="" />
      <img src={videoImg} alt="" />
    </section>
  );
}