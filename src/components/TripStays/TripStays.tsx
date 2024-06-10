import { FC } from "react";
import styles from "./TripStays.module.scss";
import TripRegionDot from "../TripRegionDot/TripRegionDot";
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
				<TripRegionDot>W</TripRegionDot>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.title}>Where to stay</div>

				<div className={styles.cards}>
					{stays &&
						stays.map((item: ITripStay) => {
							return (
								<TripDetailCard
									key={item.id}
									{...item}
									cardType={CardType.Stay}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default TripStays;
