import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { StorageService } from 'src/core/providers/storage.service';

export enum EFilterKeys {
	IS_RANDOM = 'IS_RANDOM',
	RESULT_AMOUNT = 'RESULT_AMOUNT',
	BREED = 'CAT_BREED',
}

@Injectable({
	providedIn: 'root'
})
export class FilterService {
	private readonly storageService = inject(StorageService);
	private readonly storage = inject(StorageService);

	private amountResultsSubject = new BehaviorSubject<number>(this.storage.get(EFilterKeys.RESULT_AMOUNT) || 10);
	private breedSubject = new BehaviorSubject<string>(this.storage.get(EFilterKeys.BREED) || 'aege');
	private isRandomBreedsSubject = new BehaviorSubject<boolean>(this.storage.get(EFilterKeys.IS_RANDOM) as boolean || true);

	public amountResults$ = this.amountResultsSubject.asObservable();
	public breed$ = this.breedSubject.asObservable();
	public isRandomBreeds$ = this.isRandomBreedsSubject.asObservable();

	public setAmountResults(val: number): void {
		this.amountResultsSubject.next(val);
		this.trackFilterOptionsChange();
	}

	public setBreed(val: string): void {
		this.breedSubject.next(val);
		this.trackFilterOptionsChange();
	}

	public setIsRandomBreeds(val: boolean): void {
		this.isRandomBreedsSubject.next(val);
		this.trackFilterOptionsChange();

	}

	public trackFilterOptionsChange(): void {
		const FILTER_OPTIONS: { [key: string]: boolean | string | number } = {
			'IS_RANDOM': this.isRandomBreedsSubject.value,
			'RESULT_AMOUNT': this.amountResultsSubject.value,
			'CAT_BREED': this.breedSubject.value,
		};

		const keys: string[] = Object.keys(FILTER_OPTIONS);

		keys.forEach((key: string) => {
			this.storageService.set(key, FILTER_OPTIONS[key])
		})
	}
}
