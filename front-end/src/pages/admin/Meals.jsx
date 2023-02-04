import axios from "axios";
import React from "react";
import { useContext } from "react";
import swal from "sweetalert";
import MealCardDash from "../../components/admin/meals/MealCardDash";
import { AdminContext } from "../../context/AdminContext";
import { AuthContext } from "../../context/AuthContext";

export default function Meals() {
	const { meals, setMeals } = useContext(AdminContext);
	const { cookies } = useContext(AuthContext);

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
						}
					});
				swal("Poof! meal has been deleted!", {
					icon: "success",
				}).catch((err) => {
					swal("Error", err, "error");
				});
			} else {
				swal("Your meal is safe!");
			}
		});
	};
	return (
		<section className="flex flex-wrap justify-center gap-10 w-9/12 my-5 mx-auto p-6  bg-white rounded-md shadow-md dark:bg-gray-800">
			{meals?.map((meal, i) => {
				return <MealCardDash handleDelete={handleDelete} meal={meal} key={i} />;
			})}
		</section>
	);
}
