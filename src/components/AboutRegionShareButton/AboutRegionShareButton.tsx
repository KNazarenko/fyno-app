import { FC } from "react";
import styles from "./AboutRegionShareButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";

const AboutRegionShareButton: FC = () => {
	return (
		<Button
			className={styles.root}
			onClick={(e: OnMouseEvent) => console.log(e)}>
			<i className={styles.icon} />
			Share
		</Button>
	);
};

export default AboutRegionShareButton;
