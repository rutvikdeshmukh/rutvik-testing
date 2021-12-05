import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-manual-lazy-loading',
  templateUrl: './manual-lazy-loading.component.html',
  styleUrls: ['./manual-lazy-loading.component.css'],
})
export class ManualLazyLoadingComponent implements OnInit {
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
