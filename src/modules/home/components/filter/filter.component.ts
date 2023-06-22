import { Component, inject } from '@angular/core';
import { CatService } from 'src/modules/home/providers/cat.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { BreedComponent } from './options/breed/breed.component';
import { FilterItemWrapperComponent } from './components/options-wrapper/filter-item-wrapper.component';
import { AmountResultsComponent } from './options/amount-results/amount-results.component';
import { AMOUNT_RESULT_OPTIONS, IBasicFilterItemOptions } from './filter.options';
import { MatExpansionModule } from '@angular/material/expansion';
import { FilterService } from '../../providers/filter.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RandomBreedsComponent } from './options/random-breeds/random-breeds.component';
import { SkeletonComponent } from 'src/core/components/skeleton/skeleton.component';
import { EMPTY, catchError, finalize } from 'rxjs';


@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styles: [':host {@apply w-full}'],
	imports: [
		BreedComponent,
		NgIf, AsyncPipe,
		RandomBreedsComponent,
		MatCheckboxModule,
		FilterItemWrapperComponent,
		AmountResultsComponent,
		MatExpansionModule,
		SkeletonComponent,
	],
	standalone: true,
})
export class FilterComponent {
	private readonly filterService = inject(FilterService);
	private readonly catService = inject(CatService);

	public amountResultsOptions: IBasicFilterItemOptions<number>[] = AMOUNT_RESULT_OPTIONS;
	public breeds$ = this.catService.getAllBreeds().pipe(
		catchError(() => {
			this.filterLoading = false
			return []
		}),
		finalize(() => this.filterLoading = false)
	);

	public isDisabled$ = this.filterService.isRandomBreeds$;

	public filterLoading: boolean = true;

	public get initBreed(): string {
		return this.catService.initBreed || '';
	}

	public get isRandom(): boolean {
		return this.catService.isRandom;
	}

	public get initAmount(): number {
		return this.catService.initAmount;
	}

	setBreed(breedId: string) {
		this.filterService.setBreed(breedId);
		console.log('BREED: ', breedId)
	}

	setAmountResults(itemsAmount: number | string) {
		if (typeof itemsAmount === 'number') {
			this.filterService.setAmountResults(itemsAmount);
		}
		console.log('AMOUNT: ', itemsAmount)
	}

	setIsRandomBreeds(data: boolean) {
		this.filterService.setIsRandomBreeds(data)
		console.log('RANDOM_BREEDS: ', data)
	}
}
