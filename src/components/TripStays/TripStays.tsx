import { FC } from "react";
import styles from "./TripStays.module.scss";
import TripDetailDot from "../TripDetailDot/TripDetailDot";
import { CardType } from "../../enums/CardType";
import { IStayCards } from "../../interfaces/ITripDetail";
import TripCarouselContainer from "../TripCarouselContainer/TripCarouselContainer";

interface TripStaysProps {
	stays: Array<IStayCards>;
	sectionTitle: string;
}

const TripStays: FC<TripStaysProps> = ({ stays, sectionTitle }) => {
	return (
		<div className={styles.root}>
			<div>
				<TripDetailDot className={styles.dotIcon}>
					<i className={styles.icon} />
				</TripDetailDot>
			</div>

			<TripCarouselContainer
				cardsData={stays}
				cardType={CardType.Stay}
				sectionTitle={sectionTitle}
			/>
		</div>
	);
};

export default TripStays;
