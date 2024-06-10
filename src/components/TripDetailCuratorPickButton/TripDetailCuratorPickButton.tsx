import { FC } from "react";
import styles from "./TripDetailCuratorPickButton.module.scss";
import classNames from "classnames";
import Button from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";

interface CuratorPickButtonProps {
	className?: string;
}

const TripDetailCuratorPickButton: FC<CuratorPickButtonProps> = ({
	className,
}) => {
	return (
		<Button className={classNames(styles.root, className)}>
			{Buttons.CuratorPick}
		</Button>
	);
};

export default TripDetailCuratorPickButton;
