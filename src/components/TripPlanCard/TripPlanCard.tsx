import { FC } from "react";
import styles from "./TripPlanCard.module.scss";
import { ITripPlanDayCard } from "../../interfaces/ITripDetail";

const TripPlanCard: FC<ITripPlanDayCard> = (props) => {
	const { url, cardTitle, pick, duration, place, traffic } = props;
	return (
		<div className={styles.root}>
			<div className={styles.imgAboutWrapper}>
				<img className={styles.image} src={url} alt={cardTitle} />
				<div className={styles.aboutWrapper}>
					<span>{cardTitle}</span>
					{pick && (
						<span className={styles.pick}>Curator's pick</span>
					)}
					<div className={styles.durationWrapper}>
						<span>{duration}</span>
						<span className={styles.dot}></span>
						<span>{place}</span>
						<span className={styles.dot}></span>
						<span>{traffic}</span>
					</div>
				</div>
			</div>

			<span className={styles.iconWrapper}>
				<i className={styles.equalIcon} />
				<i className={styles.dotsIcon} />
			</span>

			<span className={styles.planCardDot}>
				<span></span>
			</span>
		</div>
	);
};

export default TripPlanCard;
