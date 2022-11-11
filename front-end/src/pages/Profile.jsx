import { Badge, Tabs } from "flowbite-react";
import React from "react";
import Button from "../components/Button";
import ChangePassword from "../components/ChangePassword";
import CreditCard from "../components/CreditCard";
import EditForm from "../components/EditForm";
import MealCard from "../components/MealCard";
import PaymentHistoryTable from "../components/PaymentHistoryTable";
import ProfileCard from "../components/ProfileCard";
import WeekCard from "../components/WeekCard";
import meal1 from "../images/meal1.png";

export default function Profile() {
	return (
		<>
			<ProfileCard />

			<Tabs.Group
				aria-label="Tabs with underline"
				style="underline"
				className="mx-auto mt-4"
			>
				<Tabs.Item title="Meals">
					<div class="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative">
						<Badge
							color="gray"
							size="sm"
							className="absolute -mt-[6%] md:-mt-[2%] lg:-mt-[5%]"
						>
							11-11-2022 to 12-8-2022
						</Badge>
						<h1 class="font-bold uppercase text-2xl mb-5 text-center text-darkRed">
							your plan for the month
						</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							{/* on hover delete meal, add meal, edit: day and time of delivery */}
							<WeekCard />
							<WeekCard />
							<WeekCard />
							<WeekCard />
						</div>
					</div>
				</Tabs.Item>
				<Tabs.Item active={true} title="Edit Info">
					<div class="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative">
						<EditForm />
					</div>
				</Tabs.Item>
				<Tabs.Item title="Change Password">
					<div class="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative">
						<ChangePassword />
					</div>
				</Tabs.Item>
				<Tabs.Item title="Subscription">
					<div class="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:px-10 lg:py-20 mx-auto text-gray-800 relative">
						<div className="mx-auto flex flex-col items-center space-y-5">
							<h1 class="font-bold uppercase text-2xl mb-5 text-center text-darkRed">
								Your Payment History
							</h1>
							<PaymentHistoryTable />
							<h1 class="font-bold uppercase text-2xl mt-5 text-center text-darkRed">
								Edit Payment Info
							</h1>
							<div className="md:w-1/2 lg:w-5/12">
								<CreditCard />
							</div>
							<Button bgColor="bg-darkRed" text="CANCEL SUBSCRIPTION" />
							{/* Active subscription details  */}
						</div>
					</div>
				</Tabs.Item>
				{/* <Tabs.Item title="Order Again">
					<div class="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative">
						<h1 class="font-bold uppercase text-2xl mb-5 text-center text-darkRed">
							did you like these meals? <br /> try them again!
						</h1>
						<div className="flex flex-wrap gap-5 justify-center">
							<MealCard
								title="Chicken Flautas"
								desc="Made with shredded chicken wrapped in flour tortillas."
								img={meal1}
							/>
							<MealCard
								title="Chicken Flautas"
								desc="Made with shredded chicken wrapped in flour tortillas."
								img={meal1}
							/>
							<MealCard
								title="Chicken Flautas"
								desc="Made with shredded chicken wrapped in flour tortillas."
								img={meal1}
							/>
							<MealCard
								title="Chicken Flautas"
								desc="Made with shredded chicken wrapped in flour tortillas."
								img={meal1}
							/>
							<MealCard
								title="Chicken Flautas"
								desc="Made with shredded chicken wrapped in flour tortillas."
								img={meal1}
							/>
						</div>
					</div>
				</Tabs.Item> */}
			</Tabs.Group>
		</>
	);
}
