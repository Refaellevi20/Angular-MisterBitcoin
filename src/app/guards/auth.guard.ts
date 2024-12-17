import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../../services/user.service' 

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    if (this.userService.checkLoggedIn()) {
      return of(true)
    } else {
      const returnUrl = state.url
      const urlTree = this.router.createUrlTree(['/signup'], {
        queryParams: { returnUrl },
      })
      return of(urlTree)
    }
  }
}
