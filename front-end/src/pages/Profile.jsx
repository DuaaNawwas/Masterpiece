import { Badge, Tabs } from "flowbite-react";
import React from "react";
import ChangePassword from "../components/ChangePassword";
import CreditCard from "../components/CreditCard";
import EditForm from "../components/EditForm";
import MealCard from "../components/MealCard";
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
							className="absolute -mt-[5%] md:-mt-[2%] lg:-mt-[5%]"
						>
							October
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
					<div class="mt-3 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative">
						<div className="md:w-1/2 mx-auto">
							<CreditCard />
							Active subscription details History of payments edit payment info
							and cancel subscription
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
