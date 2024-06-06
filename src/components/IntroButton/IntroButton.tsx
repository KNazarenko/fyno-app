import { FC } from "react";
import styles from "./IntroButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";

const IntroButton: FC = () => {
	return (
		<Button
			className={styles.root}
			onClick={(e: OnMouseEvent) => console.log("View itinerary", e)}>
			View itinerary
		</Button>
	);
};

export default IntroButton;
