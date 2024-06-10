import { useContext } from "react";
import { MyContext } from "../App";
import { IData } from "../interfaces/IData";

export function useData() {
	return useContext<IData>(MyContext);
}
