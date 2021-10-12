import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router:Router,private breakpointObserver: BreakpointObserver) {

  }

// heading

  get heading(){
    return sessionStorage.getItem('heading')
  }
  dashboard(){
    sessionStorage.setItem('heading', 'DashBoard')
    // this.router.navigate(['/dashboard']);
  }
  user_management(){
    // this.router.navigate(['/usermanagment']);
    sessionStorage.setItem('heading', 'User Management')
  }
  daily_boost(){
    // this.router.navigate(['/dailyboost']);
    sessionStorage.setItem('heading', 'Daily Boost')
  }
  question_of_the_day(){
    sessionStorage.setItem('heading', 'Question Of The Day')
  }
  q_bank(){
    sessionStorage.setItem('heading', 'Q & Bank')
  }
  previous_qpapers(){
    sessionStorage.setItem('heading', 'Previous Qpaper')
  }
  group_discussion(){
    sessionStorage.setItem('heading', 'Group Discussion')
  }
  live_class(){
    sessionStorage.setItem('heading', 'Live Class')
  }
  prime(){
    sessionStorage.setItem('heading', 'Prime')
  }
  different_digontics(){
    sessionStorage.setItem('heading', 'Different Diagnotics')
  }
  recent_updates(){
    sessionStorage.setItem('heading', 'Recent Updates')
  }
  value(){
    sessionStorage.setItem('heading', 'Value')
  }
  ask_doubts(){
    sessionStorage.setItem('heading', 'Ask Doubts')
  }
  icards(){
    sessionStorage.setItem('heading', 'Icards')
  }
  audio(){
    sessionStorage.setItem('heading', 'Audio')
  }
  past_exam(){
    sessionStorage.setItem('heading', 'Past Exam Topics')
  }
  image_bank(){
    sessionStorage.setItem('heading', 'Image Bank')
  }
  wall_poster(){
    sessionStorage.setItem('heading', 'Wall Poster')
  }
  suggested(){
    sessionStorage.setItem('heading', 'Suggested')
  }
  q_d(){
    sessionStorage.setItem('heading', 'Question Discussion')
  }
  t_d(){
    sessionStorage.setItem('heading', 'Test Discussion')
  }
  shots(){
    sessionStorage.setItem('heading', 'Shots')
  }
  faculty(){
    sessionStorage.setItem('heading', 'Faculty')
  }
  social_media(){
    sessionStorage.setItem('heading', 'Social Media')
  }
  faq(){
    sessionStorage.setItem('heading', 'FAQ')
  }
  terms_conditions(){
    sessionStorage.setItem('heading', 'Terms Conditions')
  }
  contactus(){
    sessionStorage.setItem('heading', 'Contact Us')
  }
  aboutus(){
    sessionStorage.setItem('heading', 'About Us') 
  }
}
