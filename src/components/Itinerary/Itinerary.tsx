import { FC } from "react";
import styles from "./Itinerary.module.scss";
import ItineraryWidget from "../ItineraryWidget/ItineraryWidget";
import { useData } from "../../hooks/useData";

const Itinerary: FC = () => {
	const { itinerary } = useData();
	const { title, ...rest } = itinerary;
	return (
		<section className={styles.root}>
			<div className={styles.title}>{title} itinerary</div>
			<ItineraryWidget {...rest} />
		</section>
	);
};

export default Itinerary;
