import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ElearningService } from 'src/services/elearning.service';
import { UserdatasService } from 'src/services/userdatas.service';
declare var $: any;

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {
  userdatas: any;
  user_phone: any;
  message: any;
  user_id: any;
  user_status:any;
  no_data =false
  constructor(private spinner:NgxSpinnerService,private userdatasservice:UserdatasService,private router:Router,private elearningservice:ElearningService,private toastr:ToastrService) { }

  ngOnInit(): void {
  this.getalluserlist();
  }

// all user list

  getalluserlist(){
    this.spinner.show();
    this.userdatasservice.allusers().subscribe((res)=>{
    if(res){
      //  for (let i = 0; i < this.userdatas.length; i++) {
      //    console.log(res[i].is_blocked);
      //    this.user_status = res[i].is_blocked  
      //    if(this.user_status === true){
      //     console.log('if')
      //     this.block = true;
      //     this.unblock = false;
      //   }
      //   else{
      //     console.log('else')
      //     this.block = false;
      //     this.unblock = true;
      //   }   
      //  }
      // this.spinner.hide();

      if(res.length == 0){
        console.log(res)
        this.userdatas = res
        this.spinner.hide()
        this.no_data = true;
      }
      else{
        console.log(res)
        this.userdatas = res
        this.spinner.hide()
        this.no_data = false;
      }
    }
    else{
      console.warn(res)
    }
    },(error)=>{
      console.error(error);
    })
  }

  block_button(user_id:any){
   const data = {
    is_blocked:true
   }
    this.userdatasservice.blockusers(user_id,data).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'User successfully blocked',{
        positionClass: 'toast-top-center'
      });
    this.getalluserlist();
    },(error)=>{
      console.log(error);
      this.toastr.error(this.message,'Somthing went wrong',{
        positionClass: 'toast-top-center'
      });
    })
  }

  un_block_button(user_id:any){
    const data = {
      is_blocked:false
     }
      this.userdatasservice.blockusers(user_id,data).subscribe((res)=>{
        console.log(res);
        this.toastr.success(this.message,'User successfully un blocked',{
          positionClass: 'toast-top-center'
        });
      this.getalluserlist();
      },(error)=>{
        console.log(error);
        this.toastr.error(this.message,'Somthing went wrong',{
          positionClass: 'toast-top-center'
        });
      })
  }

  // delete users

  deletemodaluser(id:any){
    $('#deleteuser').show();
    this.user_id = id;
    console.log(this.user_id);
    $('#deleteuser').modal('show')
  }
  deleteuser(){
    this.userdatasservice.deleteusers(this.user_id).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'User data successfully deleted',{
        positionClass: 'toast-top-center'
      });
    this.getalluserlist();
    $('#deleteuser').modal('hide')
    },(error)=>{
      console.log(error);
      this.toastr.error(this.message,'Somthing went wrong',{
        positionClass: 'toast-top-center'
      });
    $('#deleteuser').modal('hide')
    })
  }
  closedeleteuser(){
    $('#deleteuser').modal('hide')
  }

}
