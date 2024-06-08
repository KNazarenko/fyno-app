import { FC } from "react";
import styles from "./TripDetailCard.module.scss";
import { ICard } from "../TripHighlights/TripHighlights";

const TripDetailCard: FC<ICard> = (props) => {
	const { url, title, duration, name } = props;
	return (
		<div className={styles.root}>
			<div className={styles.images}>
				<img className={styles.image} src={url} alt={title} />
			</div>
			<div className={styles.footer}>
				<div className={styles.title}>{title}</div>
				<div className={styles.wrapper}>
					<span>{duration}h</span>
					<span className={styles.dot}></span>
					<span>{name}</span>
				</div>
			</div>
		</div>
	);
};

export default TripDetailCard;
