import { Injectable, inject } from '@angular/core';
import { Observable, catchError, combineLatest, map, of, switchMap, tap } from 'rxjs';
import { IBreedInfo, ICatInfo } from 'src/core/models/cat';
import { ApiService } from 'src/core/providers/api.service';
import { IBasicFilterItemOptions } from '../components/filter/filter.options';
import { EFilterKeys, FilterService } from './filter.service';
import { StorageService } from 'src/core/providers/storage.service';


@Injectable({
	providedIn: 'root'
})
export class CatService {
	private readonly api = inject(ApiService);
	private readonly filter = inject(FilterService);

	public getAllBreeds(): Observable<IBasicFilterItemOptions<string>[]> {
		return this.api.get<IBreedInfo[]>('/breeds').pipe(
			map(this.mapToBreedOptions),
			catchError(() => of([]))
		);
	}

	private getRandomImages(limit: number): Observable<ICatInfo[]> {
		const params = this.api.setParamsFromObj({ limit });

		return this.api.get<any[]>('/images/search', { params: params })
	}

	private getSpecificImages(limit: number, breed: string): Observable<ICatInfo[]> {
		const params = this.api.setParamsFromObj({
			breed_ids: breed,
			limit
		});

		return this.api.get<any[]>('/images/search', { params: params })
	}

	public getImages(): Observable<ICatInfo[]> {
		return combineLatest([
			this.filter.amountResults$,
			this.filter.isRandomBreeds$,
			this.filter.breed$,
		]).pipe(
			switchMap(([limit, isRandom, breed]) => {
				if (isRandom) {
					return this.getRandomImages(limit);
				}

				return this.getSpecificImages(limit, breed);
			})
		)

	}

	private mapToBreedOptions(breeds: IBreedInfo[]): IBasicFilterItemOptions<string>[] {
		if (!breeds.length) return [];

		const mapperBreed = breeds.map(({ name, id }) => {
			return { title: name, value: id }
		});

		return mapperBreed;
	}
}