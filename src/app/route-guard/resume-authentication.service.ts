import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { HomescreenService } from './../homescreen.service';
import { ErrorAuthenticationService } from './error-authentication.service';
@Injectable({
  providedIn: 'root',
})
export class ResumeAuthenticationService implements CanActivate {
  rutvikResume: boolean = false;
  constructor(
    private router: Router,
    private homescreenService: HomescreenService,
    private errorAuthenticationService: ErrorAuthenticationService
  ) {}
  canActivate(): boolean {
    if (this.rutvikResume) {
      return true;
    }
    this.homescreenService.homescreen = false;
    this.errorAuthenticationService.error = true;
    this.router.navigate(['error']);
    return false;
  }
}
