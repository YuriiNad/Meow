import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
	selector: 'app-skeleton',
	templateUrl: './skeleton.component.html',
	styles: [`:host{@apply block w-full px-2 py-1}`],
	imports: [NgxSkeletonLoaderModule, NgFor],
	standalone: true,
})
export class SkeletonComponent {
	@Input() styleClass = '';

	private _count!: number[];
	@Input() set count(val: number) {
		this._count = [...Array(val).keys()];
	};

	public get counts(): number[] {
		return this._count;
	}

	private _height!: string[];
	@Input() set height(val: string[]) {
		this._height = val || ['50px'];
	};

	public get heights(): string[] {
		return this._height;
	}
}
