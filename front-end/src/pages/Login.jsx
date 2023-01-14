import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LoginForm from "../components/login/LoginForm";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
	return <LoginForm />;
}
