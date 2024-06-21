import { FC } from "react";
import classNames from "classnames";
import styles from "./TripDetailCardArrowButton.module.scss";
import Button from "../Common/Button/Button";

interface SaveButtonProps {
	className?: string;
	onClick?: () => void;
}

const TripDetailCardArrowButton: FC<SaveButtonProps> = ({
	className,
	onClick,
}) => {
	return (
		<Button
			className={classNames(styles.root, className)}
			onClick={onClick}>
			<i className={styles.icon} />
		</Button>
	);
};

export default TripDetailCardArrowButton;
