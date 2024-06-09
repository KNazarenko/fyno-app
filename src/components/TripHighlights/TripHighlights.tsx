import { FC } from "react";
import styles from "./TripHighlights.module.scss";
import TripRegionDot from "../TripRegionDot/TripRegionDot";
import TripDailyPlanButton from "../TripDailyPlanButton/TripDailyPlanButton";
import TripDetailCard from "../TripDetailCard/TripDetailCard";
import { v4 as uuidv4 } from "uuid";
import { CardType } from "../../enums/CardType";

export interface ICard {
	id: string;
	url: string;
	title: string;
	place: string;
}

export interface ICardRegion extends ICard {
	duration: string;
}

export interface ICardStay extends ICard {
	rating: string;
	price: string;
}

const HighlightsData: Array<ICardRegion> = [
	{
		id: uuidv4(),
		url: "https://s3-alpha-sig.figma.com/img/81f0/413c/c555322d3184b28275dc999dea6bc1ae?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8w6asK1USvWm1IbLO9NIr44546LOieM7iApZ9wnMJ8AblzUh-isZsXD1H2VbSc~fUs3Ar~JifZ4oY1voh6c-GPBustOrrwDTKjJEJQ8UX~qE-7Iut597X2806M8UE1A1ciN8uJkEA1~BZr85Tp-IP0RG6Q0RleDzAs9BFJPW3QfvE0XZLYns0P8BHccfMKsLn7orDuGdR5lqA66T9MRnpyU814Za8XAYQZhBDto2oOFl3jhf63aX8u~EVxid65VUB~w8aBwq7gXyZBJk6O90nw~6MQRodqzuDG3M1wove9MKl5EUYakXIg6lReWxFcOIFIglnrSu0kRVaitj1uvMA__",
		title: "Skógafoss Waterfall",
		duration: "1",
		place: "Iconic waterfall",
	},
	{
		id: uuidv4(),
		url: "https://s3-alpha-sig.figma.com/img/886a/5121/cbf3f5f0f39db85b05b2958b397b744b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IDyc5Rs8dxSqsOuPsoD-p4GZQN0yPCckfQ8OHR60CbNPRztALvi86xUgPOi79pWoC~XrRm7vlF6C2RMJ0IgpdqtzcH4~NMmT6~LFPBeMf8elAvKgd~a2jlgeAmeW78Zijq0EFXWGTrKMcMfUyV7Vd69chVOqrMfyCBK81GT5Wvn3TvH4HfGzMLJdZfyp20EhtGI7nbFTWBFZOZM6-7xPAG4hKiDfFoxTxjbbPDSngrKcaxIMSfdrI~ucwNMOoL7vGze~r8clXf5Vi29RKgy8~CGwDGtSHuf02grxRqveyE2X4ewEM~Xa~oBtJRhnh-0oKyH2pJt~Nwtajlwn6c-DRQ__",
		title: "Katla Ice Cave",
		duration: "1",
		place: "Ice caves",
	},
	{
		id: uuidv4(),
		url: "https://s3-alpha-sig.figma.com/img/d2e6/19e3/605a00205931f0cf37a80568e5c91be8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOtV4H7nRUyDn0X6tUOnQpqLy-fywMpT3U2fDC4JygqO8lom0nYcGXgax9FYY0tZYHenX3hozSGq3p6IhRrtyCGyq6tez1zsuOa8WhRkKAu4ythovbelRAicVB23BrRJsRysVU10z78KIG20fMEhDnokS2hobs64diRaC8y7SB5hDYoX~bigqT0v02VOGXt4oU3Xxe9IrG~HW5xBr-YIJQHAo0OgMya2gTR1EaNXwfAqkIkNCVC0Q0ELnxO7V-WWg8Jh6ZXC0dqQUdlyB22Q8BKzXwBoiITVwc6a6nCBTVdnYYf9GlTA~jA2CUmfqW40ms3hwKXxjTmaO2R-woFg9Q__",
		title: "Fjaðrárgljúfur",
		duration: "1",
		place: "Geysers",
	},
];

const TripHighlights: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.dotWrapper}>
				<TripRegionDot>I</TripRegionDot>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.titleWrapper}>
					<div className={styles.title}>Region highlights</div>
					<TripDailyPlanButton />
				</div>
				<div className={styles.cards}>
					{HighlightsData &&
						HighlightsData.map((item: ICard) => {
							return (
								<TripDetailCard
									key={item.id}
									{...item}
									cardType={CardType.Highlights}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default TripHighlights;
