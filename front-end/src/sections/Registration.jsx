import { Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import Button from "../components/Button";
import registerpic from "../images/registerpic.png";
export default function Registration() {
	return (
		<>
			<div className="relative block rounded-xl bg-white border border-gray-100 p-5 shadow-xl w-9/12 mx-auto mt-20 mb-44">
				<div className="hidden lg:block absolute left-1/2 -ml-0.5 w-0.5 h-56 top-1/2 -translate-y-1/2 bg-gray-300"></div>
				<section>
					<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  justify-items-center items-center">
							<div className="w-9/12 sm:h-80 lg:h-full flex flex-col ">
								<form className="flex flex-col gap-4">
									<h2 className="text-3xl text-darkRed font-bold sm:text-4xl text-center py-1">
										Start Your Journey
									</h2>
									<div>
										<div className="mb-2 block">
											<Label htmlFor="email2" value="Your email" />
										</div>
										<TextInput
											id="email2"
											type="email"
											required={true}
											shadow={true}
										/>
									</div>
									<div>
										<div className="mb-2 block">
											<Label htmlFor="password2" value="Your password" />
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
											<Label
												htmlFor="repeat-password"
												value="Repeat password"
											/>
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
										text="SIGN UP"
										type="submit"
										padding="px-8"
									/>
								</form>
								<div class="flex my-2 text-sm font-semibold items-center text-myBlack">
									<div class="flex-grow border-t h-px mr-3"></div>
									OR
									<div class="flex-grow border-t h-px ml-3"></div>
								</div>
								<Button
									bgColor="bg-myBlack"
									hoverColor="hover:bg-gray-700"
									text="CONTINUE WITH GOOGLE"
									padding="px-8"
								/>
							</div>
							<div>
								<img
									src={registerpic}
									className="mx-auto hidden lg:block w-full"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
