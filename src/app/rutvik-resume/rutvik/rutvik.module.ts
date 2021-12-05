import { RutvikResumeComponent } from './../rutvik-resume.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutvikRoutingModule } from './rutvik-routing.module';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [RutvikResumeComponent],
  imports: [CommonModule, RutvikRoutingModule, MatCardModule, NgxSpinnerModule],
})
export class RutvikModule {}
