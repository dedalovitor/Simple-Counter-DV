import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//include images into your bundle

//create your first component

const Home = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((x) => x + 1);
			console.log(timer);
		}, 1000);

		return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
	}, []);

	return (
		<div className="p-5 bg-dark container">
			<div className="d-flex flex-row justify-content-center">
				<div className="clock text-white">
					<i
						className="fa-regular fa-clock fa-spin p-2">
					</i>
				</div>
				<div className="four text-white p-2 fs-1">{Math.floor(timer / 1000) % 10}</div>
				<div className="three text-white p-2 fs-1">{Math.floor(timer / 100) % 10}</div>
				<div className="two text-white p-2 fs-1">{Math.floor(timer / 10) % 10}</div>
				<div className="one text-white p-2 fs-1">{Math.floor(timer / 1) % 10}</div>
			</div>
		</div>
	);
};

export default Home;