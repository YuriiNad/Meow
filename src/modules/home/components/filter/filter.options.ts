export interface IBasicFilterItemOptions<T> {
	title: string;
	value: T;
}

export const AMOUNT_RESULT_OPTIONS: IBasicFilterItemOptions<number>[] = [
	{
		title: '10 items',
		value: 10,
	},
	{
		title: '15 items',
		value: 15,
	},
	{
		title: '20 items',
		value: 20,
	},
]