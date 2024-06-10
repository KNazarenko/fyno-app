import { FC } from "react";
import styles from "./TripDetail.module.scss";
import TripRegion from "../TripRegion/TripRegion";
import TripHighlights from "../TripHighlights/TripHighlights";
import TripStays from "../TripStays/TripStays";
import { ITripDetail } from "../../interfaces/ITripDetail";
import { useData } from "../../hooks/useData";

const TripDetail: FC = () => {
	const { tripDetails } = useData();
	return (
		<>
			{tripDetails &&
				tripDetails.map((trip: ITripDetail) => {
					const {
						option,
						regionTitle,
						aboutRegion,
						highlights,
						stays,
					} = trip;
					return (
						<section key={option} className={styles.root}>
							<TripRegion
								option={option}
								title={regionTitle}
								post={aboutRegion}
							/>
							<TripHighlights highlights={highlights} />
							<TripStays stays={stays} />
						</section>
					);
				})}
		</>
	);
};

export default TripDetail;
