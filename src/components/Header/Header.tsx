import { FC } from "react";
import styles from "./Header.module.scss";
import HeaderCreateButton from "../HeaderCreateButton/HeaderCreateButton";
import HeaderButtonGroup from "../HeaderButtonGroup/HeaderButtonGroup";

const Header: FC = () => {
	return (
		<section className={styles.root}>
			<HeaderButtonGroup />
			<HeaderCreateButton />
		</section>
	);
};

export default Header;
