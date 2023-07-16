import {Injectable, inject} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PermissionsService  {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    return this.checkToken();
  }

  checkToken() {
    if (sessionStorage.getItem("token") &&
      sessionStorage.getItem("token")?.trim()?.length! > 0) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const ApplicationGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}
