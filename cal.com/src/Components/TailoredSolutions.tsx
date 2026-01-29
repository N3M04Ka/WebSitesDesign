import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import img1 from '../assets/images/image (1).png'
import img2 from '../assets/images/image (2).png'
import cellsImg from '../assets/images/cells.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function TailoredSolutions() {
	const [activeB, setActiveB] = useState<number>(0);
	function handleClick(idx: number): void{
		if (activeB == idx)
			return;
		setActiveB(idx);
	}
	return (
		<section className="tailoredSolutions">
			<div className="container">
				<img src={cellsImg} alt="" />
				<h2>Sheduling that adapts<br /> to any business</h2>
				<div className="block">
					<div className="buttons">
						<button className={activeB==0?"buttonIsActive":""} onClick={()=>handleClick(0)}><p>DOCTORS</p> <FaArrowRight/> <p>PARIENTS</p></button>
						<button className={activeB==1?"buttonIsActive":""} onClick={()=>handleClick(1)}><p>COMPANIES</p> <FaArrowRight/> <p>CANDIDATES</p></button>
						<button className={activeB==2?"buttonIsActive":""} onClick={()=>handleClick(2)}><p>TEACHERS</p> <FaArrowRight/> <p>STUDENTS</p></button>
						<button className={activeB==3?"buttonIsActive":""} onClick={()=>handleClick(3)}><p>EXPERTS</p> <FaArrowRight/> <p>FELLOWS</p></button>
					</div>
					<div className="textBlock">
						<div className="left">
							<div className="comment">
								<img src={img1} alt="" />
								<p className="name">Julian Erics, MD</p>
								<p className="commentText">Licensed therapist with<br/> 10 years of experience.</p>
							</div>
							<div className="comment">
								<img src={img2} alt="" />
								<p className="name">Lawrence Hunter, MD</p>
								<p className="commentText">Cardiologists from California focusing<br/> on fitness and performance</p>
							</div>
						</div>
						<div className="right">
							<p className="label">Telemedicine</p>
							<p className="text">Build Telemedicine to allow patients to book appointments with doctors and therapists.</p>
						</div>
					</div>
					<button className="learnMore">
						<p>LEARN MORE</p>
						<MdOutlineKeyboardArrowRight className="arrow"/>
					</button>
				</div>
			</div>
		</section>
	);
}
