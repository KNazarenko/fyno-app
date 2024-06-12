import { FC } from "react";
import styles from "./AboutRegionExpert.module.scss";
import { useData } from "../../hooks/useData";

const AboutRegionExpert: FC = () => {
	const { aboutRegion } = useData();
	const { curatedName, url } = aboutRegion;
	return (
		<div className={styles.root}>
			<div className={styles.avatar}>
				<img src={url} alt={curatedName} />
			</div>
			<div className={styles.expertInfo}>
				<div className={styles.title}>Curated by {curatedName}</div>
				<div className={styles.role}>Fyno expert</div>
			</div>
		</div>
	);
};

export default AboutRegionExpert;
