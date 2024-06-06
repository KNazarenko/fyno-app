import { FC } from "react";
import styles from "./Intro.module.scss";
import IntroItem from "../IntroItem/IntroItem";
import IntroButton from "../IntroButton/IntroButton";

const Data = [
	{ title: "Trip duration", value: "7 days" },
	{ title: "Exploration", value: "4 regions" },
	{ title: "Flight", value: "7h 20m from SFO" },
];

const Intro: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				{Data &&
					Data.map((item) => {
						return (
							<IntroItem title={item.title} value={item.value} />
						);
					})}

				<IntroButton />
			</div>
		</div>
	);
};

export default Intro;
