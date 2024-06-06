import { FC } from "react";
import styles from "./HeaderCreateButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";

const HeaderCreateButton: FC = () => {
	return (
		<Button onClick={(e: OnMouseEvent) => console.log(e)}>
			<i className={styles.icon} />
			Create
		</Button>
	);
};

export default HeaderCreateButton;
