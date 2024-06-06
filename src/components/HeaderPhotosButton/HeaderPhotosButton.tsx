import { FC } from "react";
import styles from "./HeaderPhotosButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";

const HeaderPhotosButton: FC = () => {
	return (
		<Button
			className={styles.root}
			onClick={(e: OnMouseEvent) => console.log("All Photos", e)}>
			<i className={styles.icon} />
			All photos
		</Button>
	);
};

export default HeaderPhotosButton;
