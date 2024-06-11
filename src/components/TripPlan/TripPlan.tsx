import { FC } from "react";
import styles from "./TripPlan.module.scss";
import classNames from "classnames";
import TripDetailDot from "../TripDetailDot/TripDetailDot";
import { ITripHighlight } from "../../interfaces/ITripDetail";

interface TripHighlightsProps {
	highlights?: ITripHighlight[];
	hide: boolean;
}

const TripPlan: FC<TripHighlightsProps> = (props) => {
	const { hide } = props;

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
					<div className={styles.title}>2 days plan</div>
				</div>
			</div>
		</div>
	);
};

export default TripPlan;
