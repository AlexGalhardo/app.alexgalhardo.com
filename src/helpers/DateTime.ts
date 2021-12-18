/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * ./helpers/DateTime.js
 */

class DateTime {
	static getDateTime(timestamp) {
		const date = new Date(timestamp * 1000).toLocaleDateString(
			process.env.LOCALE_DATE_TIME
		);
		const time = new Date(timestamp * 1000).toLocaleTimeString(
			process.env.LOCALE_DATE_TIME
		);
		return `${date} ${time}`;
	}

	static getNow() {
		const date = new Date().toLocaleDateString(
			process.env.LOCALE_DATE_TIME
		);
		const time = new Date().toLocaleTimeString(
			process.env.LOCALE_DATE_TIME
		);
		return `${date} ${time}`;
	}
}

export default DateTime;
