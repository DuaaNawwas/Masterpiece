import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function UserRoute({ children }) {
	let location = useLocation();
	const { cookies } = useContext(AuthContext);
	if (!cookies.Token) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return children;
}
