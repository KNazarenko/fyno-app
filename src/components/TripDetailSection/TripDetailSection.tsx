import { FC, useState } from "react";
import styles from "./TripDetailSection.module.scss";
import TripRegion from "../TripRegion/TripRegion";
import TripHighlights from "../TripHighlights/TripHighlights";
import TripStays from "../TripStays/TripStays";
import { ITripDetail } from "../../interfaces/ITripDetail";
import { Buttons } from "../../enums/Buttons";
import TripPlan from "../TripPlan/TripPlan";

export type ShowButton = Buttons.ShowDailyPlan | Buttons.ShowHighlights;

interface TripDetailSectionProps {
	trip: ITripDetail;
}

const TripDetailSection: FC<TripDetailSectionProps> = ({ trip }) => {
	const { option, regionTitle, aboutRegion, highlights, stays, plan } = trip;
	const [showButton, setShowButton] = useState<ShowButton>(
		Buttons.ShowDailyPlan
	);

	const onClickHandle = () => {
		if (showButton === Buttons.ShowDailyPlan) {
			setShowButton(Buttons.ShowHighlights);
		} else {
			setShowButton(Buttons.ShowDailyPlan);
		}
	};
	return (
		<section key={option} className={styles.root}>
			<TripRegion
				option={option}
				title={regionTitle}
				post={aboutRegion}
				onClickHandle={onClickHandle}
				showButton={showButton}
			/>
			<TripHighlights
				highlights={highlights.highlightCards}
				hide={showButton === Buttons.ShowHighlights}
				sectionTitle={highlights.sectionTitle}
			/>
			<TripPlan hide={showButton === Buttons.ShowDailyPlan} plan={plan} />
			<TripStays
				stays={stays.stayCards}
				sectionTitle={stays.sectionTitle}
			/>
		</section>
	);
};

export default TripDetailSection;
