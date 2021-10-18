import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPageScrollModule } from 'ngx-page-scroll';


// This Module's Components
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { JobsComponent } from "./jobs/jobs.component";
import { NewsComponent } from "./news/news.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { SchooldistrictsComponent } from "./schooldistricts/schooldistricts.component";
import { RockComponent } from "./rock/rock.component";
import { StellarComponent } from "./stellar/stellar.component";
import { DetailComponent } from "./detail/detail.component";
import { TenaciousComponent } from "./tenacious/tenacious.component";
import { CustomerComponent } from "./customer/customer.component";

export const routes: Routes = [
	{
		path: '', component: LayoutComponent, children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent, pathMatch: 'full'},
			{ path: 'jobs/:id', component: JobsComponent, pathMatch: 'full' },
			// { path: 'about', component: AboutComponent },
			{ path: 'about/:id', component: AboutComponent, pathMatch: 'full' },
            { path: 'news', component: NewsComponent, pathMatch: 'full' },
			{ path: 'contact', component: ContactComponent, pathMatch: 'full' },
			{ path: 'login', component: LoginComponent, pathMatch: 'full' },
			{ path: 'school/:id', component:SchooldistrictsComponent, pathMatch:'full'},
			{ path: 'rock', component:RockComponent, pathMatch:'full'},
			{path: 'stellar', component:StellarComponent, pathMatch:'full'},
			{path: 'detail', component:DetailComponent, pathMatch:'full'},
			{path: 'tenacious', component:TenaciousComponent, pathMatch:'full'},
			{path: 'customer', component:CustomerComponent, pathMatch:'full'},
		]
	}
	];

@NgModule({
	imports: [
		ReactiveFormsModule,
		FormsModule,
		NgxPageScrollModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		HomeComponent,
		LayoutComponent,
		FooterComponent,
		HeaderComponent,
		AboutComponent,
		JobsComponent,
		NewsComponent,
		ContactComponent,
		LoginComponent,
		SchooldistrictsComponent,
		RockComponent,
		StellarComponent,
		DetailComponent,
		TenaciousComponent,
		CustomerComponent
	],
	exports: [
		LayoutComponent,
	]
})
export class LayoutModule {
	static routes = routes;
}

