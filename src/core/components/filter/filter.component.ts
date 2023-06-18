import { Component, inject } from '@angular/core';
import { BreedComponent } from '../../../modules/home/components/breed/breed.component';
import { BreedService } from 'src/modules/home/providers/breed.service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilterItemWrapperComponent } from './components/options-wrapper/filter-item-wrapper.component';

export interface IBreedOption<T> {
	title: string;
	value: T;
}

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styles: [':host {@apply w-fit max-w-[250px] block}'],
	imports: [BreedComponent, AsyncPipe, FilterItemWrapperComponent],
	standalone: true,
})
export class FilterComponent {
	// TODO: Set initial value to the select;
	private readonly breedService = inject(BreedService);

	public breeds = toSignal(this.breedService.getAll(), { initialValue: [] });

	testEmition() {
		console.log('Option is changing')
	}
}
