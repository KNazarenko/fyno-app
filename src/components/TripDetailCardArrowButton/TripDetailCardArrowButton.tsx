import { FC } from "react";
import classNames from "classnames";
import styles from "./TripDetailCardArrowButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";

interface SaveButtonProps {
	className?: string;
}

const TripDetailCardArrowButton: FC<SaveButtonProps> = ({ className }) => {
	const onClickHandle = (e: OnMouseEvent) => {
		console.log("Arrow Button", e);
	};

	return (
		<Button
			className={classNames(styles.root, className)}
			onClick={onClickHandle}>
			<i className={styles.icon} />
		</Button>
	);
};

export default TripDetailCardArrowButton;
