import { IEnvironment, defaultEnv } from "./environment.default";

export const environment: IEnvironment = {
	...defaultEnv,
	production: true,
};