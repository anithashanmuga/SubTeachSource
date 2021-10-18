import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

export const ROUTES: Routes = [

	// { path: '', redirectTo: '', pathMatch: 'full'},
	{ path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
	// { path: 'nav', loadChildren: './layout/nav/nav.component' },
	{ path:'nav', loadChildren:'./layout/header/header.component'},
	{ path: '**', redirectTo: '', pathMatch: 'full'},
];

