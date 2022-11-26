import { Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./context/AuthContext";
import Registration from "./pages/Registration";
import DataProvider from "./context/DataContext";

// define axios defaults
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function App() {
	return (
		<>
			<GoogleOAuthProvider
				clientId={`${process.env.REACT_APP_GOOGLE_API_CLIENT_ID}`}
			>
				<AuthProvider>
					<DataProvider>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/home" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/subscribe" element={<Subscribe />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Registration />} />
							<Route path="/menu" element={<Menu />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
						<Footer />
					</DataProvider>
				</AuthProvider>
			</GoogleOAuthProvider>
		</>
	);
}

export default App;
