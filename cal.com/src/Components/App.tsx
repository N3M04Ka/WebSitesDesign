import "../App.scss";
import "./calendar/calendar.scss";
import CompatibleWith from "./CompatibleWith";
import Header from "./Header";
import Introduction from "./Introduction";
import ScheduleMeetings from "./ScheduleMeetings";
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
		</>
	);
}

export default App;
