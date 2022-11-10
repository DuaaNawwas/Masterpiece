import { Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import Button from "../components/Button";
import registerpic from "../images/registerpic.png";
export default function Registration(props) {
	return (
		<>
			<div className="relative block rounded-xl bg-white border border-gray-100 p-1 sm:pb-20 md:pb-5 shadow-xl w-11/12 md:w-9/12  lg:w-11/12 xl:w-9/12  mx-auto mt-20 mb-44">
				<div className="hidden lg:block absolute left-1/2 -ml-0.5 w-0.5 h-56 top-1/2 -translate-y-1/2 bg-gray-300"></div>
				<section>
					<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  justify-items-center items-center">
							<div className="w-9/12 sm:h-80 lg:h-full flex flex-col ">
								<form className="flex flex-col gap-4">
									<h2 className="text-3xl text-darkRed font-bold sm:text-4xl text-center py-1">
										Start Your Journey
									</h2>
									<div className="relative">
										<input
											id="email2"
											type="email"
											className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkRed peer"
											placeholder=" "
										/>
										<label
											htmlFor="email2"
											className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
										>
											Your email
										</label>
									</div>
									<div className="relative">
										<input
											id="password"
											type="password"
											className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkRed peer"
											placeholder=" "
										/>
										<label
											htmlFor="password"
											className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
										>
											Your password
										</label>
									</div>
									<div className="relative">
										<input
											id="password_confirmation"
											type="password"
											className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkRed peer"
											placeholder=" "
										/>
										<label
											htmlFor="password_confirmation"
											className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
										>
											Confirm your password
										</label>
									</div>

									<Button
										bgColor="bg-darkYellow"
										hoverColor="hover:bg-lemonSh"
										text="SIGN UP"
										type="submit"
										padding="px-8"
										onClick={props.changeStep}
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
