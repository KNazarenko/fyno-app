import { FC } from "react";
import styles from "./TripHighlights.module.scss";
import TripDetailDot from "../TripDetailDot/TripDetailDot";
import TripDailyPlanButton from "../TripDailyPlanButton/TripDailyPlanButton";
import TripDetailCard from "../TripDetailCard/TripDetailCard";
import { CardType } from "../../enums/CardType";
import { ITripHighlight } from "../../interfaces/ITripDetail";

interface TripHighlightsProps {
	highlights: ITripHighlight[];
}
const TripHighlights: FC<TripHighlightsProps> = (props) => {
	const { highlights } = props;
	return (
		<div className={styles.root}>
			<div className={styles.dotWrapper}>
				<TripDetailDot className={styles.dotIcon}>
					<i className={styles.icon} />
				</TripDetailDot>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.titleWrapper}>
					<div className={styles.title}>Region highlights</div>
					<TripDailyPlanButton />
				</div>
				<div className={styles.cards}>
					{highlights &&
						highlights.map((item: ITripHighlight, index) => {
							return (
								<TripDetailCard
									key={item.id}
									{...item}
									cardType={CardType.Highlights}
									isPickButtonVisible={index !== 2}
									isArrowButtonVisible={index === 2}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default TripHighlights;
