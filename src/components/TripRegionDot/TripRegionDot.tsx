import { FC } from "react";
import styles from "./TripRegionDot.module.scss";
import classNames from "classnames";

interface TripRegionDotProps {
	className?: string;
	children?: React.ReactNode;
}

const TripRegionDot: FC<TripRegionDotProps> = (props) => {
	const { className } = props;
	return (
		<div className={classNames(styles.root, className)}>
			{props.children}
		</div>
	);
};

export default TripRegionDot;
