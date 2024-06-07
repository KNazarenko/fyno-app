import { FC, useState } from "react";
import classNames from "classnames";
import styles from "./AboutRegionWishlistButton.module.scss";
import Button, { OnMouseEvent } from "../Common/Button/Button";

const AboutRegionWishlistButton: FC = () => {
	const [active, setAcitve] = useState<boolean>(false);

	const onClickHandle = (e: OnMouseEvent) => {
		console.log("Add to wishlist Button", e);
		setAcitve(!active);
	};

	return (
		<Button className={styles.root} onClick={onClickHandle}>
			<i
				className={classNames(styles.icon, {
					[styles.iconActive]: active,
				})}
			/>
			Add to wishlist
		</Button>
	);
};

export default AboutRegionWishlistButton;
