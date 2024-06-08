import { FC } from "react";
import styles from "./HeaderPhotosButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";

const HeaderPhotosButton: FC = () => {
	return (
		<Button
			className={styles.root}
			onClick={(e: OnMouseEvent) => console.log("All Photos", e)}>
			<i className={styles.icon} />
			{Buttons.AllPhotos}
		</Button>
	);
};

export default HeaderPhotosButton;
