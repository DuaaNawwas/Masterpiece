import React, { useEffect } from "react";
import partner from "../../images/partner.png";

// Importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Partners() {
	// Initialize animation library
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="flex flex-col items-center">
			<p
				data-aos="fade-up"
				data-aos-duration="1000"
				className="text-darkRed text-4xl drop-shadow-md"
			>
				Our Partners
			</p>
			<div className="flex flex-wrap py-20 justify-center items-center gap-10 md:gap-32">
				<img
					src={
						"https://scontent.famm6-1.fna.fbcdn.net/v/t1.6435-9/49500038_2420138554723356_2833937327343009792_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTbZG0Y1mEpwHp_4lm8ADsQnDb7mjqxvdCcNvuaOrG9z1ZZqXdWey3-pRqO0gQRYUMf4kqCd0hI-yQP_VarRbE&_nc_ohc=g_dAMtVA-iEAX9ABSCM&_nc_ht=scontent.famm6-1.fna&oh=00_AfDupzS6zpJ1Op0oL6GE6ATNFbuhUfVmxhbYNpo7Y3Qp0g&oe=6405C74B"
					}
					alt=""
					className="w-32 md:w-40 rounded-full"
					data-aos="fade-up-right"
					data-aos-duration="1000"
				/>
				<img
					src={
						"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1503517826/pzbugv4lzp59ivgpccqr.png"
					}
					alt=""
					className="w-32 md:w-40 rounded-full"
					data-aos="zoom-in"
					data-aos-duration="1000"
				/>
				<img
					src={partner}
					alt=""
					className="w-32 md:w-40"
					data-aos="fade-up-left"
					data-aos-duration="1000"
				/>
			</div>
		</div>
	);
}
