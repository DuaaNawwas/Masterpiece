import { Badge } from "flowbite-react";
import React from "react";
import Button from "../components/Button";
import ChangePassword from "../components/profile/ChangePassword";
import CreditCard from "../components/CreditCard";
import EditForm from "../components/profile/EditForm";
import MealCard from "../components/menu/MealCard";
import PaymentHistoryTable from "../components/profile/PaymentHistoryTable";
import ProfileCard from "../components/profile/ProfileCard";
import WeekCard from "../components/profile/WeekCard";
import meal1 from "../images/meal1.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Profile() {
	const { user } = useContext(AuthContext);

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

				<TabPanel>
					<div className="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative">
						<Badge
							color="gray"
							size="sm"
							className="absolute -mt-[6%] md:-mt-[2%] lg:-mt-[5%]"
						>
							11-11-2022 to 12-8-2022
						</Badge>
						<h1 className="font-bold uppercase text-2xl mb-5 text-center text-darkRed">
							your plan for the month
						</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							<WeekCard />
							<WeekCard />
							<WeekCard />
							<WeekCard />
						</div>
					</div>
				</TabPanel>
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
							{/* <h1 className="font-bold uppercase text-2xl mt-5 text-center text-darkRed">
								Edit Payment Info
							</h1>
							<div className="md:w-1/2 lg:w-5/12">
								<CreditCard />
							</div> */}
							<Button bgColor="bg-darkRed" text="CANCEL SUBSCRIPTION" />
						</div>
					</div>
				</TabPanel>
			</Tabs>
		</>
	);
}
