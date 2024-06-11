import { useContext } from "react";
import { IData } from "../interfaces/IData";
import { AllDataContext } from "../Context";

export function useData() {
	return useContext<IData>(AllDataContext);
}
