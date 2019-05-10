import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild,
  CanLoad, Route, UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router, private authinticationService: AuthenticationService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (true) {
      this.router.navigate(['/']);
      return false;
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}