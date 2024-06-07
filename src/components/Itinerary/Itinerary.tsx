import { FC } from "react";
import styles from "./Itinerary.module.scss";
import ItineraryWidget from "../ItineraryWidget/ItineraryWidget";

const ItineraryName = "Iceland";

const Itinerary: FC = () => {
	return (
		<section className={styles.root}>
			<div className={styles.title}>{ItineraryName} itinerary</div>
			<ItineraryWidget />
		</section>
	);
};

export default Itinerary;
