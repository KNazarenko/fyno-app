import { FC } from "react";
import styles from "./Header.module.scss";
import HeaderCreateButton from "../HeaderCreateButton/HeaderCreateButton";

const Header: FC = () => {
	return (
		<section className={styles.root}>
			<HeaderCreateButton />
			<HeaderCreateButton />
		</section>
	);
};

export default Header;
