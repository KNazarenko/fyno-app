import { FC } from "react";
import styles from "./TripDailyPlanButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";

const TripDailyPlanButton: FC = () => {
	return (
		<Button
			className={styles.root}
			onClick={(e: OnMouseEvent) => console.log(e)}>
			<i className={styles.icon} />
			{Buttons.ShowDailyPlan}
		</Button>
	);
};

export default TripDailyPlanButton;
