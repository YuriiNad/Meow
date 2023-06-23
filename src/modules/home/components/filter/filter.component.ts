import { Component, EventEmitter, Output, inject } from '@angular/core';
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
import { Observable, catchError, finalize } from 'rxjs';


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
	@Output() onAction = new EventEmitter<void>()

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

	public get initBreed$(): Observable<string> {
		return this.filterService.breed$;
	}

	public get isRandom$(): Observable<boolean> {
		return this.filterService.isRandomBreeds$;
	}

	public get initAmount$(): Observable<number> {
		return this.filterService.amountResults$;
	}

	setBreed(breedId: string) {
		this.filterService.setBreed(breedId);
		this.onAction.emit();
	}

	setAmountResults(itemsAmount: number | string) {
		if (typeof itemsAmount === 'number') {
			this.filterService.setAmountResults(itemsAmount);
		}
		this.onAction.emit();
	}

	setIsRandomBreeds(data: boolean) {
		this.filterService.setIsRandomBreeds(data);
		this.onAction.emit();
	}
}
