import React from "react";
import {
	MdOutlineCategory,
	MdOutlineLibraryAdd,
	MdOutlineSetMeal,
	MdOutlineSpaceDashboard,
} from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GiMeal } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Sidenav() {
	const { user } = useContext(AuthContext);
	// To redirect
	const navigate = useNavigate();

	// Get url path
	const location = useLocation();

	// Styling for active nav item
	const activeNav = "bg-gray-100 text-gray-700";
	const inactiveNav = "hover:bg-gray-100 hover:text-gray-700";

	return (
		<div className="sticky top-0 w-60  flex flex-col justify-between h-screen bg-darkGreen text-main   shadow-xl shadow-slate-800">
			<div className="px-4 py-6 flex flex-col gap-10">
				<span className="flex justify-center  ">
					<Link
						to="/"
						aria-label="Company"
						title="Company"
						className="inline-flex items-center "
					>
						<img src={logo} alt="" className="w-16 rounded-md" />
					</Link>
				</span>

				<nav aria-label="Main Nav" className="flex flex-col mt-6 space-y-1">
					<Link
						to="/dashboard"
						className={`flex items-center px-4 py-2  rounded-lg ${
							location.pathname === "/dashboard" ? activeNav : inactiveNav
						}`}
					>
						<MdOutlineSpaceDashboard size="20" />

						<span className="ml-3 text-sm font-medium"> Dashboard </span>
					</Link>
					{/* <Link
						to="/dashboard/categories"
						className={`flex items-center px-4 py-2  rounded-lg ${
							location.pathname === "/dashboard/categories"
								? activeNav
								: inactiveNav
						}`}
					>
						<MdOutlineCategory size="20" />

						<span className="ml-3 text-sm font-medium"> Categories </span>
					</Link> */}

					<details className="group [&_summary::-webkit-details-marker]:hidden">
						<summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
							<MdOutlineCategory size="20" />

							<span className="ml-3 text-sm font-medium"> Categories </span>

							<span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
						</summary>

						<nav
							aria-label="Teams Nav"
							className="mt-1.5 ml-8 space-y-1 flex flex-col"
						>
							<Link
								to="/dashboard/category/add"
								className={`flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
									location.pathname === "/dashboard/category/add"
										? activeNav
										: inactiveNav
								}`}
							>
								<MdOutlineLibraryAdd size="20" />

								<span className="ml-3 text-sm font-medium"> Add Category </span>
							</Link>

							<Link
								to="/dashboard/categories"
								className={`flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
									location.pathname === "/dashboard/categories"
										? activeNav
										: inactiveNav
								}`}
							>
								<FiSettings />

								<span className="ml-3 text-sm font-medium">
									Manage Categories
								</span>
							</Link>
						</nav>
					</details>
					<details className="group [&_summary::-webkit-details-marker]:hidden">
						<summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
							<GiMeal size="20" />

							<span className="ml-3 text-sm font-medium"> Meals </span>

							<span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
						</summary>

						<nav
							aria-label="Teams Nav"
							className="mt-1.5 ml-8 space-y-1 flex flex-col"
						>
							<Link
								to="/dashboard/meal/add"
								className={`flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
									location.pathname === "/dashboard/meal/add"
										? activeNav
										: inactiveNav
								}`}
							>
								<MdOutlineSetMeal size="20" />

								<span className="ml-3 text-sm font-medium"> Add Meal </span>
							</Link>

							<Link
								to="/dashboard/meals"
								className={`flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
									location.pathname === "/dashboard/meals"
										? activeNav
										: inactiveNav
								}`}
							>
								<FiSettings />

								<span className="ml-3 text-sm font-medium">Manage Meals</span>
							</Link>
						</nav>
					</details>

					<a
						href="#"
						className="flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5 opacity-75"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
							/>
						</svg>

						<span className="ml-3 text-sm font-medium"> Billing </span>
					</a>

					<a
						href="#"
						className="flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5 opacity-75"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
							/>
						</svg>

						<span className="ml-3 text-sm font-medium"> Invoices </span>
					</a>

					<details className="group [&_summary::-webkit-details-marker]:hidden">
						<summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5 opacity-75"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>

							<span className="ml-3 text-sm font-medium"> Account </span>

							<span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
						</summary>

						<nav aria-label="Account Nav" className="mt-1.5 ml-8 flex flex-col">
							<a
								href="#"
								className="flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 opacity-75"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
									/>
								</svg>

								<span className="ml-3 text-sm font-medium"> Details </span>
							</a>

							<a
								href="#"
								className="flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 opacity-75"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>

								<span className="ml-3 text-sm font-medium"> Security </span>
							</a>

							<form action="/logout">
								<button
									type="submit"
									className="flex items-center w-full px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 opacity-75"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>

									<span className="ml-3 text-sm font-medium"> Logout </span>
								</button>
							</form>
						</nav>
					</details>
				</nav>
			</div>

			<div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
				<a href="#" className="flex items-center p-4  shrink-0 ">
					<img
						alt=""
						src={user?.image}
						className="object-cover w-10 h-10 rounded-full"
					/>

					<div className="ml-1.5">
						<p className="text-xs">
							<strong className="block font-medium">
								{user?.first_name} {user?.last_name}
							</strong>

							<span>{user?.email}</span>
						</p>
					</div>
				</a>
			</div>
		</div>
	);
}
