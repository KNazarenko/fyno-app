import { FC, useState } from "react";
import styles from "./TripHighlights.module.scss";
import classNames from "classnames";
import TripDetailDot from "../TripDetailDot/TripDetailDot";
import TripDailyPlanButton from "../TripDailyPlanButton/TripDailyPlanButton";
import TripDetailCard from "../TripDetailCard/TripDetailCard";
import { CardType } from "../../enums/CardType";
import { ITripHighlight } from "../../interfaces/ITripDetail";
import { OnMouseEvent } from "../Common/Button/Button";

interface TripHighlightsProps {
	highlights: ITripHighlight[];
}
const TripHighlights: FC<TripHighlightsProps> = (props) => {
	const { highlights } = props;
	const [active, setActive] = useState(true);

	const onClickHandle = (e: OnMouseEvent) => {
		console.log(e);
		setActive(!active);
	};

	return (
		<div className={styles.root}>
			<div className={styles.dotWrapper}>
				<TripDetailDot className={styles.dotIcon}>
					<i className={styles.icon} />
				</TripDetailDot>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.titleWrapper}>
					<div className={styles.title}>Region highlights</div>
					<TripDailyPlanButton onClick={onClickHandle} />
				</div>
				<div
					className={classNames(styles.cards, {
						[styles.hide]: active,
					})}>
					{highlights &&
						highlights.map((item: ITripHighlight, index) => {
							return (
								<TripDetailCard
									key={item.id}
									{...item}
									cardType={CardType.Highlights}
									isPickButtonVisible={index !== 2}
									isArrowButtonVisible={index === 2}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default TripHighlights;
