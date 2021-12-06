import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorAuthenticationService implements CanActivate {
  error: boolean = false;
  constructor() {}
  canActivate(): boolean {
    if (this.error) {
      return true;
    }
    return false;
  }
}
