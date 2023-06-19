import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBreedInfo } from 'src/core/models/cat';
import { ApiService } from 'src/core/providers/api.service';
import { IBasicFilterItemOptions } from '../components/filter/filter.options';

@Injectable({
	providedIn: 'root'
})
export class BreedService {
	private readonly api = inject(ApiService);

	public getAll(): Observable<IBasicFilterItemOptions<string>[]> {
		return this.api.get<IBreedInfo[]>('/breeds').pipe(
			map(this.mapToBreedOptions),
		);
	}

	private mapToBreedOptions(breeds: IBreedInfo[]): IBasicFilterItemOptions<string>[] {
		if (!breeds.length) return [];

		const mapperBreed = breeds.map(({ name, id }) => {
			return { title: name, value: id }
		});

		return mapperBreed;
	}
}