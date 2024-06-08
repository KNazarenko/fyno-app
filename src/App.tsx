import "./App.css";
import Header from "./components/Header/Header";
import HeaderPhotos from "./components/HeaderPhotos/HeaderPhotos";
import Intro from "./components/Intro/Intro";
import AboutRegion from "./components/AboutRegion/AboutRegion";
import Itinerary from "./components/Itinerary/Itinerary";
import TripDetail from "./components/TripDetail/TripDetail";

function App() {
	return (
		<>
			<Header />
			<HeaderPhotos />
			<Intro />
			<AboutRegion />
			<Itinerary />
			<TripDetail />
		</>
	);
}

export default App;
