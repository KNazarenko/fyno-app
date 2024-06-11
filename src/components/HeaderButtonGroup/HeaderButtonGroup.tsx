import { FC } from "react";
import styles from "./HeaderButtonGroup.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";
import HeaderSelectButton from "../HeaderSelectButton/HeaderSelectButton";

const HeaderButtonGroup: FC = () => {
	return (
		<div className={styles.root}>
			<Button
				className={styles.trips}
				onClick={(e: OnMouseEvent) => console.log(e)}>
				{Buttons.Trips}
			</Button>
			<Button
				className={styles.iceland}
				onClick={(e: OnMouseEvent) => console.log(e)}>
				{Buttons.Iceland}
			</Button>
			<HeaderSelectButton />
		</div>
	);
};

export default HeaderButtonGroup;
