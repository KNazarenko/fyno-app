import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import styles from "./TripCarouselContainer.module.scss";
import TripDetailCard from "../TripDetailCard/TripDetailCard";
import { CardType } from "../../enums/CardType";
import { IHighlightCards, IStayCards } from "../../interfaces/ITripDetail";
import classNames from "classnames";
import TripDetailCardArrowButton from "../TripDetailCardArrowButton/TripDetailCardArrowButton";

const showCardsNumber: number = 3;
const cardWidth: number = 232;

export type cardsData = IHighlightCards | IStayCards;

interface TripCarouselContainerProps {
	cardsData: cardsData[];
	cardType: CardType;
	sectionTitle: string;
}

const TripCarouselContainer: FC<TripCarouselContainerProps> = (props) => {
	const { cardsData, cardType, sectionTitle } = props;
	const [positon, setPositon] = useState<number>(0);

	const cardsRef: MutableRefObject<null> = useRef(null);
	const allCardsNumberRef: MutableRefObject<number> = useRef(0);

	const showPrevButton: boolean = positon < 0;
	const hideNextButton: boolean =
		Math.abs(positon) ===
			Math.abs(
				cardWidth * (allCardsNumberRef.current - showCardsNumber)
			) || cardsData.length === showCardsNumber;

	useEffect(() => {
		if (cardsRef.current) {
			const cardsContainer: HTMLDivElement = cardsRef.current;
			allCardsNumberRef.current = cardsContainer.childNodes.length;
		}
	}, []);

	const onClickNextHandler = () => {
		if (cardsRef.current) {
			let newPosition = positon;
			newPosition -= cardWidth * showCardsNumber;
			newPosition = Math.max(
				newPosition,
				-cardWidth * (allCardsNumberRef.current - showCardsNumber)
			);
			const cardsContainer: HTMLDivElement = cardsRef.current;
			cardsContainer.style.transform = `translateX(${newPosition}px)`;
			cardsContainer.style.transition = "all 0.3s ease-in-out";
			setPositon(newPosition);

			console.log(newPosition);
			console.log(
				-cardWidth * (allCardsNumberRef.current - showCardsNumber)
			);
		}
	};
	const onClickPrevHandler = () => {
		if (cardsRef.current) {
			let newPosition = positon;
			newPosition += cardWidth * showCardsNumber;
			newPosition = Math.min(newPosition, 0);
			const cardsContainer: HTMLDivElement = cardsRef.current;
			cardsContainer.style.transform = `translateX(${newPosition}px)`;
			cardsContainer.style.transition = "all 0.3s ease-in-out";
			setPositon(newPosition);
		}
	};

	return (
		<div className={styles.sectionWrapper}>
			<div className={styles.titleWrapper}>
				<div className={styles.title}>{sectionTitle}</div>
			</div>
			<div className={styles.cardsContainer}>
				<TripDetailCardArrowButton
					className={classNames(styles.arrowButtonPrev, {
						[styles.arrwButtonPrevShow]: showPrevButton,
					})}
					onClick={onClickPrevHandler}
				/>

				<TripDetailCardArrowButton
					className={classNames(styles.arrowButtonNext, {
						[styles.arrowButtonNextHide]: hideNextButton,
					})}
					onClick={onClickNextHandler}
				/>
				<div className={styles.cards} ref={cardsRef}>
					{cardsData &&
						cardsData.map((item: cardsData) => {
							return (
								<TripDetailCard
									key={item.id}
									{...item}
									cardType={cardType}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default TripCarouselContainer;
