import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AskDoubtComponent } from './ask-doubt/ask-doubt.component';
import { AskcategoriesComponent } from './askcategories/askcategories.component';
import { AsksubcategoriesComponent } from './asksubcategories/asksubcategories.component';
import { AudioComponent } from './audio/audio.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DailyboostComponent } from './dailyboost/dailyboost.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DifferentDignoticsComponent } from './different-dignotics/different-dignotics.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FaqComponent } from './faq/faq.component';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { IcardsComponent } from './icards/icards.component';
import { IcardscategoriesComponent } from './icardscategories/icardscategories.component';
import { IcardssubcategoriesComponent } from './icardssubcategories/icardssubcategories.component';
import { ImgbankComponent } from './imgbank/imgbank.component';
import { LiveClassComponent } from './live-class/live-class.component';
import { PastExamTopicsComponent } from './past-exam-topics/past-exam-topics.component';
import { PreviousQpapersComponent } from './previous-qpapers/previous-qpapers.component';
import { QDComponent } from './q-d/q-d.component';
import { QDcategoryComponent } from './q-dcategory/q-dcategory.component';
import { QbankAllquestionsComponent } from './qbank-allquestions/qbank-allquestions.component';
import { QbankComponent } from './qbank/qbank.component';
import { QbankcategoryComponent } from './qbankcategory/qbankcategory.component';
import { QbanksubcategoryComponent } from './qbanksubcategory/qbanksubcategory.component';
import { QuestionOfTheDayComponent } from './question-of-the-day/question-of-the-day.component';
import { RecentUpdatesComponent } from './recent-updates/recent-updates.component';
import { RecentcategoriesComponent } from './recentcategories/recentcategories.component';
import { RecentsubcategoriesComponent } from './recentsubcategories/recentsubcategories.component';
import { ShotsComponent } from './shots/shots.component';
import { ShotscategoriesComponent } from './shotscategories/shotscategories.component';
import { ShotssubcategoriesComponent } from './shotssubcategories/shotssubcategories.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { TDComponent } from './t-d/t-d.component';
import { TDcategoriesComponent } from './t-dcategories/t-dcategories.component';
import { TDsubcategoriesComponent } from './t-dsubcategories/t-dsubcategories.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { TestComponent } from './test/test.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { ValueComponent } from './value/value.component';
import { ValuecategoriesComponent } from './valuecategories/valuecategories.component';
import { ValuesubcategoriesComponent } from './valuesubcategories/valuesubcategories.component';
import { WallposterComponent } from './wallposter/wallposter.component';
import { WalpostercategoriesComponent } from './walpostercategories/walpostercategories.component';
import { WalpostersubcategoriesComponent } from './walpostersubcategories/walpostersubcategories.component';
import { LiveclassBannerComponent } from './liveclass-banner/liveclass-banner.component';
import { AudiosubcategoriesComponent } from './audiosubcategories/audiosubcategories.component';
import { AudiocategoriesComponent } from './audiocategories/audiocategories.component';
import { PastexamsubcategoriesComponent } from './pastexamsubcategories/pastexamsubcategories.component';
import { PastexamcategoriesComponent } from './pastexamcategories/pastexamcategories.component';
import { ImagbanksubcategoryComponent } from './imagbanksubcategory/imagbanksubcategory.component';
import { ImagbankcategoryComponent } from './imagbankcategory/imagbankcategory.component';
import { QuestionviewComponent } from './questionview/questionview.component';
import { PrimevideosComponent } from './primevideos/primevideos.component';
import { PrimecategoryComponent } from './primecategory/primecategory.component';
import { PrimesubcategoryComponent } from './primesubcategory/primesubcategory.component';
import { LiveclasssubcategoryComponent } from './liveclasssubcategory/liveclasssubcategory.component';
import { LiveclasscategoryComponent } from './liveclasscategory/liveclasscategory.component';
import { PreviousQpaperssubcategoryComponent } from './previous-qpaperssubcategory/previous-qpaperssubcategory.component';
import { PreviousQpaperscategoryComponent } from './previous-qpaperscategory/previous-qpaperscategory.component';
import { DailyboostbannersComponent } from './dailyboostbanners/dailyboostbanners.component';
import { QbankeditComponent } from './qbankedit/qbankedit.component';
import { LoginComponent } from './auth/login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthGuard } from 'src/guard/auth.guard';
import { TesteditComponent } from './testedit/testedit.component';
const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
   path:'elearning',component:LandingpageComponent,
   canActivate: [AuthGuard],
   children: [
    {
      path: "",
      component:DashboardComponent
    },
    {
      path:'dashboard',component:DashboardComponent
    },
    {
      path:'usermanagment',component:UserManagmentComponent
    },
    {
      path:'dailyboost',component:DailyboostComponent
    },
    {
      path:'dailyboostbanner',component:DailyboostbannersComponent
    },
    {
      path:'question_of_the_day',component:QuestionOfTheDayComponent
    },
    {
      path:'view_question',component:QuestionviewComponent
    },
    {
      path:'q_bank',component:QbankComponent
    },
    {
      path:'qbank_edit/:id',component:QbankeditComponent
    },
    {
      path:'test_edit/:id',component:TesteditComponent
    },
    {
      path:'q_bank_category',component:QbankcategoryComponent
    },
    {
      path:'q_bank_subcategory',component:QbanksubcategoryComponent
    },
    {
      path:'q_bank_allquestions',component:QbankAllquestionsComponent
    },
    {
      path:'previous_qpapers',component:PreviousQpapersComponent
    },
    {
      path:'previous_category',component:PreviousQpaperscategoryComponent
    },
    {
      path:'previous_subcategory',component:PreviousQpaperssubcategoryComponent
    },
    {
      path:'groupdisscusion',component:GroupDiscussionComponent
    },
    {
      path:'liveclass',component:LiveClassComponent
    },
    {
      path:'liveclass_category',component:LiveclasscategoryComponent
    },
    {
      path:'liveclass_subcategory',component:LiveclasssubcategoryComponent
    },
    {
      path:'liveclass_banner',component:LiveclassBannerComponent
    },
    {
      path:'prime_video',component:PrimevideosComponent
    },
    {
      path:'prime_category',component:PrimecategoryComponent
    },
    {
      path:'prime_subcategory',component:PrimesubcategoryComponent
    },
    {
      path:'different_dignotics',component:DifferentDignoticsComponent
    },
    {
      path:'categories',component:CategoriesComponent
    },
    {
      path:'subcategories',component:SubcategoriesComponent
    },
    {
      path:'recent_updates',component:RecentUpdatesComponent
    },
    {
      path:'recentcategories',component:RecentcategoriesComponent
    },
    {
      path:'recentsubcategories',component:RecentsubcategoriesComponent
    },
    {
      path:'value',component:ValueComponent
    },
    {
      path:'valuecategories',component:ValuecategoriesComponent
    },
    {
      path:'valuesubcategories',component:ValuesubcategoriesComponent
    },
    {
      path:'ask_doubts',component:AskDoubtComponent
    },
    {
      path:'askcategories',component:AskcategoriesComponent
    },
    {
      path:'asksubcategories',component:AsksubcategoriesComponent
    },
    {
      path:'icards',component:IcardsComponent
    },
    {
      path:'icardscategories',component:IcardscategoriesComponent
    },
    {
      path:'icardssubcategories',component:IcardssubcategoriesComponent
    },
    {
      path:'audio',component:AudioComponent
    },
    {
      path:'audiocategories',component:AudiocategoriesComponent
    },
    {
      path:'audiosubcategories',component:AudiosubcategoriesComponent
    },
    {
      path:'past_exam_topics',component:PastExamTopicsComponent
    },
    {
      path:'past_categories',component:PastexamcategoriesComponent
    },
    {
      path:'past_subcatgories',component:PastexamsubcategoriesComponent
    },
    {
      path:'img_bank',component:ImgbankComponent
    },
    {
      path:'img_bankcategory',component:ImagbankcategoryComponent
    },
    {
      path:'img_banksubcategory',component:ImagbanksubcategoryComponent
    },
    {
      path:'wallposter',component:WallposterComponent
    },
    {
      path:'wallpostercategories',component:WalpostercategoriesComponent
    },
    {
      path:'wallpostersubcategories',component:WalpostersubcategoriesComponent
    },
    {
      path:'suggested',component:SuggestedComponent
    },
    {
      path:'q_d',component:QDComponent
    },
    {
      path:'q_dcategories',component:QDcategoryComponent
    },
    {
      path:'t_d',component:TDComponent
    },
    {
      path:'t_dcategories',component:TDcategoriesComponent
    },
    {
      path:'t_dsubcategories',component:TDsubcategoriesComponent
    },
    {
      path:'disscussion',component:DiscussionComponent
    },
    {
      path:'test',component:TestComponent
    },
    {
      path:'shots',component:ShotsComponent
    },
    {
      path:'shotscategories',component:ShotscategoriesComponent
    },
    {
      path:'shotssubcategories',component:ShotssubcategoriesComponent
    },
    {
      path:'faculty',component:FacultyComponent
    },
    {
      path:'social_media',component:SocialMediaComponent
    },
    {
      path:'faq',component:FaqComponent
    },
    {
      path:'termsandconditions',component:TermsAndConditionsComponent
    },
    {
      path:'contactus',component:ContactusComponent
    },
    {
      path:'aboutus',component:AboutusComponent
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
