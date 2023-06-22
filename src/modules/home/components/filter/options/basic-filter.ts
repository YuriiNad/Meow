import { Directive, EventEmitter, Input, Output } from "@angular/core";

@Directive()
export abstract class BasicFilter<T> {
	@Input({ required: true }) options!: T[];
	@Output() onSelect = new EventEmitter<keyof T>();
	abstract set initValue(val: unknown)
}
