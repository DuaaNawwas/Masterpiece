import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function GuestRoute() {
	let location = useLocation();
	const { cookies } = useContext(AuthContext);
	if (cookies.Token) {
		return <Navigate to="/" state={{ from: location }} replace />;
	}
	return <Outlet />;
}
