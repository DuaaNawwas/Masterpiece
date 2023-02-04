import React from "react";

export default function StatCard(props) {
	return (
		<div className="w-full p-2 lg:w-1/4 md:w-1/2 ">
			<div className="group flex flex-col px-6 py-10 overflow-hidden bg-white bg-gradient-to-br from-lemonSh via-darkGreen to-darkGreen/80 rounded-xl  duration-300 shadow-2xl group">
				<div className="flex flex-row justify-between items-center">
					<div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
						{props.icon}
						{/* <HiUser size="20" className="group-text-white" /> */}
					</div>
				</div>
				<h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mt-5 text-gray-50">
					{props.number}
				</h1>
				<div className="flex flex-row justify-between text-gray-200">
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	);
}
