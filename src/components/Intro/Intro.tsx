import { FC } from "react";
import styles from "./Intro.module.scss";
import IntroItem from "../IntroItem/IntroItem";
import IntroButton from "../IntroButton/IntroButton";
import { useAmountOfDays } from "../../hooks/useAmountOfDays";

const Intro: FC = () => {
	const { days } = useAmountOfDays();

	const Data = [
		{ title: "Trip duration", value: `${days} days` },
		{ title: "Exploration", value: "4 regions" },
		{ title: "Flight", value: "7h 20m from SFO" },
	];

	return (
		<section className={styles.root}>
			<div className={styles.wrapper}>
				{Data &&
					Data.map((item) => {
						return (
							<IntroItem
								key={item.title}
								title={item.title}
								value={item.value}
							/>
						);
					})}

				<IntroButton />
			</div>
		</section>
	);
};

export default Intro;
