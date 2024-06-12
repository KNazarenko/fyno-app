import { FC } from "react";
import styles from "./ItineraryWidget.module.scss";
import ItineraryButton from "../ItineraryButton/ItineraryButton";

interface ItineraryWidgetProps {
	from: string;
	to: string;
	dates: string;
	persons: string;
}

const ItineraryWidget: FC<ItineraryWidgetProps> = (props) => {
	const { from, to, dates, persons } = props;
	return (
		<div className={styles.root}>
			<ItineraryButton className={styles.departure}>
				{from}
			</ItineraryButton>
			<i className={styles.iconPlane} />
			<ItineraryButton className={styles.arrive}>{to}</ItineraryButton>
			<ItineraryButton className={styles.date}>
				<i className={styles.iconDate} />
				{dates}
			</ItineraryButton>
			<ItineraryButton>
				<i className={styles.iconPerson} />
				{persons}
			</ItineraryButton>
		</div>
	);
};

export default ItineraryWidget;
