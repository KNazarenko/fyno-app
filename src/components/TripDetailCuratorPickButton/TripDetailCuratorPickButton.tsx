import { FC, useState } from "react";
import styles from "./TripDetailCuratorPickButton.module.scss";
import classNames from "classnames";
import Button, { OnMouseEvent } from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";

interface CuratorPickButtonProps {
	className?: string;
}

const TripDetailCuratorPickButton: FC<CuratorPickButtonProps> = ({
	className,
}) => {
	const [active, setAcitve] = useState<boolean>(false);

	const onClickHandle = (e: OnMouseEvent) => {
		console.log("Add to wishlist Button", e);
		setAcitve(!active);
	};

	return (
		<Button
			className={classNames(styles.root, className)}
			onClick={onClickHandle}>
			{Buttons.CuratorPick}
		</Button>
	);
};

export default TripDetailCuratorPickButton;
