import { inject } from "@angular/core";
import { ScreenService } from "../providers/screen.service";

export function getColumns() {
	const screen = inject(ScreenService);
	let columns = 2
	switch (true) {
		case screen.desktopL:
			columns = 4;
			break;
		case screen.desktop:
			columns = 3;
			break;
		default: columns = 2;
	};

	return columns
}