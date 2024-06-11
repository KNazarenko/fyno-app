import { useContext } from "react";
import { DaysContextProps, AmountOfDaysContext } from "../Context";

export function useAmountOfDays() {
	return useContext<DaysContextProps>(AmountOfDaysContext);
}
