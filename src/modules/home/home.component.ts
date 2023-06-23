import { Component, OnInit, inject } from '@angular/core';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { CatService } from './providers/cat.service';
import { AsyncPipe, JsonPipe, NgIf, NgFor } from '@angular/common';
import { FilterService } from './providers/filter.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { getColumns } from 'src/core/helpers/grid.helper';
// TODO: First emition fixing
// TODO: fix imports' components

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	imports: [CatCardComponent, NgIf, NgFor, MatGridListModule, ReactiveFormsModule, AsyncPipe, JsonPipe, MatFormFieldModule, MatSelectModule],
	standalone: true,
})
export default class HomeComponent implements OnInit {
	private readonly catService = inject(CatService);
	private readonly filter = inject(FilterService);

	public readonly cols = getColumns();
	cats: any[] = [];

	ngOnInit(): void {
		this.catService.getImages().subscribe(e => {
			this.cats = e;
		});
	}
}
