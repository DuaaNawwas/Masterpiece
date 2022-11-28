import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

export default function DataProvider({ children }) {
	const [categories, setCategories] = useState();
	const [pricing, setPricing] = useState();

	const { token } = useContext(AuthContext);

	// Get Categories and their meals
	useEffect(() => {
		axios.get("/api/categories").then((res) => {
			console.log(res);
			setCategories(res.data.categories);
		});
	}, []);

	// Get pricing data
	useEffect(() => {
		axios.get("/api/pricing").then((res) => {
			console.log(res);
			setPricing(res.data.pricings);
		});
	}, []);

	return (
		<DataContext.Provider value={{ categories, pricing }}>
			{children}
		</DataContext.Provider>
	);
}
