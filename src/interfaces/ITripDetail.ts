export interface ITripDetail {
	option: string;
	regionTitle: string;
	aboutRegion: string;
	highlights: Array<ITripHighlight>;
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
