import { FC } from "react";
import styles from "./AboutRegion.module.scss";
import AboutRegionExpert from "../AboutRegionExpert/AboutRegionExpert";
import AboutRegionWishlistButton from "../AboutRegionWishlistButton/AboutRegionWishlistButton";
import AboutRegionShareButton from "../AboutRegionShareButton/AboutRegionShareButton";

const Region = {
	name: "Iceland's Highlights",
	about: "Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty. From its majestic waterfalls and geothermal wonders to the vibrant culture and rich history, Iceland promises an unforgettable adventure for every traveler.",
};

const AboutRegion: FC = () => {
	return (
		<section className={styles.root}>
			<div className={styles.titleWrapper}>
				<div className={styles.region}>{Region.name}</div>
				<div className={styles.buttonWrapper}>
					<AboutRegionWishlistButton />
					<AboutRegionShareButton />
				</div>
			</div>
			<AboutRegionExpert />
			<div className={styles.aboutRegion}>{Region.about}</div>
		</section>
	);
};

export default AboutRegion;
