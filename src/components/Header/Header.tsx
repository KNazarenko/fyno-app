import { FC } from "react";
import styles from "./Header.module.scss";
import HeaderCreateButton from "../HeaderCreateButton/HeaderCreateButton";

const Header: FC = () => {
	return (
		<div className={styles.root}>
			<HeaderCreateButton />
			<HeaderCreateButton />
		</div>
	);
};

export default Header;
