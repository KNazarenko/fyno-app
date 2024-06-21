import { FC } from "react";
import styles from "./TripStays.module.scss";
import TripDetailDot from "../TripDetailDot/TripDetailDot";
import TripDetailCard from "../TripDetailCard/TripDetailCard";
import { CardType } from "../../enums/CardType";
import { ITripStay } from "../../interfaces/ITripDetail";

interface TripStaysProps {
	stays: Array<ITripStay>;
}

const TripStays: FC<TripStaysProps> = ({ stays }) => {
	return (
		<div className={styles.root}>
			<div>
				<TripDetailDot className={styles.dotIcon}>
					<i className={styles.icon} />
				</TripDetailDot>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.title}>Where to stay</div>

				<div className={styles.cards}>
					{stays &&
						stays.map((item: ITripStay, index) => {
							return (
								<TripDetailCard
									key={item.id}
									{...item}
									cardType={CardType.Stay}
									isPickButtonVisible={index !== 2}
									isArrowButtonVisible={true}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default TripStays;
