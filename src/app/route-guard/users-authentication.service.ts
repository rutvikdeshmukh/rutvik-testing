import { HomescreenService } from './../homescreen.service';
import { ErrorAuthenticationService } from './error-authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersAuthentication implements CanActivate {
  usersInformation: boolean = false;
  constructor(
    private router: Router,
    private homescreenService: HomescreenService,
    private errorAuthenticationService: ErrorAuthenticationService
  ) {}
  canActivate(): boolean {
    if (this.usersInformation) {
      return true;
    }
    this.homescreenService.homescreen = false;
    console.log(this.homescreenService.homescreen);
    this.errorAuthenticationService.error = true;
    this.router.navigate(['error']);
    return false;
  }
}
