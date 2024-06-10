import { FC } from "react";
import styles from "./HeaderPhotos.module.scss";
import classNames from "classnames";
import frame01 from "../../assets/images/Frame 01.png";
import frame02 from "../../assets/images/Frame 02.png";
import frame03 from "../../assets/images/Frame 03.png";
import frame04 from "../../assets/images/Frame 04.png";
import frame05 from "../../assets/images/Frame 05.png";
import HeaderPhotosButton from "../HeaderPhotosButton/HeaderPhotosButton";

const Photos = [
	{
		name: "frame01",
		url: "https://s3-alpha-sig.figma.com/img/492d/e56e/d89c0b160b0a845bc64db304a69e59f2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yx5cWpLkVA~z9QgTNt3o0xpsyRwSSh-ksAi7Qh8gHvDVoBLlvO-7Foc8WFDSewBBuI1SLw1~8B1NQi2rDyWyDlXrWP7qhpNJj-jjzDh1bq1Rb0f82RUNoWLBr1clziKdpvVsHGMyJYeiRQU-NFodrjkwCQlnw6oUbM92fG5pAHnXE4yRy51BkN7yVndEYXPuBzOf3s0U0BDN-O7q7CSocx~A9gabJUuDeIgIpLLBmb7JoTMG8jDaaQUSQ175-qNpu0RDBDry2dzuxfKiq9iyxVKxf28ZDASeBg0mM3Q1dmmiiJPT5uOTmF~PmMZlnZtf3jFqEnhL81qojHguR4GjWA__",
		urlLocal: frame01,
	},
	{
		name: "frame02",
		url: "https://s3-alpha-sig.figma.com/img/4444/eb6b/fa804f8f120c7832ded5f69f0a53d6ec?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fclUdWNuEYid5p5o9Sg~FPXAlNZ0N~RvOOj2V4Gn1jWkgwiisO8LelgE2~kW~X1A6yXoCapiDDdcLYbKlcECYRJK8T895ZLQj0XlheXph0bJWLCDczN~N6RfMFCIRm566UIhiK7yxsIVQE8E5kgASY9NFvTwURZno5NOaFZ1zT1T8-6Aooi7meph1ZCM5-QUPUcy2pPNU53I~BDZL2dDWV15yyb6abimzVkpIILVTw-ZuLzNkQnGRXiVqUvubEBqfO77ByPXSp6bkAuZOswcV38OQzEi5WRbOW8CdOcDagVsn1qDHGfPHvAu2n~wEfIJFKz2hOGdi3tuuhh0rq4I-g__",
		urlLocal: frame02,
	},
	{
		name: "frame03",
		url: "https://s3-alpha-sig.figma.com/img/9546/a308/21605885246d7f4f1b2b27239888f55e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWJUlMMOY~z585fKT-4BqoZ8eQA1qOoM3ST1u9-Qbq2DUv5pLxHV-NuX9I-~zo9wGmyyD0DscLlS2hEwZtJyg2m97cTmR5EwhTYZfuLdd08vmSfdP9mnD3l3fItIQmw0ds3khBzNiEMG6MCxAKczkSqS1XYfHh7wRgECZMjruRZuJ6eGZKTcF6Ln9KUU44ib-2puLhY6HZVAEWn7CSKHLbRz7n5ZLK7oQvJk3UDJioVQ-mpvKqWOgO5c4k7jjTbSiEsTd00NFR7P1d3ilj0WyDLM4agW1u8Nz1EAbTHXcK4dnV0K0TOxQPcni7ix0loVinvrRHwdyhGEInw91f8FUg__",
		urlLocal: frame03,
	},
	{
		name: "frame04",
		url: "https://s3-alpha-sig.figma.com/img/dfe5/b785/657f077035a0f10865a9ae6cc21727db?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGJZfaYlSbhEyQeVHAx9LuGZVOVIEo~uovEKO2FKWvQW~d2DD6024iBE9GlKt2PwHb1xGZDRRy0FwvRTGREQf97OzLevmA~wsUTXlXkV-PRYMiemBIRAYU5b9uePPmrxm7GMgpymEfYoueZQewbbQ3DUT4gAY0oYscG~glW2wUcfRzSZx4s-UyLNb-A-pZ-S1LMDnJC-IrGJ2bxpkj-UYXVvXZaeViszeeZ4P1INhNNiG~Y1tghIdKehHNcWL6O9l8h4IVm2SXandjps0R230-CCYk3IhpQBu77iLdBNyIIeVzV2YJ1EB0lqVNPodHSLYDN2xKF68AeQqYjY1Wm3jw__",
		urlLocal: frame04,
	},
	{
		name: "frame05",
		url: "https://s3-alpha-sig.figma.com/img/886a/5121/cbf3f5f0f39db85b05b2958b397b744b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IDyc5Rs8dxSqsOuPsoD-p4GZQN0yPCckfQ8OHR60CbNPRztALvi86xUgPOi79pWoC~XrRm7vlF6C2RMJ0IgpdqtzcH4~NMmT6~LFPBeMf8elAvKgd~a2jlgeAmeW78Zijq0EFXWGTrKMcMfUyV7Vd69chVOqrMfyCBK81GT5Wvn3TvH4HfGzMLJdZfyp20EhtGI7nbFTWBFZOZM6-7xPAG4hKiDfFoxTxjbbPDSngrKcaxIMSfdrI~ucwNMOoL7vGze~r8clXf5Vi29RKgy8~CGwDGtSHuf02grxRqveyE2X4ewEM~Xa~oBtJRhnh-0oKyH2pJt~Nwtajlwn6c-DRQ__",
		urlLocal: frame05,
	},
];

const HeaderPhotos: FC = () => {
	return (
		<section className={styles.root}>
			<div className={styles.wrapper}>
				{Photos &&
					Photos.map((item, index) => {
						return (
							<img
								className={classNames({
									[styles.firstElem]: index === 0,
								})}
								key={item.name}
								src={item.urlLocal}
								alt={item.name}
							/>
						);
					})}
			</div>
			<HeaderPhotosButton />
		</section>
	);
};

export default HeaderPhotos;
