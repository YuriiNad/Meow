import { Injectable, inject } from '@angular/core';
import { ENVIRONMENT } from '../global/tokens';
import { IEnvironment } from 'src/environments/environment.default';

@Injectable({
	providedIn: 'root'
})
export class EnvironmentService {
	private readonly environment = inject(ENVIRONMENT);

	public get<K extends keyof IEnvironment>(key: K): IEnvironment[K] {
		return this.environment[key];
	}
}
