import { FC } from "react";
import styles from "./TripPlanDay.module.scss";

interface TripHighlightsProps {
	day: string;
	commonDuration: string;
}

const TripPlanDay: FC<TripHighlightsProps> = (props) => {
	const { day, commonDuration } = props;

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<span>{day}</span>
				<span className={styles.durationWrapper}>
					<i className={styles.arrowIcon} />
					{commonDuration}
					<i className={styles.dotsIcon} />
				</span>
			</div>
		</div>
	);
};

export default TripPlanDay;
