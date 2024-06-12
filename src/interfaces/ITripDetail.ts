export interface ITripDetail {
	option: string;
	regionTitle: string;
	aboutRegion: string;
	highlights: Array<ITripHighlight>;
	plan: ITripPlan;
	stays: Array<ITripStay>;
}

export interface ITripHighlight {
	id: string;
	url: string;
	title: string;
	duration: string;
	place: string;
}

export interface ITripStay {
	id: string;
	url: string;
	title: string;
	rating: string;
	price: string;
	place: string;
}

export interface ITripPlan {
	sectionTitle: string;
	days: ITripPlanDay[];
}

export interface ITripPlanDay {
	day: string;
	commonDuration: string;
	cards: ITripPlanDayCard[];
}

export interface ITripPlanDayCard {
	id: string;
	url: string;
	cardTitle: string;
	pick: boolean;
	duration: string;
	place: string;
	traffic: string;
}
