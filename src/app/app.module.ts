import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DifferentDignoticsComponent } from './different-dignotics/different-dignotics.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DailyboostComponent } from './dailyboost/dailyboost.component';
import { FaqComponent } from './faq/faq.component';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { QuestionOfTheDayComponent } from './question-of-the-day/question-of-the-day.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { LiveClassComponent } from './live-class/live-class.component';
import { LiveTestComponent } from './live-test/live-test.component';
import { RecentUpdatesComponent } from './recent-updates/recent-updates.component';
import { ValueComponent } from './value/value.component';
import { AskDoubtComponent } from './ask-doubt/ask-doubt.component';
import { IcardsComponent } from './icards/icards.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImgbankComponent } from './imgbank/imgbank.component';
import { WallposterComponent } from './wallposter/wallposter.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { QDComponent } from './q-d/q-d.component';
import { ShotsComponent } from './shots/shots.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { HttpClientModule } from '@angular/common/http';
import { ElearningService } from 'src/services/elearning.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CKEditorModule } from 'ng2-ckeditor';
import { RecentcategoriesComponent } from './recentcategories/recentcategories.component';
import { RecentsubcategoriesComponent } from './recentsubcategories/recentsubcategories.component';
import { ValuecategoriesComponent } from './valuecategories/valuecategories.component';
import { ValuesubcategoriesComponent } from './valuesubcategories/valuesubcategories.component';
import { AskcategoriesComponent } from './askcategories/askcategories.component';
import { AsksubcategoriesComponent } from './asksubcategories/asksubcategories.component';
import { IcardscategoriesComponent } from './icardscategories/icardscategories.component';
import { IcardssubcategoriesComponent } from './icardssubcategories/icardssubcategories.component';
import { WalpostercategoriesComponent } from './walpostercategories/walpostercategories.component';
import { WalpostersubcategoriesComponent } from './walpostersubcategories/walpostersubcategories.component';
import { ShotscategoriesComponent } from './shotscategories/shotscategories.component';
import { ShotssubcategoriesComponent } from './shotssubcategories/shotssubcategories.component';
import { TDComponent } from './t-d/t-d.component';
import { TDcategoriesComponent } from './t-dcategories/t-dcategories.component';
import { TDsubcategoriesComponent } from './t-dsubcategories/t-dsubcategories.component';
import { QDcategoryComponent } from './q-dcategory/q-dcategory.component';
import { FooterComponent } from './footer/footer.component';
import { QbankComponent } from './qbank/qbank.component';
import { QbankcategoryComponent } from './qbankcategory/qbankcategory.component';
import { QbanksubcategoryComponent } from './qbanksubcategory/qbanksubcategory.component';
import { QbankAllquestionsComponent } from './qbank-allquestions/qbank-allquestions.component';
import { PreviousQpapersComponent } from './previous-qpapers/previous-qpapers.component';
import { AudioComponent } from './audio/audio.component';
import { PastExamTopicsComponent } from './past-exam-topics/past-exam-topics.component';
import { TestComponent } from './test/test.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { LiveclassBannerComponent } from './liveclass-banner/liveclass-banner.component';
import { AudiocategoriesComponent } from './audiocategories/audiocategories.component';
import { AudiosubcategoriesComponent } from './audiosubcategories/audiosubcategories.component';
import { PastexamsubcategoriesComponent } from './pastexamsubcategories/pastexamsubcategories.component';
import { PastexamcategoriesComponent } from './pastexamcategories/pastexamcategories.component';
import { ImagbankcategoryComponent } from './imagbankcategory/imagbankcategory.component';
import { ImagbanksubcategoryComponent } from './imagbanksubcategory/imagbanksubcategory.component';
import { NgxSpinnerModule } from "ngx-spinner";
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { QuestionService } from 'src/services/question.service';
import { QuestionviewComponent } from './questionview/questionview.component';
import { PrimevideosComponent } from './primevideos/primevideos.component';
import { PrimecategoryComponent } from './primecategory/primecategory.component';
import { PrimesubcategoryComponent } from './primesubcategory/primesubcategory.component';
import { LiveclasssubcategoryComponent } from './liveclasssubcategory/liveclasssubcategory.component';
import { LiveclasscategoryComponent } from './liveclasscategory/liveclasscategory.component';
import { PreviousQpaperscategoryComponent } from './previous-qpaperscategory/previous-qpaperscategory.component';
import { PreviousQpaperssubcategoryComponent } from './previous-qpaperssubcategory/previous-qpaperssubcategory.component';
import { DailyboostbannersComponent } from './dailyboostbanners/dailyboostbanners.component';
import { GroupdiscussionService } from 'src/services/groupdiscussion.service';
import { UserdatasService } from 'src/services/userdatas.service';
import { TestdiscussionService } from 'src/services/testdiscussion.service';
import { QBankserviceService } from 'src/services/q-bankservice.service';
import { QbankeditComponent } from './qbankedit/qbankedit.component';
import { LoginComponent } from './auth/login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TesteditComponent } from './testedit/testedit.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DifferentDignoticsComponent,
    AboutusComponent,
    ContactusComponent,
    DailyboostComponent,
    FaqComponent,
    GroupDiscussionComponent,
    QuestionOfTheDayComponent,
    UserManagmentComponent,
    LiveClassComponent,
    LiveTestComponent,
    RecentUpdatesComponent,
    ValueComponent,
    AskDoubtComponent,
    IcardsComponent,
    SocialMediaComponent,
    TermsAndConditionsComponent,
    DashboardComponent,
    ImgbankComponent,
    WallposterComponent,
    SuggestedComponent,
    QDComponent,
    ShotsComponent,
    FacultyComponent,
    CategoriesComponent,
    SubcategoriesComponent,
    RecentcategoriesComponent,
    RecentsubcategoriesComponent,
    ValuecategoriesComponent,
    ValuesubcategoriesComponent,
    AskcategoriesComponent,
    AsksubcategoriesComponent,
    IcardscategoriesComponent,
    IcardssubcategoriesComponent,
    WalpostercategoriesComponent,
    WalpostersubcategoriesComponent,
    ShotscategoriesComponent,
    ShotssubcategoriesComponent,
    TDComponent,
    TDcategoriesComponent,
    TDsubcategoriesComponent,
    QDcategoryComponent,
    FooterComponent,
    QbankComponent,
    QbankcategoryComponent,
    QbanksubcategoryComponent,
    QbankAllquestionsComponent,
    PreviousQpapersComponent,
    AudioComponent,
    PastExamTopicsComponent,
    TestComponent,
    DiscussionComponent,
    LiveclassBannerComponent,
    AudiocategoriesComponent,
    AudiosubcategoriesComponent,
    PastexamsubcategoriesComponent,
    PastexamcategoriesComponent,
    ImagbankcategoryComponent,
    ImagbanksubcategoryComponent,
    QuestionviewComponent,
    PrimevideosComponent,
    PrimecategoryComponent,
    PrimesubcategoryComponent,
    LiveclasssubcategoryComponent,
    LiveclasscategoryComponent,
    PreviousQpaperscategoryComponent,
    PreviousQpaperssubcategoryComponent,
    DailyboostbannersComponent,
    QbankeditComponent,
    LoginComponent,
    LandingpageComponent,
    TesteditComponent,
  ],
  imports: [
    CKEditorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    CKEditorModule,
    NgxSpinnerModule,
    PdfViewerModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [ElearningService,QuestionService,GroupdiscussionService,UserdatasService,TestdiscussionService,QBankserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
