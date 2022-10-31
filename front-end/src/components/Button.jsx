import React from "react";

export default function Button(props) {
	return (
		<a
			href="/"
			className={`inline-flex items-center justify-center py-2 ${props.padding} ${props.textColor} ${props.bgColor} font-medium  rounded shadow-md ${props.hoverColor} hover:drop-shadow-lg focus:shadow-outline focus:outline-none tracking-wide transition duration-200`}
			aria-label={props.text}
			title={props.text}
		>
			{props.text}
		</a>
	);
}

Button.defaultProps = {
	padding: "px-5",
	textColor: "text-main",
};
