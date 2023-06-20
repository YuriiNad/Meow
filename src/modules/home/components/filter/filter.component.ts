import { Component, inject } from '@angular/core';
import { BreedService } from 'src/modules/home/providers/breed.service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreedComponent } from './options/breed/breed.component';
import { FilterItemWrapperComponent } from './components/options-wrapper/filter-item-wrapper.component';
import { AmountResultsComponent } from './options/amount-results/amount-results.component';
import { AMOUNT_RESULT_OPTIONS, IBasicFilterItemOptions } from './filter.options';
import { MatExpansionModule } from '@angular/material/expansion';
import { FilterService } from '../../providers/filter.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RandomBreedsComponent } from './options/random-breeds/random-breeds.component';


@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styles: [':host {@apply w-full}'],
	imports: [BreedComponent, AsyncPipe, RandomBreedsComponent, MatCheckboxModule, FilterItemWrapperComponent, AmountResultsComponent, MatExpansionModule],
	standalone: true,
})
export class FilterComponent {
	private readonly filterService = inject(FilterService);
	private readonly breedService = inject(BreedService);

	public amountResultsOptions: IBasicFilterItemOptions<number>[] = AMOUNT_RESULT_OPTIONS;
	public breeds = toSignal(this.breedService.getAll(), { initialValue: [] });

	breedEmmition(breedId: string) {
		this.filterService.breed.set(breedId)
		console.log('BREED: ', breedId)
	}

	amountEmmition(itemsAmount: number | string) {
		if (typeof itemsAmount === 'number') {
			this.filterService.amountResults.set(itemsAmount)
		}

		console.log('AMOUNT: ', itemsAmount)
	}

	randomBreedsEmmition(data: boolean) {
		this.filterService.randomBreeds.set(data)

		console.log('RANDOM_BREEDS: ', data)
	}
}
