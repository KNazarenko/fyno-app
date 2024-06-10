import { FC, useState } from "react";
import classNames from "classnames";
import styles from "./TripDetailCardSaveButton.module.scss";
import { OnMouseEvent } from "../Common/Button/Button";

interface SaveButtonProps {
	className?: string;
}

const TripDetailCardSaveButton: FC<SaveButtonProps> = ({ className }) => {
	const [active, setAcitve] = useState<boolean>(false);

	const onClickHandle = (e: OnMouseEvent) => {
		console.log("Add to wishlist Button", e);
		setAcitve(!active);
	};

	return (
		<i
			className={classNames(
				styles.icon,
				{
					[styles.iconActive]: active,
				},
				className
			)}
			onClick={onClickHandle}
		/>
	);
};

export default TripDetailCardSaveButton;
