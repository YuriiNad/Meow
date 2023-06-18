import { Routes } from '@angular/router';

export enum RootPath {
	HOME = 'home'
}

export const ROOT_ROUTES: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: RootPath.HOME,
	},
	{
		path: RootPath.HOME,
		loadComponent: () => import('../../modules/home/home.component'),
	},
	{
		path: '**',
		redirectTo: RootPath.HOME
	}
]


