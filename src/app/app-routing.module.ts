import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactResolver } from '../services/contact.resolver';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './cmps/contact-signup/contact-signup.component';


const routes: Routes = [
  {
    path: 'contact',
    component: ContactIndexComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'edit',
        component: ContactEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'edit/:id',
        component: ContactEditComponent,
        resolve: { contact: ContactResolver },
        canActivate: [AuthGuard],
      }
    ]
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent, //* they are also children how works idk
    resolve: { contact: ContactResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
