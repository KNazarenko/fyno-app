import { FC } from "react";
import styles from "./TripDetailCard.module.scss";
import { CardType } from "../../enums/CardType";
import TripDetailCuratorPickButton from "../TripDetailCuratorPickButton/TripDetailCuratorPickButton";
import TripDetailCardSaveButton from "../TripDetailCardSaveButton/TripDetailCardSaveButton";
import TripDetailCardArrowButton from "../TripDetailCardArrowButton/TripDetailCardArrowButton";

interface TripDetailCardProps {
	id: string;
	url: string;
	title: string;
	place: string;
	duration?: string;
	rating?: string;
	price?: string;
	cardType: CardType;
	isPickButtonVisible?: boolean;
	isArrowButtonVisible?: boolean;
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
		isPickButtonVisible = true,
		isArrowButtonVisible = false,
	} = props;
	return (
		<div className={styles.root}>
			<div className={styles.images}>
				<img className={styles.image} src={url} alt={title} />
			</div>
			{isPickButtonVisible && (
				<TripDetailCuratorPickButton className={styles.pickButton} />
			)}
			<TripDetailCardSaveButton className={styles.saveButton} />
			{isArrowButtonVisible && (
				<TripDetailCardArrowButton className={styles.arrowButton} />
			)}

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
