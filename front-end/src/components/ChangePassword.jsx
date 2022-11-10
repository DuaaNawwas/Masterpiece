import { Label, TextInput } from "flowbite-react";
import React from "react";
import Button from "./Button";

export default function ChangePassword() {
	return (
		<form className="flex flex-col gap-4 w-full md:w-7/12 mx-auto">
			<h2 className="text-3xl text-darkRed font-bold sm:text-4xl text-center py-5">
				Change your password
			</h2>

			<div className="relative">
				<input
					type="password"
					id="password"
					className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkRed peer"
					placeholder=" "
				/>
				<label
					htmlFor="password"
					className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
				>
					Your current password
				</label>
			</div>
			<div className="relative">
				<input
					type="password"
					id="password2"
					className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkRed peer"
					placeholder=" "
				/>
				<label
					htmlFor="password2"
					className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
				>
					New password
				</label>
			</div>
			<div className="relative">
				<input
					type="password"
					id="password_confirmation"
					className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkRed peer"
					placeholder=" "
				/>
				<label
					htmlFor="password_confirmation"
					className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
				>
					Confirm New Password
				</label>
			</div>

			<Button
				bgColor="bg-darkGreen"
				text="CONFIRM"
				type="submit"
				padding="px-8"
				style="mt-5"
			/>
		</form>
	);
}
