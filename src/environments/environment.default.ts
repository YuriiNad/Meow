export interface IEnvironment {
	production: boolean;
	apiUrl: string;
	apiKey: string;
}

export const defaultEnv: IEnvironment = {
	production: false,
	apiUrl: 'https://api.thecatapi.com/v1/images/search',
	apiKey: 'live_8TvtRMwIip6NDv0XP7ni1AGazmMPZnPvgO9dh2hInURDSZFFoaKbhOwfdgku8NsT',
};