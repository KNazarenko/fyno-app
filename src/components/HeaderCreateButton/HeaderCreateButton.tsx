import { FC } from "react";
import styles from "./HeaderCreateButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";

const HeaderCreateButton: FC = () => {
	return (
		<Button onClick={(e: OnMouseEvent) => console.log(e)}>
			<i className={styles.icon} />
			{Buttons.Create}
		</Button>
	);
};

export default HeaderCreateButton;
