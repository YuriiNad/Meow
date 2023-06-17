import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	imports: [MatToolbarModule, MatIconModule, MatButtonModule, NgIf],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class ToolbarComponent {
	@Input({ required: true }) title!: string;
	@Input({ required: true }) showMenu: boolean = false;
	@Output() onOpen = new EventEmitter<void>();
}
