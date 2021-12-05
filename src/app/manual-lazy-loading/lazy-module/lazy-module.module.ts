import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualLazyLoadingComponent } from '../manual-lazy-loading.component';
import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ManualLazyLoadingComponent],
  imports: [CommonModule, LazyModuleRoutingModule, NgxSpinnerModule],
})
export class LazyModuleModule {
  entryComponent: any = ManualLazyLoadingComponent;
  constructor() {
    console.log('this is greeat');
  }
}
