import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ApiServiceService } from './api-services/api-service.service';
import { AllSubredditsComponent } from './all-subreddits/all-subreddits.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserEnteredSubredditComponent } from './all-subreddits/user-entered-subreddit/user-entered-subreddit.component';
import { AllSubredditsInfoComponent } from './all-subreddits/all-subreddits-info/all-subreddits-info.component';
import { ErrorOccuredComponent } from './all-subreddits/error-occured/error-occured.component';
import { UsersInformationComponent } from './users-information/users-information.component';
import { SubredditAuthenticationService } from './route-guard/subreddit-authentication.service';
import { UsersAuthentication } from './route-guard/users-authentication.service';
import { WrongComponent } from './wrong/wrong.component';
import { HomeComponent } from './home/home.component';
import { HomescreenService } from './homescreen.service';
import { ResumeAuthenticationService } from './route-guard/resume-authentication.service';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ErrorAuthenticationService } from './route-guard/error-authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    AllSubredditsComponent,
    UserEnteredSubredditComponent,
    AllSubredditsInfoComponent,
    ErrorOccuredComponent,
    UsersInformationComponent,
    WrongComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTableModule,
    NgxSpinnerModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [
    ApiServiceService,
    SubredditAuthenticationService,
    UsersAuthentication,
    HomescreenService,
    ResumeAuthenticationService,
    ErrorAuthenticationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
