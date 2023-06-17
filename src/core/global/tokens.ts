import { InjectionToken, Provider } from "@angular/core";
import { environment } from "src/environments/environment";
import { IEnvironment } from "src/environments/environment.default";

export const WINDOW = new InjectionToken<Window>('WINDOW');
export const ENVIRONMENT = new InjectionToken<IEnvironment>('environment');


export const PROVIDERS: Provider[] = [
	{ provide: WINDOW, useValue: window },
	{ provide: ENVIRONMENT, useValue: environment },
]