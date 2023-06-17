// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export interface IEnvironment {
	production: boolean;
	apiUrl: string;
}

export const environment: IEnvironment = {
	production: false,
	apiUrl: '' //TODO: API for BE;
};
