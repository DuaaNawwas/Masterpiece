import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function SubscribedRoute({ children }) {
	const { user } = useContext(AuthContext);

	if (user?.is_sub === 1) {
		return <Navigate to="/profile" replace />;
	}
	return children;
}
