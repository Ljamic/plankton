import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavigationComponent,
  		CardComponent,
    	FooterComponent,
     MenuComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
