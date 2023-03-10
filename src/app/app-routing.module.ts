import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { PartnershipComponent } from './partnership/partnership.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'isRight' } },
  { path: 'menu', component: MenuComponent , data: { animation: 'isRight' } },
  { path: 'producing-process', component: HomeComponent , data: { animation: 'isRight' } },
  { path: 'our-story', component: OurStoryComponent , data: { animation: 'isRight' } },
  { path: 'partnership', component: PartnershipComponent , data: { animation: 'isRight' } },
  { path: 'contact', component: ContactComponent , data: { animation: 'isRight' } },
  { path: '**', redirectTo: '' , data: { animation: 'isRight' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
