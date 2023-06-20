import { Directive, EventEmitter, Input, Output } from "@angular/core";

@Directive()
export class BasicFilter<T> {
	@Input({ required: true }) options!: T[];
	@Output() onSelect = new EventEmitter<keyof T>();
}
