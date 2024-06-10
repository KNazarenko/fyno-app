import "./App.css";
import Header from "./components/Header/Header";
import HeaderPhotos from "./components/HeaderPhotos/HeaderPhotos";
import Intro from "./components/Intro/Intro";
import AboutRegion from "./components/AboutRegion/AboutRegion";
import Itinerary from "./components/Itinerary/Itinerary";
import TripDetail from "./components/TripDetail/TripDetail";
import { Context, createContext } from "react";
import GetData from "./mochData";
import { IData } from "./interfaces/IData";

export const MyContext: Context<IData> = createContext(GetData);

function App() {
	return (
		<MyContext.Provider value={GetData}>
			<Header />
			<HeaderPhotos />
			<Intro />
			<AboutRegion />
			<Itinerary />
			<TripDetail />
		</MyContext.Provider>
	);
}

export default App;
