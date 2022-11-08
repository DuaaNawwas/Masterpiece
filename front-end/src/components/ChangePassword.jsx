import { Label, TextInput } from "flowbite-react";
import React from "react";
import Button from "./Button";

export default function ChangePassword() {
	return (
		<form className="flex flex-col gap-4">
			<h2 className="text-3xl text-darkRed font-bold sm:text-4xl text-center py-1">
				Change your password
			</h2>

			<div>
				<div className="mb-2 block">
					<Label htmlFor="password" value="Your current password" />
				</div>
				<TextInput
					id="password"
					type="password"
					required={true}
					shadow={true}
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="password2" value="New password" />
				</div>
				<TextInput
					id="password2"
					type="password"
					required={true}
					shadow={true}
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="repeat-password" value="Confirm New Password" />
				</div>
				<TextInput
					id="repeat-password"
					type="password"
					required={true}
					shadow={true}
				/>
			</div>
			<Button
				bgColor="bg-darkYellow"
				hoverColor="hover:bg-lemonSh"
				text="CONFIRM"
				type="submit"
				padding="px-8"
			/>
		</form>
	);
}
