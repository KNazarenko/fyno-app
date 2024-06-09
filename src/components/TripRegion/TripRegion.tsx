import { FC } from "react";
import styles from "./TripRegion.module.scss";
import TripRegionDot from "../TripRegionDot/TripRegionDot";

const RegionData = [
	{
		id: "A",
		title: "South & Highlands",
		post: "The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.",
	},
];

const Sights = ["Geysers", "Waterfalls", "Crater lakes"];

const TripRegion: FC = () => {
	const data = RegionData[0];
	return (
		<div className={styles.root}>
			<div className={styles.dotWrapper}>
				<TripRegionDot>{data.id}</TripRegionDot>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.title}>{data.title}</div>
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
				<div className={styles.post}>{data.post}</div>
			</div>
		</div>
	);
};

export default TripRegion;
