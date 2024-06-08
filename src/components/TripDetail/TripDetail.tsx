import { FC } from "react";
import styles from "./TripDetail.module.scss";
import TripRegion from "../TripRegion/TripRegion";
import TripHighlights from "../TripHighlights/TripHighlights";
import TripStays from "../TripStays/TripStays";

const TripDetail: FC = () => {
	return (
		<section className={styles.root}>
			<TripRegion />
			<TripHighlights />
			<TripStays />
		</section>
	);
};

export default TripDetail;
