import { Provider } from "@angular/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MAT_RADIO_DEFAULT_OPTIONS } from "@angular/material/radio";

const FORM_FIELD_OPTIONS: Provider = {
	provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
	useValue: {
		subscriptSizing: 'dynamic',
		appearance: 'outline'
	}
};

const RADIO_BUTTON_OPTIONS: Provider = {
	provide: MAT_RADIO_DEFAULT_OPTIONS,
	useValue: { color: 'primary' },
};

export const MATERIAL_COMPONENTS_CONFIGS: Provider[] = [
	FORM_FIELD_OPTIONS,
	RADIO_BUTTON_OPTIONS,
]