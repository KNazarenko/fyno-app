import { FC } from "react";
import styles from "./AboutRegion.module.scss";
import AboutRegionExpert from "../AboutRegionExpert/AboutRegionExpert";
import AboutRegionWishlistButton from "../AboutRegionWishlistButton/AboutRegionWishlistButton";
import AboutRegionShareButton from "../AboutRegionShareButton/AboutRegionShareButton";
import { useData } from "../../hooks/useData";

const AboutRegion: FC = () => {
	const { aboutRegion } = useData();
	const { title, about } = aboutRegion;
	return (
		<section className={styles.root}>
			<div className={styles.titleWrapper}>
				<div className={styles.region}>{title}</div>
				<div className={styles.buttonWrapper}>
					<AboutRegionWishlistButton />
					<AboutRegionShareButton />
				</div>
			</div>
			<AboutRegionExpert />
			<div className={styles.aboutRegion}>{about}</div>
		</section>
	);
};

export default AboutRegion;
