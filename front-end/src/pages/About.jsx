import React from "react";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";

export default function About() {
	return (
		<div className="container px-32">
			<section>
				<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
						<div className="w-9/12 sm:h-80 lg:h-full">
							<img
								alt=""
								src={about1}
								className=" inset-0 h-full w-full object-cover"
							/>
						</div>
						<div className="lg:py-24">
							<h2 className="text-3xl text-myBlack font-bold sm:text-4xl">
								Lorem Ipsum
							</h2>

							<p className="mt-4 text-xl text-gray-600">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
								qui hic atque tenetur quis eius quos ea neque sunt, accusantium
								soluta minus veniam tempora deserunt? Molestiae eius quidem quam
								repellat. Lorem ipsum dolor, sit amet consectetur adipisicing
								elit. Aut qui hic atque tenetur quis eius quos ea neque sunt,
								accusantium soluta minus veniam tempora deserunt? Molestiae eius
								quidem quam repellat. Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Aut qui hic atque tenetur quis eius quos ea
								neque sunt, accusantium soluta minus veniam tempora deserunt?
								Molestiae eius quidem quam repellat.
							</p>
						</div>
					</div>
				</div>
			</section>

			<div className="text-myBlack border-t-4 h-2 w-1/2 mx-auto my-10"></div>

			<section>
				<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center justify-items-end">
						<div className="lg:py-24">
							<h2 className="text-3xl text-myBlack font-bold sm:text-4xl">
								Lorem Ipsum
							</h2>

							<p className="mt-4 text-xl text-gray-600">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
								qui hic atque tenetur quis eius quos ea neque sunt, accusantium
								soluta minus veniam tempora deserunt? Molestiae eius quidem quam
								repellat. Lorem ipsum dolor, sit amet consectetur adipisicing
								elit. Aut qui hic atque tenetur quis eius quos ea neque sunt,
								accusantium soluta minus veniam tempora deserunt? Molestiae eius
								quidem quam repellat. Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Aut qui hic atque tenetur quis eius quos ea
								neque sunt, accusantium soluta minus veniam tempora deserunt?
								Molestiae eius quidem quam repellat.
							</p>
						</div>
						<div className="w-9/12 sm:h-80 lg:h-full">
							<img
								alt=""
								src={about2}
								className=" inset-0 h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
