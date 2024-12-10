import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactResolver } from '../services/contact.resolver';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactIndexComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent, //* they are also children how works idk
    resolve: { contact: ContactResolver },
  },
  {
    path: '',
    component: HomePageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
