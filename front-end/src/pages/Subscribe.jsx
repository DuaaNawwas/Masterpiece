import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Steps from "../components/subscribe/Steps";
import Details from "../components/subscribe/Details";
import Payment from "../components/subscribe/Payment";
import Plan from "../components/subscribe/Plan";
import Registration from "../components/subscribe/Registration";
import NotFound from "./NotFound";

export default function Subscribe() {
	const [step, setStep] = useState(1);

	const incrementStep = () => {
		setStep(step + 1);
		window.scrollTo(0, 0);
	};

	const changeStep = (i) => {
		setStep(i);
		window.scrollTo(0, 0);
	};

	return (
		<>
			{step == 1 ? (
				<>
					<Steps step={step} changeStep={changeStep} />
					<Plan changeStep={incrementStep} />
				</>
			) : step == 2 ? (
				<>
					<Steps step={step} changeStep={changeStep} />
					<Registration changeStep={incrementStep} />
				</>
			) : step == 3 ? (
				<>
					<Steps step={step} changeStep={changeStep} />
					<Details changeStep={incrementStep} />
				</>
			) : step == 4 ? (
				<>
					<Steps step={step} changeStep={changeStep} />
					<Payment changeStep={incrementStep} />
				</>
			) : (
				<NotFound />
			)}
		</>
	);
}
