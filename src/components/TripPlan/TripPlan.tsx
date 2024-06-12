import { FC } from "react";
import styles from "./TripPlan.module.scss";
import classNames from "classnames";
import TripDetailDot from "../TripDetailDot/TripDetailDot";
import { ITripPlan, ITripPlanDay } from "../../interfaces/ITripDetail";
import TripPlanDay from "../TripPlanDay/TripPlanDay";
import TripPlanCard from "../TripPlanCard/TripPlanCard";

interface TripHighlightsProps {
	plan: ITripPlan;
	hide: boolean;
}

const TripPlan: FC<TripHighlightsProps> = ({ plan, hide }) => {
	const { sectionTitle, days } = plan;
	console.log(plan);
	return (
		<div
			className={classNames(styles.root, {
				[styles.hide]: hide,
			})}>
			<div className={styles.dotWrapper}>
				<TripDetailDot className={styles.dotIcon}>
					<i className={styles.icon} />
				</TripDetailDot>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.titleWrapper}>
					<div className={styles.title}>{sectionTitle}</div>
				</div>
				{days &&
					days.map((item: ITripPlanDay) => {
						const { day, commonDuration, cards } = item;
						return (
							<>
								<TripPlanDay
									commonDuration={commonDuration}
									day={day}
								/>
								{cards &&
									cards.map((card) => {
										return <TripPlanCard {...card} />;
									})}
							</>
						);
					})}
			</div>
		</div>
	);
};

export default TripPlan;
