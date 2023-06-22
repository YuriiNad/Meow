import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

	private amountResultsSubject = new BehaviorSubject<number>(10);
	private breedSubject = new BehaviorSubject<string>('');
	private isRandomBreedsSubject = new BehaviorSubject<boolean>(true);

	public amountResults$ = this.amountResultsSubject.asObservable();
	public breed$ = this.breedSubject.asObservable();
	public isRandomBreeds$ = this.isRandomBreedsSubject.asObservable();

	public setAmountResults(val: number): void {
		this.amountResultsSubject.next(val);
		this.storageService.set(EFilterKeys.RESULT_AMOUNT, val);
	}

	public setBreed(val: string): void {
		this.breedSubject.next(val);
		this.storageService.set(EFilterKeys.BREED, val);
	}

	public setIsRandomBreeds(val: boolean): void {
		this.isRandomBreedsSubject.next(val);
		this.storageService.set(EFilterKeys.IS_RANDOM, val);
	}
}
