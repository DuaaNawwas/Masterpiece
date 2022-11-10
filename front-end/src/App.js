import { Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/subscribe" element={<Subscribe />} />
				{/* <Route path="/subscribe/:step" element={<Subscribe />} /> */}
				<Route path="/menu" element={<Menu />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
