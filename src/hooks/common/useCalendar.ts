import { useState } from 'react';

const useCalendar = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const getDaysInMonth = (year: number, month: number) => {
		const startDate = new Date(year, month, 1);
		const endDate = new Date(year, month + 1, 0);
		const days = [];

		// Get the last days of the previous month
		const prevMonthLastDate = new Date(year, month, 0).getDate();
		for (let i = startDate.getDay() - 1; i >= 0; i--) {
			days.push({
				date: new Date(year, month - 1, prevMonthLastDate - i),
				isInCurrentMonth: false,
			});
		}

		// Get the days of the current month
		for (
			let date = startDate;
			date <= endDate;
			date.setDate(date.getDate() + 1)
		) {
			days.push({
				date: new Date(date),
				dayOfWeek: date.getDay(), // 0: Sunday, 1: Monday, ..., 6: Saturday
				isInCurrentMonth: true,
			});
		}

		// Get the first days of the next month
		const nextMonthFirstDate = new Date(year, month + 1, 1);
		for (let i = 1; days.length % 7 !== 0; i++) {
			days.push({
				date: new Date(nextMonthFirstDate.setDate(i)),
				isInCurrentMonth: false,
			});
		}

		return days;
	};

	const goToNextMonth = () => {
		setSelectedDate((prevDate) => {
			const newDate = new Date(prevDate);
			newDate.setMonth(newDate.getMonth() + 1);
			return newDate;
		});
	};

	const goToPreviousMonth = () => {
		setSelectedDate((prevDate) => {
			const newDate = new Date(prevDate);
			newDate.setMonth(newDate.getMonth() - 1);
			return newDate;
		});
	};

	const getCurrentMonth = () => {
		const currentYear = selectedDate.getFullYear();
		const currentMonth = selectedDate.getMonth();
		return getDaysInMonth(currentYear, currentMonth);
	};

	return {
		selectedDate,
		goToNextMonth,
		goToPreviousMonth,
		getCurrentMonth,
		// Other functions or values related to the calendar can be included here
	};
};

export default useCalendar;
