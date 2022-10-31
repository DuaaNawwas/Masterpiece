import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import "./index.css";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import OurMenus from "./sections/OurMenus";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<OurMenus />
			<div className="h-56"></div>
			<Footer />
		</>
	);
}

export default App;
