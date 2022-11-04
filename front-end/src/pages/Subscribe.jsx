import React from "react";
import { useParams } from "react-router-dom";
import Steps from "../components/Steps";
import Details from "../sections/Details";
import Payment from "../sections/Payment";
import Plan from "../sections/Plan";
import Registration from "../sections/Registration";
import NotFound from "./NotFound";

export default function Subscribe() {
	const { step } = useParams();
	return (
		<>
			{step == 1 ? (
				<>
					<Steps />
					<Plan />
				</>
			) : step == 2 ? (
				<>
					<Steps />
					<Registration />
				</>
			) : step == 3 ? (
				<>
					<Steps />
					<Details />
				</>
			) : step == 4 ? (
				<>
					<Steps />
					<Payment />
				</>
			) : (
				<NotFound />
			)}
		</>
	);
}
