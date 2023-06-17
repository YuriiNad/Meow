import { InjectionToken, Provider } from "@angular/core";
import { IEnvironment, environment } from "src/environments/environment";

export const WINDOW = new InjectionToken<Window>('WINDOW');
export const ENVIRONMENT = new InjectionToken<IEnvironment>('environment');


export const PROVIDERS: Provider[] = [
	{ provide: WINDOW, useValue: window },
	{ provide: ENVIRONMENT, useValue: environment },
]