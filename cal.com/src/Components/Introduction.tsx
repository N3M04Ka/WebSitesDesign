import Calendar from "./calendar/Calendar";

export default function Introduction() {
	return (
		<section className="introdaction">
			<div className="container">
				<Calendar />
				<div className="text">
					<div className="new">
						<div className="innerNew">NEW</div>
					</div>
					<p>
						Meet Cal.com, the event-juggling scheduler for
						<br /> everyone. Focus on meeting, not making meetings.
						<br /> Free for individuals.
					</p>
					<h1>Scheduling</h1>
					<h1>
						infrastructure for <span>everyone.</span>
					</h1>
				</div>
			</div>
		</section>
	);
}
