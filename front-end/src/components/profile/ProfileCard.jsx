import { Avatar } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button";

export default function ProfileCard() {
	const { user } = useContext(AuthContext);
	return (
		<div className="w-full max-w-md mx-auto px-8 py-8 mt-20 bg-white rounded-lg shadow-lg dark:bg-gray-800">
			<div className="relative flex justify-center -mt-16 group">
				{/* <img
					className=" object-cover object-center  w-20 h-20 border-2 border-darkRed rounded-full "
					alt=""
					src={user?.image}
				/> */}
				<Avatar alt="" img={user?.image} rounded={true} size="lg" />
				<div className="w-20 h-20 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
					<img
						className="hidden group-hover:block w-5"
						src="https://www.svgrepo.com/show/33565/upload.svg"
						alt=""
					/>
				</div>
			</div>

			<h2 className="pt-6 text-center text-2xl font-semibold text-gray-800  md:mt-0 md:text-3xl capitalize">
				Welcome {user?.first_name + " " + user?.last_name}
			</h2>

			<p className="mt-2 text-center text-gray-600 dark:text-gray-200">
				You can manage your profile here
			</p>
			{/* <p className="mt-2 text-gray-600 dark:text-gray-200">Payment Info:</p> */}

			{/* <div className="flex justify-end mt-4">
				<Button bgColor="bg-darkGreen" text="EDIT PROFILE" />
			</div> */}
		</div>
	);
}
