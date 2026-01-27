import img1 from "../assets/images/image11.png";
import img2 from "../assets/images/image12.png";
import img3 from "../assets/images/image13.png";
import img4 from "../assets/images/image14.png";
import img5 from "../assets/images/image15.png";
import img6 from "../assets/images/image16.png";
export default function UseCases() {
	return (
		<section className="useCases">
			<div className="container">
				<h2>
					Everything you need in
					<br /> a scheduling app
				</h2>
				<div className="table">
					<div className="row">
						<div className="element">
							<div className="top">
								<div className="number">
									<p>01</p>
								</div>
								<img src={img1} alt="" />
							</div>
							<div className="bottom">
								<p className="left">
									A tailored link ready for every scenario
								</p>
								<p className="right">
									Set availability, location, duration and
									more on a per-link basis. Send bookings to
									different calendars or set a default.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="element">
							<div className="top">
								<div className="number">
									<p>02</p>
								</div>
								<img src={img2} alt="" />
							</div>
							<div className="bottom">
								<p className="left">
									Connect all
									<br /> your calendars
								</p>
								<p className="right">
									Cal.com checks for conflicts across all of
									your calendars and only offers times that
									are open. Never get double booked again.
								</p>
							</div>
						</div>
						<div className="element">
							<div className="top">
								<div className="number">
									<p>03</p>
								</div>
								<img src={img3} alt="" />
							</div>
							<div className="bottom">
								<p className="left">
									Workflow
									<br />
									automation
								</p>
								<p className="right">
									Cal.com enables you to build processes
									around your events. Notifications, reminders
									and follow ups are automatically taken care
									of.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="element">
							<div className="top">
								<div className="number">
									<p>04</p>
								</div>
								<img src={img4} alt="" />
							</div>
							<div className="bottom">
								<p className="left">Scheduling for your team</p>
								<p className="right">
									Round-Robin scheduling ensures even
									distribution of calls across your team.
									Collective availability makes it easy to
									book your team when everyone is available..
								</p>
							</div>
						</div>
						<div className="element">
							<div className="top">
								<div className="number">
									<p>05</p>
								</div>
								<img src={img5} alt="" />
							</div>
							<div className="bottom">
								<p className="left">
									Route bookers to the right person
								</p>
								<p className="right">
									Ensure every booker is connected to the
									right person with Routing Forms. Ask
									screening questions and automatically
									connect bookers to the right person, event
									or even to a link.
								</p>
							</div>
						</div>
						<div className="element">
							<div className="top">
								<div className="number">
									<p>06</p>
								</div>
								<img src={img6} alt="" />
							</div>
							<div className="bottom">
								<p className="left">Avoid meeting overload</p>
								<p className="right">
									Limit people from overbooking you on a
									weekly or daily basis. Put breathing room
									between meetings with buffers either side
									and prevent surprises with minimum notice
									periods.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="pros">
					<ul>
						<li>Pay to meet</li>
						<li>Embed it anywhere</li>
						<li>Opt-in bookings</li>
						<li>Simple rescheduling</li>
						<li>Available in over 26 laguages</li>
						<li>Hashed booking links</li>
					</ul>
					<ul>
						<li>Pay to meet</li>
						<li>Embed it anywhere</li>
						<li>Opt-in bookings</li>
						<li>Simple rescheduling</li>
						<li>Available in over 26 laguages</li>
						<li>Hashed booking links</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
