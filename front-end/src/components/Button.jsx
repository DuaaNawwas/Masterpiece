import React from "react";

export default function Button(props) {
	return (
		<button
			className={`inline-flex items-center justify-center py-2 ${props.padding} ${props.textColor} ${props.bgColor} ${props.style} font-medium  rounded shadow-md ${props.hoverColor} hover:drop-shadow-lg focus:shadow-outline focus:outline-none tracking-wide transition duration-200`}
			aria-label={props.text}
			title={props.text}
			type={props.type}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
}

Button.defaultProps = {
	padding: "px-5",
	textColor: "text-main",
	style: "",
	type: "button",
};
