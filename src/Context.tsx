import React, { Context, FC, createContext, useState } from "react";
import { IData } from "./interfaces/IData";
import GetData from "./mochData";

const getServerData = (): IData => {
	return GetData;
};

export interface DaysContextProps {
	days: string;
	handleSetDay: (value: string) => void;
}

export const AllDataContext: Context<IData> = createContext(getServerData());
export const AmountOfDaysContext: Context<DaysContextProps> = createContext(
	{} as DaysContextProps
);

interface AppContextProps {
	children: React.ReactNode;
}

const AppContext: FC<AppContextProps> = ({ children }) => {
	const initialValue = "7";
	const [days, setDay] = useState(initialValue);

	const handleSetDay = (value: string) => {
		setDay(value);
	};
	return (
		<AllDataContext.Provider value={getServerData()}>
			<AmountOfDaysContext.Provider value={{ days, handleSetDay }}>
				{children}
			</AmountOfDaysContext.Provider>
		</AllDataContext.Provider>
	);
};

export default AppContext;
