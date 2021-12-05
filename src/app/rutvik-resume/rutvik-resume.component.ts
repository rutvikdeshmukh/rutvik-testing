import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-rutvik-resume',
  templateUrl: './rutvik-resume.component.html',
  styleUrls: ['./rutvik-resume.component.css'],
})
export class RutvikResumeComponent implements OnInit {
  loading: boolean = true;
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.loading = false;
    }, 3000);
  }
}
