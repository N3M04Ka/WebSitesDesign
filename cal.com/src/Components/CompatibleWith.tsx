import stripeImg from '../assets/images/stripe.png'
import webHooksImg from '../assets/images/webHooks.png'
import slackImg from '../assets/images/slack.png'
import appleCalendarImg from '../assets/images/appleCalendar.png'
import googleCalendarImg from '../assets/images/googleCalendar.png'
import zoomImg from '../assets/images/zoom.png'
import outlookImg from '../assets/images/outlook.png'
import { FaChevronRight } from "react-icons/fa6";
export default function CompatibleWith() {
	const photoes: string[] = [stripeImg, webHooksImg, slackImg, appleCalendarImg, googleCalendarImg, zoomImg, outlookImg];
	return (
		<section className="compatibleWith">
			<div className="container">
				<div className="center">
					<h2>Connect your favorite apps</h2>
					<p>Cal.com works with all apps already in your scheduling flow ensuring everything works perfectly together.</p>
					<button>EXPLORE ALL APPS<FaChevronRight className='arrow'/></button>
				</div>
				<div className="backgroundApps">
					{}
					<div className="row">
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
					</div>
					<div className="row">
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
					</div>
					<div className="row">
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
					</div>
					<div className="row">
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
						{photoes.map((el, id) => (
							<div className='element' key={id}><img src={el} alt="" /></div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
