import { FC } from "react";
import styles from "./TripRegion.module.scss";
import TripRegionDot from "../TripRegionDot/TripRegionDot";

interface TripRegionProps {
	option: string;
	title: string;
	post: string;
}

const Sights = ["Geysers", "Waterfalls", "Crater lakes"];

const TripRegion: FC<TripRegionProps> = (props) => {
	const { option, title, post } = props;
	return (
		<div className={styles.root}>
			<div className={styles.dotWrapper}>
				<TripRegionDot>{option}</TripRegionDot>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.title}>{title}</div>
				<div className={styles.sightWrapper}>
					{Sights &&
						Sights.map((item) => {
							return (
								<span key={item} className={styles.sight}>
									{item}
								</span>
							);
						})}
				</div>
				<div className={styles.post}>{post}</div>
			</div>
		</div>
	);
};

export default TripRegion;
