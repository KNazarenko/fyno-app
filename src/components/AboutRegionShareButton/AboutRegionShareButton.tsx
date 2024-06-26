import { FC } from "react";
import styles from "./AboutRegionShareButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";

const AboutRegionShareButton: FC = () => {
	return (
		<Button
			className={styles.root}
			onClick={(e: OnMouseEvent) => console.log(e)}>
			<i className={styles.icon} />
			{Buttons.Share}
		</Button>
	);
};

export default AboutRegionShareButton;
