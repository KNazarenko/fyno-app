import { FC } from "react";
import styles from "./HeaderPhotos.module.scss";
import classNames from "classnames";
import HeaderPhotosButton from "../HeaderPhotosButton/HeaderPhotosButton";
import { useData } from "../../hooks/useData";
import { IPhotos } from "../../interfaces/IPhotos";

const HeaderPhotos: FC = () => {
	const { photos } = useData();
	return (
		<section className={styles.root}>
			<div className={styles.wrapper}>
				{photos &&
					photos.map((item: IPhotos, index) => {
						const { name, url } = item;
						return (
							<img
								className={classNames({
									[styles.firstElem]: index === 0,
								})}
								key={name}
								src={url}
								alt={name}
							/>
						);
					})}
			</div>
			<HeaderPhotosButton />
		</section>
	);
};

export default HeaderPhotos;
