import { FC } from "react";
import styles from "./TripDetailDot.module.scss";
import classNames from "classnames";

interface TripDetailDotProps {
	className?: string;
	children?: React.ReactNode;
}

const TripDetailDot: FC<TripDetailDotProps> = (props) => {
	const { className } = props;
	return (
		<div className={classNames(styles.root, className)}>
			{props.children}
		</div>
	);
};

export default TripDetailDot;
