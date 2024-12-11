import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Contact } from '../app/models/contact.model'; 
import { ContactService } from './contact.service'; 

@Injectable({
  providedIn: 'root',
})
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactService: ContactService) {}
  resolve(
    route: ActivatedRouteSnapshot, //* no update Represents  the way
    state: RouterStateSnapshot //* update the ActivatedRouteSnapshot
  ): Observable<Contact> {
    const id = route.params['id'] //^ easy 
    return this.contactService.getContactById(id)
  }
}
