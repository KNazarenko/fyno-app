import { IAboutRegion } from "./IAboutRegion";
import { IIntro } from "./IIntro";
import { IItinerary } from "./IItinerary";
import { ITripDetail } from "./ITripDetail";

export interface IData {
	intro: IIntro;
	aboutRegion: IAboutRegion;
	itinerary: IItinerary;
	tripDetails: Array<ITripDetail>;
}
