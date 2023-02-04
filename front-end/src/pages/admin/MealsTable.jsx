import axios from "axios";
import { Pagination, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Button from "../../components/Button";
import { AdminContext } from "../../context/AdminContext";
import { AuthContext } from "../../context/AuthContext";

export default function MealsTable() {
	const { meals, setMeals } = useContext(AdminContext);

	const { cookies } = useContext(AuthContext);
	const [data, setData] = useState();
	const [search, setSearch] = useState("");
	const [columns, setColumns] = useState();
	const [w, setW] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [nPages, setNPages] = useState(1);
	const [recordsPerPage, setRecordsPerPage] = useState(10);
	const [indexOfLastRecord, setIndexOfLastRecord] = useState(); // = currentPage * recordsPerPage;

	const indexOfFirstRecord =
		indexOfLastRecord - recordsPerPage < 0
			? 0
			: indexOfLastRecord - recordsPerPage;
	const [currentRecords, setCurrentRecords] = useState([]);

	const reArrangeData = (data) => {
		const dataForTable = data?.map((meal) => ({
			id: meal.id,
			image: meal.image,
			name: meal.name,
			desc: meal.short_desc,
		}));

		setData(dataForTable);
	};
	useEffect(() => {
		if (cookies.Token && localStorage.getItem("admin")) {
			axios
				.get("/api/allmeals/get", {
					headers: {
						Authorization: `Bearer ${cookies.Token}`,
					},
				})
				.then((res) => {
					if (res.data.status === 200) {
						console.log(res);
						setMeals(res.data.meals);
						reArrangeData(res.data.meals);
					}
				})
				.catch((err) => {
					swal("Error", err.message, "error");
				});
		}
	}, []);

	useEffect(() => {
		setColumns([
			{
				name: "Id",
				id: "id",
				sort: true,
			},
			{
				name: "Image",
				id: "image",
				sort: false,
			},
			{
				name: "Name",
				id: "name",
				sort: true,
			},

			{
				name: "Description",
				id: "desc",
				sort: true,
			},
			{
				name: "Actions",
				id: "actions",
				sort: false,
			},
		]);
	}, []);

	useEffect(() => {
		data?.length - (currentPage - 1) * recordsPerPage < recordsPerPage
			? setIndexOfLastRecord(data?.length)
			: setIndexOfLastRecord(recordsPerPage * currentPage);
		const num = Math.ceil(data?.length / recordsPerPage);
		if (num) {
			num <= 1 ? setNPages(1) : setNPages(num);
		}
	}, [data, currentPage, recordsPerPage]);

	useEffect(() => {
		// setCurrentRecords()
		if (search == "") {
			setCurrentRecords(data?.slice(indexOfFirstRecord, indexOfLastRecord));
		} else {
			const filtered = data?.filter((entry) =>
				Object.values(entry).some(
					(val) =>
						(typeof val === "string" &&
							val.toLowerCase().includes(search.toLowerCase())) ||
						(typeof val === "number" &&
							val.toString().includes(search.toString()))
				)
			);

			setCurrentRecords(filtered);
		}
	}, [data, search, indexOfFirstRecord, indexOfLastRecord]);

	// check state effect

	function sortByKey(array, key, sort) {
		sort
			? setData([...array].sort((a, b) => (a[key] < b[key] ? 1 : -1)))
			: setData([...array].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
		setW(!w);
	}

	function makeDateHumanReadable(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString() + " " + date.toLocaleTimeString();
	}

	const handleDelete = (id) => {
		swal({
			title: "Are you sure?",
			text: "This meal will be deleted!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				axios
					.delete(`/api/meal/${id}`, {
						headers: {
							Authorization: `Bearer ${cookies.Token}`,
						},
					})
					.then((res) => {
						if (res.data.status === 200) {
							setMeals(res.data.meals);
							reArrangeData(res.data.meals);
						}
					});
				swal("Poof! meal has been deleted!", {
					icon: "success",
				}).catch((err) => {
					swal("Error", err.message, "error");
				});
			} else {
				swal("Your meal is safe!");
			}
		});
	};
	return (
		<section className="w-8/12 my-10 mx-auto p-6  bg-white rounded-md shadow-md dark:bg-gray-800 space-y-5">
			<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
				Meals
			</h2>
			<TextInput
				id="email1"
				type="email"
				placeholder="Search"
				required={true}
				className="w-52 my-2"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							{columns?.map((col, i) => {
								return (
									<th key={i} scope="col" className="py-3 px-6">
										{col.sort ? (
											<span
												onClick={() => sortByKey(data, col.id, w)}
												className="flex items-center gap-2 cursor-pointer hover:text-gray-500"
											>
												{col.name}

												<IoIosArrowDown size={12} />
											</span>
										) : (
											<span className="flex items-center gap-2  ">
												{col.name}
											</span>
										)}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{currentRecords?.length > 0 ? (
							currentRecords?.map((item, i) => {
								return (
									<tr
										key={i}
										className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
									>
										<td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 dark:text-white">
											{item.id}
										</td>

										<td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 dark:text-white">
											<img
												class="w-10 h-10 rounded-full"
												src={item.image}
												alt=""
											/>
										</td>
										<td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 dark:text-white">
											{item.name}
										</td>

										<td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 dark:text-white">
											{item.desc}
										</td>
										<td className="whitespace-nowrap flex space-x-2 px-2 py-2 font-medium text-gray-900 dark:text-white">
											<Link
												to={`/dashboard/meals/${item?.id}`}
												className={
													"bg-darkGreen text-white px-2 inline-flex items-center justify-center py-2 font-medium  rounded shadow-md  hover:drop-shadow-lg focus:shadow-outline focus:outline-none tracking-wide transition duration-200 disabled:cursor-not-allowed disabled:bg-darkGreen/40 disabled:hover:shadow-md disabled:hover:bg-darkGreen/40"
												}
											>
												<TbEdit />
											</Link>
											<Button
												bgColor="bg-red-500"
												hoverColor="hover:bg-rustySh"
												text={<MdDelete />}
												onClick={() => handleDelete(item?.id)}
												style=" px-2"
												type="button"
											/>
										</td>
									</tr>
								);
							})
						) : (
							<tr className="dark:bg-gray-900">
								<td colSpan={columns?.length}>
									<div className="flex justify-center items-center    ">
										<p>No Data Was Found</p>
									</div>
								</td>
							</tr>
						)}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={columns?.length}>
								<div className="flex justify-around items-center    ">
									<div>
										{search === "" ? (
											<span>
												{indexOfFirstRecord + 1}-{indexOfLastRecord} of{" "}
												{data?.length}
											</span>
										) : (
											<span>Results found: {currentRecords?.length}</span>
										)}
									</div>
									<Pagination
										className={` ${
											(nPages == 1 || search !== "") && "invisible"
										}  pb-2`}
										currentPage={currentPage}
										totalPages={nPages}
										onPageChange={(e) => setCurrentPage(e)}
									/>
									<div
										className={`flex gap-2 items-center ${
											search !== "" && "invisible"
										}`}
									>
										<label className=" whitespace-nowrap ">
											Rows per page:
										</label>
										<div className="   ">
											<div className="my-1 ">
												<select
													onChange={(e) =>
														setRecordsPerPage(parseInt(e.target.value))
													}
													className=" block text-[9px] md:text-[12px] md:px-7 md:py-2 px-2 py-1  dark:bg-slate-700 rounded-md border border-gray-300  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
												>
													<option className="" defaultValue="10">
														10
													</option>
													<option defaultValue="20">20</option>
													<option defaultValue="30">30</option>
													<option defaultValue="50">50</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>
	);
}
