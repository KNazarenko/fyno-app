import { FC } from "react";
import styles from "./ItineraryWidget.module.scss";
import ItineraryButton from "../ItineraryButton/ItineraryButton";

const ItineraryData = {
	departure: "Reykjavík, KEF",
	arrive: "San Francisco, SFO",
	date: "Jul 03 – Jul 11",
	persons: "2",
};

const ItineraryWidget: FC = () => {
	return (
		<div className={styles.root}>
			<ItineraryButton className={styles.departure}>
				{ItineraryData.departure}
			</ItineraryButton>
			<i className={styles.iconPlane} />
			<ItineraryButton className={styles.arrive}>
				{ItineraryData.arrive}
			</ItineraryButton>
			<ItineraryButton className={styles.date}>
				<i className={styles.iconDate} />
				{ItineraryData.date}
			</ItineraryButton>
			<ItineraryButton>
				<i className={styles.iconPerson} />
				{ItineraryData.persons}
			</ItineraryButton>
		</div>
	);
};

export default ItineraryWidget;
