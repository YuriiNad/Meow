import { Injectable, effect, signal } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FilterService {
	public amountResults = signal<number>(10);
	public breed = signal<string>('');
	public randomBreeds = signal<boolean>(true);

	public filter = effect(() => {
		console.log({ amount: this.amountResults(), breed: this.breed(), randomBreeds: this.randomBreeds() })
	})
}
