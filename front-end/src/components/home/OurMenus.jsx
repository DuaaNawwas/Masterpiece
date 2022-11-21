import { Carousel } from "flowbite-react";
import React, { useEffect } from "react";
import Button from "../Button";
import CategoryCard from "./CategoryCard";
import chicken from "../../images/chicken.png";
import meat from "../../images/meat.png";
import pescatarian from "../../images/pescatarian.png";

// Importing aos
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function OurMenus() {
	// Initialize animation library
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div className="flex flex-col items-center gap-10 px-10">
				<p
					className="text-darkRed text-4xl drop-shadow-md"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					Our Menus
				</p>
				<div
					className="block container"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-anchor-placement="bottom-bottom"
				>
					<Swiper
						slidesPerView={3}
						slidesPerGroup={3}
						spaceBetween={10}
						pagination={{
							clickable: true,
						}}
						// autoplay={{
						// 	delay: 2500,
						// 	disableOnInteraction: false,
						// }}
						// navigation={true}
						loop={true}
						loopFillGroupWithBlank={true}
						centeredSlides={true}
						modules={[Pagination, Navigation, Autoplay]}
						className="mySwiper"
					>
						<SwiperSlide>
							<CategoryCard
								img={chicken}
								name="Chicken Recipes"
								textstyle="text-xs md:text-lg"
								style="mb-9"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CategoryCard
								img={pescatarian}
								name="Pescatarian Recipes"
								textstyle="text-xs md:text-lg"
								style="mb-9"
							/>
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<CategoryCard
								img={meat}
								name="Meat Recipes"
								textstyle="text-xs md:text-lg"
								style="mb-9"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CategoryCard
								img={chicken}
								name="Chicken Recipes"
								textstyle="text-xs md:text-lg"
								style="mb-9"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CategoryCard
								img={pescatarian}
								name="Pescatarian Recipes"
								textstyle="text-xs md:text-lg"
								style="mb-9"
							/>
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<CategoryCard
								img={meat}
								name="Meat Recipes"
								textstyle="text-xs md:text-lg"
								style="mb-9"
							/>
						</SwiperSlide>
					</Swiper>
					{/* <Carousel className="w-full">
						<div className="flex  py-20 md:px-5 lg:px-20 xl:px-5 justify-center items-center gap-5 ">
							<CategoryCard img={chicken} name="Chicken Recipes" />
							<CategoryCard img={pescatarian} name="Pescatarian Recipes" />
							<CategoryCard img={meat} name="Meat Recipes" />
						</div>
						<div className="flex py-20 md:px-5 lg:px-20 xl:px-5 justify-center items-center gap-5">
							<CategoryCard img={chicken} name="Chicken Recipes" />
							<CategoryCard img={pescatarian} name="Pescatarian Recipes" />
							<CategoryCard img={meat} name="Meat Recipes" />
						</div>
						<div className="flex py-20 md:px-5 lg:px-20 xl:px-5 justify-center items-center gap-5">
							<CategoryCard img={chicken} name="duaa Recipes" />
							<CategoryCard img={pescatarian} name="Pescatarian Recipes" />
							<CategoryCard img={meat} name="Meat Recipes" />
						</div>
					</Carousel> */}
				</div>
				<Button
					bgColor="bg-rusty"
					hoverColor="hover:bg-rustySh"
					text="BROWSE MENU"
					padding="px-10"
					dataaos="zoom-in-up"
					dataaosduration="1000"
				/>
			</div>
			<div className="text-myBlack border-t-4 h-2 w-1/2 mx-auto my-10"></div>
		</>
	);
}
