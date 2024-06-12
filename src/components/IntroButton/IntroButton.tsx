import { FC, useEffect } from "react";
import styles from "./IntroButton.module.scss";
import Button from "../Common/Button/Button";
import { Buttons } from "../../enums/Buttons";

const IntroButton: FC = () => {
	const scrollHandle = (elem: Element) => {
		elem.scrollIntoView({ block: "start", behavior: "smooth" });
	};

	useEffect(() => {
		const sectionToScroll = document.querySelector("#trip");
		const btn = document.querySelector("#scrollButton");
		if (sectionToScroll) {
			btn?.addEventListener("click", () => scrollHandle(sectionToScroll));
		}
	}, []);

	return (
		<div id="scrollButton">
			<Button className={styles.root}>{Buttons.ViewItinerary}</Button>
		</div>
	);
};

export default IntroButton;
