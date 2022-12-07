import { Badge } from "flowbite-react";
import React from "react";
import Button from "../components/Button";
import ChangePassword from "../components/profile/ChangePassword";
import EditForm from "../components/profile/EditForm";
import PaymentHistoryTable from "../components/profile/PaymentHistoryTable";
import ProfileCard from "../components/profile/ProfileCard";
import WeekCard from "../components/profile/WeekCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Profile() {
	const { user, cookies } = useContext(AuthContext);

	const [plan, setPlan] = useState();

	useEffect(() => {
		axios
			.get("/api/plan", {
				headers: {
					Authorization: `Bearer ${cookies.Token}`,
				},
			})
			.then((res) => {
				if (res.data.status === 200) {
					console.log(res.data);
					setPlan(res.data.plan);
				}
			});
	}, []);

	return (
		<>
			<ProfileCard />
			<Tabs className="flex flex-col  mt-8 text-darkRed">
				<TabList className="text-sm flex justify-center">
					<Tab>Your Plan</Tab>
					<Tab>Edit Info</Tab>
					{user?.google_id || user.facebook_id ? null : (
						<Tab>Change Password</Tab>
					)}
					<Tab>Payment History</Tab>
				</TabList>

				{user?.is_sub === null ? (
					""
				) : (
					<TabPanel>
						{user?.is_sub === 1 ? (
							<div className="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative">
								<Badge
									color="gray"
									size="sm"
									className="absolute -mt-[6%] md:-mt-[2%] lg:-mt-[5%]"
								>
									{plan?.created_at.split("T")[0]} to {plan?.ending_date}
								</Badge>
								<h1 className="font-bold uppercase text-2xl mb-5 text-center text-darkRed">
									your plan for the month
								</h1>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
									<WeekCard
										week_num={1}
										meals_per_week={plan?.meals_per_week}
									/>
									<WeekCard
										week_num={2}
										meals_per_week={plan?.meals_per_week}
									/>
									<WeekCard
										week_num={3}
										meals_per_week={plan?.meals_per_week}
									/>
									<WeekCard
										week_num={4}
										meals_per_week={plan?.meals_per_week}
									/>
								</div>
							</div>
						) : (
							<div></div>
						)}
					</TabPanel>
				)}
				<TabPanel>
					<div className="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800">
						<EditForm />
					</div>
				</TabPanel>
				{user?.google_id || user.facebook_id ? null : (
					<TabPanel>
						<div className="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative">
							<ChangePassword />
						</div>
					</TabPanel>
				)}
				<TabPanel>
					<div className="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:px-10 lg:py-20 mx-auto text-gray-800 relative">
						<div className="mx-auto flex flex-col items-center space-y-5">
							<h1 className="font-bold uppercase text-2xl mb-5 text-center text-darkRed">
								Your Payment History
							</h1>
							<PaymentHistoryTable />

							<Button bgColor="bg-darkRed" text="CANCEL SUBSCRIPTION" />
						</div>
					</div>
				</TabPanel>
			</Tabs>
		</>
	);
}
