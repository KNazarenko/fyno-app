import { IAboutRegion } from "./IAboutRegion";
import { IIntro } from "./IIntro";
import { IItinerary } from "./IItinerary";
import { IPhotos } from "./IPhotos";
import { ITripDetail } from "./ITripDetail";

export interface IData {
	photos: IPhotos[];
	intro: IIntro[];
	aboutRegion: IAboutRegion;
	itinerary: IItinerary;
	tripDetails: Array<ITripDetail>;
}
