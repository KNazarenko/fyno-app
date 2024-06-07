import { FC } from "react";
import styles from "./AboutRegionExpert.module.scss";

const getExpert = [
	{
		name: "Sandra",
		avatarUrl:
			"https://s3-alpha-sig.figma.com/img/6b35/0c7e/993dea27641da83edc50d8e980f7f2d7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TNDvcz-KFBq~MvjMveehgHbZ-d8W0qtD16hGCteeijAUhSp6QJiwA1xN4OFLKDrmbg2EY0BDZUXDLH2Do~bLfCXLYm7Y5gUr-oeNrggF6Px8wBva2hfs66D5u3DaVa-0~DeasP-i037VmfRDE8~Aup8~WDbX~g0Nh0n3DTOMNN3y~QV8MsA9yraKeLOlXABdTo2lIH7T0aX5egTlggZOyw1BZH0mrQVo1CvhufTXHFWYDCimYlKIOYsovFoFa7EeSPhLksSFmohxcFt0urXBgnNA6iHq34YfEQQQTbi3uMNcDDdzqVYntVAF90AGUXUQepxvL~9z75ZRSc30rtpHtQ__",
	},
];

const AboutRegionExpert: FC = (props) => {
	return (
		<div className={styles.root}>
			<div className={styles.avatar}>
				<img src={getExpert[0].avatarUrl} alt={"Fyno expert"} />
			</div>
			<div className={styles.expertInfo}>
				<div className={styles.title}>
					Curated by {getExpert[0].name}
				</div>
				<div className={styles.role}>Fyno expert</div>
			</div>
		</div>
	);
};

export default AboutRegionExpert;
