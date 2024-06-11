import { FC } from "react";
import styles from "./TripShowButton.module.scss";
import Button from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";
import { OnMouseEvent } from "../ItineraryButton/ItineraryButton";
import { ShowButton } from "../TripDetailSection/TripDetailSection";

interface TripDailyPlanButtonProps {
	onClick: (e: OnMouseEvent) => void;
	type: ShowButton;
}

const TripShowButton: FC<TripDailyPlanButtonProps> = ({ onClick, type }) => {
	const isDailyPlan = type === Buttons.ShowDailyPlan;

	return (
		<Button className={styles.root} onClick={onClick}>
			{isDailyPlan ? (
				<i className={styles.iconDailyPlan} />
			) : (
				<i className={styles.iconHighlights} />
			)}
			{isDailyPlan ? Buttons.ShowDailyPlan : Buttons.ShowHighlights}
		</Button>
	);
};

export default TripShowButton;
