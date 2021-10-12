import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elearning';
  hasNetworkConnection: any;
  hasInternetAccess: any;
  status: any;
  message:any;
  data: any;
  constructor(private route:Router,private toastr:ToastrService,)
  {
    console.log(this.constructor.name);
    // this.connectionService.monitor().subscribe(currentState => {
    //   this.hasNetworkConnection = currentState.hasNetworkConnection;
    //   this.hasInternetAccess = currentState.hasInternetAccess;
    //   if (this.hasNetworkConnection && this.hasInternetAccess) {
    //     this.status = 'ONLINE';
    //     console.log(this.route.url);
    //     console.log(this.status);

    //   } else {
    //     this.status = 'OFFLINE';
    //     console.log(this.status);
    //   }
    // });
  }
}
