import { FC } from "react";
import classNames from "classnames";
import styles from "./TripDetailCardArrowButton.module.scss";
import { OnMouseEvent } from "../Common/Button/Button";

interface SaveButtonProps {
	className?: string;
}

const TripDetailCardArrowButton: FC<SaveButtonProps> = ({ className }) => {
	const onClickHandle = (e: OnMouseEvent) => {
		console.log("Add to wishlist Button", e);
	};

	return (
		<div className={classNames(styles.root, className)}>
			<i className={styles.icon} onClick={onClickHandle} />
		</div>
	);
};

export default TripDetailCardArrowButton;
