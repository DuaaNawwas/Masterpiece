import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../components/admin/Sidenav";

export default function AdminEnd() {
	return (
		<div className="flex">
			<Sidenav />

			<Outlet />
		</div>
	);
}
