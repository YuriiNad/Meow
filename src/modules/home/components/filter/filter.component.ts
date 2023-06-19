import { Component, inject } from '@angular/core';
import { BreedService } from 'src/modules/home/providers/breed.service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreedComponent } from './options/breed/breed.component';
import { FilterItemWrapperComponent } from './components/options-wrapper/filter-item-wrapper.component';
import { AmountResultsComponent } from './options/amount-results/amount-results.component';
import { AMOUNT_RESULT_OPTIONS, IBasicFilterItemOptions } from './filter.options';
import { MatExpansionModule } from '@angular/material/expansion';

// TODO: Set initial value to the select;

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styles: [':host {@apply w-full}'],
	imports: [BreedComponent, AsyncPipe, FilterItemWrapperComponent, AmountResultsComponent, MatExpansionModule],
	standalone: true,
})
export class FilterComponent {
	private readonly breedService = inject(BreedService);

	public amountResultsOptions: IBasicFilterItemOptions<number>[] = AMOUNT_RESULT_OPTIONS;
	public breeds = toSignal(this.breedService.getAll(), { initialValue: [] });

	breedEmmition(breedId: string) {
		console.log('BREED: ', breedId)
	}

	amountEmmition(itemsAmount: number | string) {
		console.log('AMOUNT: ', itemsAmount)
	}
}
