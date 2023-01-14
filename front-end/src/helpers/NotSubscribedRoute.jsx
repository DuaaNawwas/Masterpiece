import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NotSubscribedRoute({ children }) {
	const { user } = useContext(AuthContext);

	if (user?.is_sub === null) {
		return <Navigate to="/subscribe" replace />;
	}
	return children;
}
