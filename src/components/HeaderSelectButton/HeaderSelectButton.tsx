import { FC } from "react";
import styles from "./HeaderSelectButton.module.scss";
import classNames from "classnames";
import Button, { OnMouseEvent } from "../Common/Button/Button";
import { useAmountOfDays } from "../../hooks/useAmountOfDays";

const dayOptions: string[] = ["5", "6", "7", "8", "9", "10"];

const HeaderSelectButton: FC = () => {
	const { days, handleSetDay } = useAmountOfDays();

	const onClickHandle = (e: OnMouseEvent) => {
		handleSetDay(e.currentTarget.innerHTML);
	};

	return (
		<Button className={styles.root}>
			{days} days
			<i className={classNames(styles.icon, {})} />
			<div className={styles.options}>
				{dayOptions.map((item: string) => {
					return (
						<span
							key={item}
							className={classNames(styles.option, {
								[styles.optioHover]: item === days,
							})}
							onClick={onClickHandle}>
							{item}
						</span>
					);
				})}
			</div>
		</Button>
	);
};

export default HeaderSelectButton;
