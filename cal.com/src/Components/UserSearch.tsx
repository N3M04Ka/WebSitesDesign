import { MdKeyboardArrowRight } from "react-icons/md";
export default function UserSearch() {
	return (
		<section className="userSearch">
			<div className="container">
				<div className="inputPanel">
					<div className="left">cal.com/</div>
					<input type="text" />
				</div>
				<button>
					CLAIM USERNAME
					<MdKeyboardArrowRight className="arrow" />
				</button>
			</div>
		</section>
	);
}
