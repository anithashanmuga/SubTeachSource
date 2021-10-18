
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';



import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(ROUTES, {
			useHash: false,
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

