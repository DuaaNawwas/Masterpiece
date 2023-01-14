import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NotFound from "../pages/NotFound";

export default function AdminRoute({ children }) {
	let location = useLocation();
	const { cookies } = useContext(AuthContext);

	if (!cookies.Token || !localStorage.getItem("admin")) {
		return <NotFound />;
	}

	return children;
}
