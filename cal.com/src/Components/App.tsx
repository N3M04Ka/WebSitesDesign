import "../App.scss";
import BookOthers from "./BookOthers";
import "./calendar/calendar.scss";
import CommentsSlider from "./CommentsSlider";
import CompatibleWith from "./CompatibleWith";
import Footer from "./Footer";
import Header from "./Header";
import Introduction from "./Introduction";
import Reviews from "./Reviews";
import ScheduleMeetings from "./ScheduleMeetings";
import TailoredSolutions from "./TailoredSolutions";
import UseCases from "./UseCases";
import UserSearch from "./UserSearch";

function App() {
	return (
		<>
			<Header />
			<Introduction />
			<UserSearch />
			<ScheduleMeetings />
			<UseCases />
			<CompatibleWith />
      <TailoredSolutions />
      <CommentsSlider />
			<Reviews/>
			<BookOthers />
			<Footer/>
		</>
	);
}

export default App;
