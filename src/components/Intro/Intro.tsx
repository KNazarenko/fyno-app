import { FC } from "react";
import styles from "./Intro.module.scss";
import IntroItem from "../IntroItem/IntroItem";
import IntroButton from "../IntroButton/IntroButton";
import { useAmountOfDays } from "../../hooks/useAmountOfDays";
import { useData } from "../../hooks/useData";
import { IIntro } from "../../interfaces/IIntro";

const Intro: FC = () => {
	const { days } = useAmountOfDays();
	const { intro } = useData();

	return (
		<section className={styles.root}>
			<div className={styles.wrapper}>
				{intro &&
					intro.map((item: IIntro, index: number) => {
						const { title } = item;
						let { value } = item;
						if (index === 0) {
							value = days + value;
						}
						return (
							<IntroItem
								key={title}
								title={title}
								value={value}
							/>
						);
					})}

				<IntroButton />
			</div>
		</section>
	);
};

export default Intro;
