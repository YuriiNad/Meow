import { Component, ViewChild, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatDrawerMode, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ScreenService } from 'src/core/providers/screen.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	imports: [
		RouterOutlet,
		ToolbarComponent,
		MatSidenavModule,
		RouterOutlet,
		MatIconModule,
		MatSidenavModule,
		NgIf, NgFor,
		MatListModule,
	],
	standalone: true,
})
export class MainComponent {
	private readonly screen = inject(ScreenService);

	@ViewChild('nav') sideNav!: MatSidenav;

	public readonly isMobile = signal<boolean>(this.screen.mobile);
	public readonly mode = signal<MatDrawerMode>(this.isMobile() ? 'over' : 'side');

	public closeMenuOnSmallerScreens(): void {
		if (this.isMobile() && this.sideNav) {
			this.sideNav.close();
		}
	}
}
