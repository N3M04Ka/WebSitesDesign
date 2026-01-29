import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import cells2Img from '../assets/images/cells2.png'
export default function BookOthers() {
	return (
		<section className="bookOthers">
			<div className="container">
				<h2>Let people book when it<br />works for both of you</h2>
				<img src={cells2Img} alt="" />
				<div>
					<div className="inputPanel">
						<div className="left">
							<p>cal.com/</p>
						</div>
						<input type="text" placeholder="RickAstley" />
					</div>
					<button><p>CLAIM USERNAME</p> <MdOutlineKeyboardArrowRight className="arrow"/></button>
				</div>
			</div>
		</section>
	);
}
