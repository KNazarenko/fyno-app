import { FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export type OnMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

interface ButtonProps {
	onClick: (evt: OnMouseEvent) => void;
	disabled?: boolean;
	className?: string;
	isActive?: boolean;
	children?: React.ReactNode;
	dataTest?: string;
	isBasic?: boolean;
}
const Button: FC<ButtonProps> = (props) => {
	const {
		disabled = false,
		className,
		onClick,
		isActive,
		isBasic = true,
	} = props;
	return (
		<div
			onClick={onClick}
			className={classNames(styles.root, className, {
				[styles.iconActive]: !disabled,
				[styles.disabled]: disabled,
				[styles.active]: isActive,
				[styles.basic]: isBasic,
			})}>
			{props.children}
		</div>
	);
};

export default Button;
