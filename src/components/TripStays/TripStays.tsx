import { FC } from "react";
import styles from "./TripStays.module.scss";
import TripRegionDot from "../TripRegionDot/TripRegionDot";
import TripDetailCard from "../TripDetailCard/TripDetailCard";
import { v4 as uuidv4 } from "uuid";
import { ICard } from "../TripHighlights/TripHighlights";

const StayData: Array<ICard> = [
	{
		id: uuidv4(),
		url: "https://s3-alpha-sig.figma.com/img/dfe5/b785/657f077035a0f10865a9ae6cc21727db?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGJZfaYlSbhEyQeVHAx9LuGZVOVIEo~uovEKO2FKWvQW~d2DD6024iBE9GlKt2PwHb1xGZDRRy0FwvRTGREQf97OzLevmA~wsUTXlXkV-PRYMiemBIRAYU5b9uePPmrxm7GMgpymEfYoueZQewbbQ3DUT4gAY0oYscG~glW2wUcfRzSZx4s-UyLNb-A-pZ-S1LMDnJC-IrGJ2bxpkj-UYXVvXZaeViszeeZ4P1INhNNiG~Y1tghIdKehHNcWL6O9l8h4IVm2SXandjps0R230-CCYk3IhpQBu77iLdBNyIIeVzV2YJ1EB0lqVNPodHSLYDN2xKF68AeQqYjY1Wm3jw__",
		title: "Magma Hotel",
		duration: "250",
		name: "Boutique hotel",
	},
	{
		id: uuidv4(),
		url: "https://s3-alpha-sig.figma.com/img/3b1c/38f7/6ca6e744ef12e236150e6fccb3fa1b5b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JkbS3Ly4CkSzP8DCoAdiJgs-w9c5lgSctOMce5bL~w0cwJIkdJmRRl5-5cQWbtDUNSRlxVAJ8GeyCqPr8bkLLeHJrasK-0RnNkQiL0yoqw8seHX6MoPvGFj4X9q90iXaeqx5muBQsbdP~Ji2u6Z7JDK29uus4GgOed14raVqf4GOI4jYLXML9zbot56xKju5zixLVUr9DStCOGxNztazAeaoV3wYAKTLeYjYzXcjrlmVMYxBRdARbXFv3rK8~8tYNRTz2s8knD5~XcIGN71Z95-ejpp24wHU5CuQQJzCvHtYP7t9K6WUAPADGTS74zC4JyAEnd79W52OLslJWkD1VQ__",
		title: "Hotel Vík í Mýrdal",
		duration: "150",
		name: "Luxury hotel",
	},
	{
		id: uuidv4(),
		url: "https://s3-alpha-sig.figma.com/img/88bd/1ee8/0348ad938aedf7007e096e7c1feb7496?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8aPnpIsQAM~DeIiOSVSOp1pCFpCl3FKjgwO3i9c49TEAzinbRnu9CwMIzINeXYpa4RfItwQF1e5dg8pCZKGf0t7Xuk3fFHMvzvuh4VNXGwL~DFnzudAHZ4Ibj4z3azRRcJItkufP9Y-sVRBlqEVoi9hFP1tE1VL2M1iSOMmOKfCIGWX8R1qlXE7e-FHCih3EGzJmtZZCJP-YD7QYzIuRWsj6~X6vYyAXR1qxdECJFOIyp71Qmt2JIa0PDxkHwlIFVvSA5nmjesmhFDqusGeX5ZDTEiq~EnvNngLfa4QfEXGNLvdT-uCLWPQLL4U-yW62ldSZJ6wCvjZ8c0tsyxHgQ__",
		title: "Hótel Kría",
		duration: "130",
		name: "Luxury hotel",
	},
];

const TripStays: FC = () => {
	return (
		<div className={styles.root}>
			<div>
				<TripRegionDot>W</TripRegionDot>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.title}>Where to stay</div>

				<div className={styles.cards}>
					{StayData &&
						StayData.map((item: ICard) => {
							return <TripDetailCard key={item.id} {...item} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default TripStays;
