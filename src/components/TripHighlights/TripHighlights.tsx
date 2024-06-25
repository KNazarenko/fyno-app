import { FC } from "react";
import styles from "./TripHighlights.module.scss";
import TripDetailDot from "../TripDetailDot/TripDetailDot";
import { CardType } from "../../enums/CardType";
import { IHighlightCards } from "../../interfaces/ITripDetail";
import classNames from "classnames";
import TripCarouselContainer from "../TripCarouselContainer/TripCarouselContainer";

interface TripHighlightsProps {
	highlights: IHighlightCards[];
	hide: boolean;
	sectionTitle: string;
}

const TripHighlights: FC<TripHighlightsProps> = (props) => {
	const { highlights, hide, sectionTitle } = props;

	return (
		<div
			className={classNames(styles.root, {
				[styles.hide]: hide,
			})}>
			<div className={styles.dotWrapper}>
				<TripDetailDot className={styles.dotIcon}>
					<i className={styles.icon} />
				</TripDetailDot>
			</div>

			<TripCarouselContainer
				cardsData={highlights}
				cardType={CardType.Highlights}
				sectionTitle={sectionTitle}
			/>
		</div>
	);
};

export default TripHighlights;
