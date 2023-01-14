import React from "react";
import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RequireAuth({ allowedRoles }) {
	const { user } = useContext(AuthContext);
	const location = useLocation();
	return allowedRoles.includes(user?.role) ? (
		<Outlet />
	) : user !== {} ? (
		<Navigate to="/unauthorized" state={{ from: location }} replace />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}
