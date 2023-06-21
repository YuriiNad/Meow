import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FilterService {
	private amountResultsSubject = new BehaviorSubject<number>(10);
	private breedSubject = new BehaviorSubject<string>('');
	private isRandomBreedsSubject = new BehaviorSubject<boolean>(true);


	public amountResults$ = this.amountResultsSubject.asObservable();
	public breed$ = this.breedSubject.asObservable();
	public isRandomBreeds$ = this.isRandomBreedsSubject.asObservable();


	public setAmountResults(val: number): void {
		this.amountResultsSubject.next(val);
	}

	public setBreed(val: string): void {
		this.breedSubject.next(val);
	}

	public setIsRandomBreeds(val: boolean): void {
		this.isRandomBreedsSubject.next(val);
	}
}
