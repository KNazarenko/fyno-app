import { FC } from "react";
import styles from "./TripDetailCard.module.scss";
import { CardType } from "../../enums/CardType";
import TripDetailCuratorPickButton from "../TripDetailCuratorPickButton/TripDetailCuratorPickButton";

interface TripDetailCardProps {
	id: string;
	url: string;
	title: string;
	place: string;
	duration?: string;
	rating?: string;
	price?: string;
	cardType: CardType;
}

const TripDetailCard: FC<TripDetailCardProps> = (props) => {
	const {
		url,
		title,
		place,
		duration = "",
		rating = "",
		price = "",
		cardType,
	} = props;
	return (
		<div className={styles.root}>
			<div className={styles.images}>
				<img className={styles.image} src={url} alt={title} />
			</div>
			<TripDetailCuratorPickButton className={styles.pickButton} />
			<div className={styles.footer}>
				<div className={styles.title}>{title}</div>
				{cardType === CardType.Stay && (
					<div className={styles.ratingWrapper}>
						<i className={styles.ratingIcon}></i>
						{rating}
					</div>
				)}
				<div className={styles.wrapper}>
					{cardType === CardType.Highlights ? (
						<span>{duration}h</span>
					) : (
						<span>${price}</span>
					)}
					<span className={styles.dot}></span>
					<span>{place}</span>
				</div>
			</div>
		</div>
	);
};

export default TripDetailCard;
