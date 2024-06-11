import "./App.css";
import Header from "./components/Header/Header";
import HeaderPhotos from "./components/HeaderPhotos/HeaderPhotos";
import Intro from "./components/Intro/Intro";
import AboutRegion from "./components/AboutRegion/AboutRegion";
import Itinerary from "./components/Itinerary/Itinerary";
import TripDetail from "./components/TripDetail/TripDetail";
import AppContext from "./Context";

function App() {
	return (
		<AppContext>
			<Header />
			<HeaderPhotos />
			<Intro />
			<AboutRegion />
			<Itinerary />
			<TripDetail />
		</AppContext>
	);
}

export default App;
