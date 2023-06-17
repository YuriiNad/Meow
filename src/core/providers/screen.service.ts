import { Inject, Injectable, signal } from '@angular/core';
import { WINDOW } from '../global/tokens';

export enum ScreenSize {
	DesktopXL = 1824,
	DesktopL = 1440,
	DesktopM = 1280,
	Desktop = 1024,
	DesktopS = 850,
	Tablet = 768,
	Phone = 414
}

@Injectable({
	providedIn: 'root'
})
export class ScreenService {
	constructor(@Inject(WINDOW) private window: Window) { }

	get desktopL(): boolean {
		return this.screenWidth > ScreenSize.DesktopL;
	}

	get desktopM(): boolean {
		return this.screenWidth > ScreenSize.DesktopM;
	}

	get desktop(): boolean {
		return this.screenWidth > ScreenSize.Desktop;
	}

	get desktopS(): boolean {
		return this.screenWidth > ScreenSize.DesktopS;
	}

	get tablet(): boolean {
		return this.screenWidth > ScreenSize.Phone
			&& this.screenWidth <= ScreenSize.Tablet;
	}

	get phone(): boolean {
		return this.screenWidth <= ScreenSize.Phone;
	}

	get mobile(): boolean {
		return this.tablet || this.phone;
	}

	private get screenWidth(): number {
		return this.window.innerWidth;
	}
}
