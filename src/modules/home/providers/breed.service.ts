import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBreedOption } from 'src/core/components/filter/filter.component';
import { IBreedInfo } from 'src/core/models/cat';
import { ApiService } from 'src/core/providers/api.service';

@Injectable({
	providedIn: 'root'
})
export class BreedService {
	private readonly api = inject(ApiService);

	public getAll(): Observable<IBreedOption<string>[]> {
		return this.api.get<IBreedInfo[]>('/breeds').pipe(
			map(this.mapToBreedOptions),
		);
	}

	private mapToBreedOptions(breeds: IBreedInfo[]): IBreedOption<string>[] {
		if (!breeds.length) return [];

		const mapperBreed = breeds.map(({ name, id }) => {
			return { title: name, value: id }
		});

		return mapperBreed;
	}
}