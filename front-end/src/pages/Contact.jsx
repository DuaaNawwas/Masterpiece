import React from "react";
import contact from "../images/contact.png";
import { Label, Textarea, TextInput } from "flowbite-react";
import Button from "../components/Button";

export default function Contact() {
	return (
		<>
			<div className="relative w-full h-52">
				<img src={contact} className="mx-auto hidden lg:block w-full" />
				{/* <h1 className="text-center lg:absolute text-4xl lg:text-8xl text-darkRed lg:text-main lg:top-1/2 lg:left-1/3 lg:-translate-x-1/3 lg:-translate-y-1/2">
					Contact Us
				</h1> */}
			</div>

			<div className="relative block rounded-xl bg-white border border-gray-100 p-5 shadow-xl w-9/12 mx-auto mt-20 mb-44">
				<div className="hidden lg:block absolute left-1/2 -ml-0.5 w-0.5 h-56 top-1/2 -translate-y-1/2 bg-gray-300"></div>
				<section>
					<h2 className="text-3xl text-darkRed font-bold sm:text-4xl text-center py-8">
						Send Us Your Thoughts
					</h2>
					<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  justify-items-center">
							<div>
								<p className=" text-xl text-gray-600 text-justify lg:w-1/2 justify-self-center mx-auto">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
									qui hic atque tenetur quis eius quos ea neque sunt,
									accusantium soluta minus veniam tempora deserunt? Molestiae
									eius quidem quam repellat.
								</p>
							</div>
							<div className="w-9/12 sm:h-80 lg:h-full flex flex-col ">
								<form action="">
									<div className="mb-5">
										<div className="mb-2 block ">
											<Label
												htmlFor="email3"
												value="Your Email"
												className="text-myBlack text-lg"
											/>
										</div>
										<TextInput
											id="email3"
											type="email"
											placeholder="name@mail.com"
											required={true}
										/>
									</div>
									<div className="mb-5">
										<div className="mb-2 block">
											<Label
												htmlFor="comment"
												value="Your Message"
												className="text-myBlack text-lg"
											/>
										</div>
										<div id="textarea">
											<Textarea
												id="comment"
												placeholder="Leave a comment..."
												required={true}
												rows={4}
											/>
										</div>
									</div>
									<Button
										bgColor="bg-darkYellow"
										hoverColor="hover:bg-lemonSh"
										text="SEND"
										style="float-right"
										padding="px-8"
									/>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
