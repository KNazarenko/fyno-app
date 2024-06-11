import { FC } from "react";
import styles from "./TripDailyPlanButton.module.scss";
import Button from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";
import { OnMouseEvent } from "../ItineraryButton/ItineraryButton";

interface TripDailyPlanButtonProps {
	onClick: (e: OnMouseEvent) => void;
}

const TripDailyPlanButton: FC<TripDailyPlanButtonProps> = ({ onClick }) => {
	return (
		<Button className={styles.root} onClick={onClick}>
			<i className={styles.icon} />
			{Buttons.ShowDailyPlan}
		</Button>
	);
};

export default TripDailyPlanButton;
