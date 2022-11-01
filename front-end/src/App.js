import { Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
