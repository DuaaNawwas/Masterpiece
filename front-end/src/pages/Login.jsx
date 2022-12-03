import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LoginForm from "../components/login/LoginForm";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	if (user) {
		navigate("/profile", { replace: true });
	}
	return <LoginForm />;
}
