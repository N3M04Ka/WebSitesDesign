import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { lastDayOfMonth } from "date-fns/fp";
const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export default function CalendarHolder() {
	const [curDate, setCurDate] = useState(new Date());
	function setPrevMonth(): void{
		let month: number = curDate.getMonth(), year: number = curDate.getFullYear();
		if (month == 0) {
			year--;
			month = 12;
		}
		month--;
		setCurDate(new Date(year, month, 1));
	}
	function setNextMonth(): void{
		let month: number = curDate.getMonth(), year: number = curDate.getFullYear();
		if (month ==11) {
			year++;
			month = -1;
		}
		month++;
		setCurDate(new Date(year, month, 1));
	}
	function fillLayout(): string[]{
		const arr: string[] = [];
		const day = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getDay();
		for (let i = 0; i < day; i++)
			arr.push("");
		for (let i = 1, n = lastDayOfMonth(curDate).getDate(); i <= n; i++)
			arr.push(i.toString());
		return arr;
	}
	function getColor(	el:string): string{
		// eslint-disable-next-line react-hooks/purity
		return el!=""&&Math.floor(Math.random() * 5) == 0 ? "#e1e1e1" : "transparent";
	}
	return (
		<div className="calendarHolder">
			<div className="topRow">
				<div className="left">
					<p><span>{months[curDate.getMonth()]}</span> {curDate.getFullYear()}</p>
				</div>
				<div className="buttons">
					<button onClick={setPrevMonth}><FaChevronLeft/></button>
					<button onClick={setNextMonth}><FaChevronRight/></button>
				</div>
			</div>
			<div className="layout">
				{daysOfWeek.map((el, id) => (
					<div className="label" key={id}>{el}</div>
				))}
				{fillLayout().map((el, id) => (
					<div className="dayUnit" key={id} style={{backgroundColor:getColor(el)}}>{el}</div>
				))}
			</div>
		</div>
	);
}
