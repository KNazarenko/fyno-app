import { FC } from "react";
import { ITripDetail } from "../../interfaces/ITripDetail";
import { useData } from "../../hooks/useData";
import TripDetailSection from "../TripDetailSection/TripDetailSection";

const TripDetail: FC = () => {
	const { tripDetails } = useData();
	return (
		<div id="trip">
			{tripDetails &&
				tripDetails.map((trip: ITripDetail) => {
					return <TripDetailSection trip={trip} key={trip.option} />;
				})}
		</div>
	);
};

export default TripDetail;
