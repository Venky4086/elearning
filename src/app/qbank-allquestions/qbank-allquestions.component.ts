import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QBankserviceService } from 'src/services/q-bankservice.service';
import { QuestionService } from 'src/services/question.service';
declare var $: any;

@Component({
  selector: 'app-qbank-allquestions',
  templateUrl: './qbank-allquestions.component.html',
  styleUrls: ['./qbank-allquestions.component.css']
})
export class QbankAllquestionsComponent implements OnInit {
  q_bank_mode = false;
  test_mode = false;
  allqbankmode: any;
  alltestmode: any;
  message:any;
  deleteqbank_id: any;
  no_data = false
  deletetest_id: any;
  constructor(private router:Router,private qbankservice:QBankserviceService,private toastr:ToastrService,private questionservice:QuestionService ,private spinner:NgxSpinnerService,private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('modes') === 'qbank'){
     this.q_bank_mode = true;
    }
    else{
     this.test_mode = true;
    }
    this.getallqbankmode();
    this.getalltestmode();
  }
  q_bank(){
    this.q_bank_mode = true;
    this.test_mode = false
  }
  test(){
    this.q_bank_mode = false;
    this.test_mode = true;
  }

//  all qbank mode

getallqbankmode(){
  this.spinner.show();
  this.qbankservice.qbank_list().subscribe((res)=>{
    console.log(res);
    if(res){
     if(res == 0){
      this.allqbankmode = res
      this.spinner.hide();
      this.no_data = true;
     }
     else{
      this.allqbankmode = res
      this.spinner.hide();
      this.no_data = false;
     }
    }
    else{
      console.warn(res);
    }
  })
}

// edit qbank

edit_qbank(qubank_id:number){
  this.router.navigate(['/elearning/qbank_edit',qubank_id]);
}

// q bank mode delete

  delete_qns(deleteqns_id:any){
  this.deleteqbank_id = deleteqns_id
  $('#deleteQns').show();
  }
  canceldeletqns(){
  $('#deleteQns').hide();
  }
  deletqns(){
    this.qbankservice.delete_qbank(this.deleteqbank_id).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'Sucessfully deleted the question', {
        positionClass: 'toast-top-center'
      });
      this.getallqbankmode();
      $('#deleteQns').hide();
    },(error)=>{
      console.error(error);
        this.toastr.error(this.message,'Somthing went wrong', {
        positionClass: 'toast-top-center'
      });
      $('#deleteQns').hide();
    })
  }


//  all test mode

getalltestmode(){
  this.spinner.show();
  this.qbankservice.testmode_list().subscribe((res)=>{
    console.log(res);
    if(res){
      if(res == 0){
        this.alltestmode = res
        this.spinner.hide();
        this.no_data = true;
       }
       else{
        this.alltestmode = res
        this.spinner.hide();
        this.no_data = false;
       }
    }
    else{
      console.warn(res);
    }
  })
}


// edit qbank

edit_testqns(test_id:number){
  this.router.navigate(['/elearning/test_edit',test_id]);
}

// q tetst delete

  delete_testqns(deletetestqns_id:any){
  this.deletetest_id = deletetestqns_id
  $('#deletetestQns').show();
  }
  canceldeletetestqns(){
  $('#deletetestQns').hide();
  }
  deletetestqns(){
    this.qbankservice.delete_testmode(this.deletetest_id).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'Sucessfully deleted the question', {
        positionClass: 'toast-top-center'
      });
      this.getalltestmode();
      $('#deletetestQns').hide();
    },(error)=>{
      console.error(error);
        this.toastr.error(this.message,'Somthing went wrong', {
        positionClass: 'toast-top-center'
      });
      $('#deletetestQns').hide();
    })
  }


}
