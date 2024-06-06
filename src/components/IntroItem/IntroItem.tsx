import { FC } from "react";
import styles from "./IntroItem.module.scss";

interface IntroItemsProps {
	title: string;
	value: string;
}

const IntroItem: FC<IntroItemsProps> = (props) => {
	const { title, value } = props;

	return (
		<div className={styles.root}>
			<span>{title}</span>
			<span className={styles.value}>{value}</span>
		</div>
	);
};

export default IntroItem;
