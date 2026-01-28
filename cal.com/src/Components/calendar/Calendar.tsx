import img from '../../assets/images/image.png'
import { FiInfo } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoGlobe } from "react-icons/go";
import CalendarHolder from './CalendarHolder';
export default function Calendar() {
  return (
    <div className="calendar">
      <div className="left">
        <img src={img} alt="" />
        <p className="name">Rick Astley</p>
        <p className="text1">Get Rickrolled</p>
        <ol>
          <li>
            <FiInfo className='icon' /> 
            <p className="text2">Book me and I will never give you up. Cal will never let you down. Open Source will never run around and desert you.</p>
          </li>
          <li>
            <FiClock className='icon' /> 
            <p className="text2">30 min</p>
          </li>
          <li>
            <HiOutlineLocationMarker className='icon' /> 
            <p className="text2">Zoom</p>
          </li>
          <li>
            <GoGlobe className='icon' /> 
            <p className="text2">Europe / Dublin</p>
          </li>
        </ol>
      </div>
      <CalendarHolder/>
    </div>
  );
}