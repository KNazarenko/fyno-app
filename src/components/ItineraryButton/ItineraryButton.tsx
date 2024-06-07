import { FC } from "react";
import styles from "./ItineraryButton.module.scss";
import classNames from "classnames";

export type OnMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

interface ItineraryButtonProps {
	className?: string;
	children?: React.ReactNode;
}
const ItineraryButton: FC<ItineraryButtonProps> = (props) => {
	const { className } = props;

	return (
		<div className={classNames(styles.root, className)}>
			{props.children}
		</div>
	);
};

export default ItineraryButton;
