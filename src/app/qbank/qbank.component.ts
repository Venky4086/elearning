import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QBankserviceService } from 'src/services/q-bankservice.service';
import { QuestionService } from 'src/services/question.service';
declare var $: any;
@Component({
  selector: 'app-qbank',
  templateUrl: './qbank.component.html',
  styleUrls: ['./qbank.component.css']
})
export class QbankComponent implements OnInit {
  Adset = false;
  q_bank_mode = false;
  test_mode = false;
  submitted = false;
  testsubmitted = false;
  message: any;
  file: any;
  filename: any;
  filesize: any;
  filestatus:any;
  allsubcategroys: any;
  levelsubmitted = false;
  constructor(private router:Router,private qbankservice:QBankserviceService,private toastr:ToastrService,private questionservice:QuestionService ,private spinner:NgxSpinnerService,private fb: FormBuilder) {
   }
   Addset = this.fb.group({
    setname:['', Validators.required]
  })
   Levels = this.fb.group({
     level:['', Validators.required],
     exam:['', Validators.required],
    subcategory_name:['', Validators.required],
   })
   AddQbank = this.fb.group({
    question: ['', Validators.required],
    answer_one : ['', Validators.required],
    answer_two : ['', Validators.required],
    answer_three : ['', Validators.required],
    answer_four: ['', Validators.required],
    correct_answer:['', Validators.required],
    description: ['', Validators.required],
    image:['', Validators.required]
  })
  AddTest = this.fb.group({
    question: ['', Validators.required],
    answer_one : ['', Validators.required],
    answer_two : ['', Validators.required],
    answer_three : ['', Validators.required],
    answer_four: ['', Validators.required],
    correct_answer:['', Validators.required],
    description: ['', Validators.required],
    image:['', Validators.required],
    timer:['', Validators.required]
  })
  ngOnInit(): void {
    this.getallsubcategory();
  }
  get l(){
    return this.Levels.controls
  }
  get t(){
    return this.AddTest.controls
  }
  get q(){
    return this.AddQbank.controls
  }
  get s(){
    return this.Addset.controls
  }

  // add set

  addset(){
    this.Adset = !this.Adset;
  }
  addsetsubmit(){
    this.submitted = true;
    if(this.Addset.invalid){
      return
    }
    else{
      console.log(this.Addset.value)
    }
  }

  q_bank(){
    this.levelsubmitted = true;
    if(this.Levels.invalid){
      return
    }
   else{
    this.q_bank_mode = true;
    this.test_mode = false;
   }
  }
  test(){
    this.levelsubmitted = true;
    if(this.Levels.invalid){
      return
    }
   else{
    this.test_mode = true;
    this.q_bank_mode = false;
   }
  }

//  sub category 

  getallsubcategory(){
    this.spinner.show();
    this.qbankservice.qbank_subcategory_list().subscribe((res)=>{
    if(res){
      this.spinner.hide();
      console.log(res);
      this.allsubcategroys = res;
    }
    },(error)=>{
      console.log(error);
    })
  }

  // options

  one(event:any){
      for(let i=0;i<this.data.length;i++){
        if(i == 0){
            this.data[i].optionName = event.target.value;
        }
      }
  }
  two(event:any){
    for(let i=0;i<this.data.length;i++){
      if(i == 1){
          this.data[i].optionName = event.target.value;
      }
    }
  }
  three(event:any){
    for(let i=0;i<this.data.length;i++){
      if(i == 2){
          this.data[i].optionName = event.target.value;
      }
    }
  }
  four(event:any){
    for(let i=0;i<this.data.length;i++){
      if(i == 3){
          this.data[i].optionName = event.target.value;
      }
    }
  }

 data:any[]=[
   {id:1,},
   {id:2,},
   {id:3,},
   {id:4,}
 ]

 onFileSelect(event:any) {
  if (event.target.files.length > 0) {
    this.file = event.target.files[0];
    
    console.log(this.file);

    console.log(this.file.name);

    // reader.readAsDataURL(file);
    this.filestatus = true;
    this.filename = this.file.name;
    this.filesize = this.file.size;
    if (this.filesize > 2097152) {
      this.filestatus = false;
      this.toastr.error(this.message, 'File size should not be larger than 2 mb', {
        positionClass: 'toast-top-center'
      });
    }
    else {
      this.filestatus = true;
    }

  }
}

// add qubank mode

  addQbank(){
    this.submitted = true;
    if(this.Levels.invalid || this.AddQbank.invalid){
      return
    }
      else{
       const formData = new FormData();
       formData.append('level',this.Levels.value.level);
       formData.append('sub_category',this.Levels.value.subcategory_name);
       formData.append('examtype',this.Levels.value.exam);
       formData.append('question', this.AddQbank.value.question);
       formData.append('answer1', this.AddQbank.value.answer_one);
       formData.append('answer2', this.AddQbank.value.answer_two);
       formData.append('answer3', this.AddQbank.value.answer_three);
       formData.append('answer4', this.AddQbank.value.answer_four);
       formData.append('correctanswer', this.AddQbank.value.correct_answer);
       formData.append('explanation', this.AddQbank.value.description);
       formData.append('image', this.file);
      this.qbankservice.add_qbank(formData).subscribe((res)=>{
        console.log(res);
        this.toastr.success(this.message,res.Message, {
          positionClass: 'toast-top-center'
        });
        sessionStorage.setItem('modes','qbank');
        this.router.navigate(['/elearning/q_bank_allquestions']);
      },(error)=>{
        console.error(error);
        this.toastr.error(this.message,'somthing went wrong', {
          positionClass: 'toast-top-center'
        });
      })
      }
  }

  // add test mode

  addtest(){
    this.testsubmitted = true;
    // this.submitted = true;
    if(this.Levels.invalid || this.AddTest.invalid){
      return
    }
      else{
       const formData = new FormData();
       formData.append('level',this.Levels.value.level);
       formData.append('sub_category',this.Levels.value.subcategory_name);
       formData.append('examtype',this.Levels.value.exam);
       formData.append('question', this.AddTest.value.question);
       formData.append('answer1', this.AddTest.value.answer_one);
       formData.append('answer2', this.AddTest.value.answer_two);
       formData.append('answer3', this.AddTest.value.answer_three);
       formData.append('answer4', this.AddTest.value.answer_four);
       formData.append('correctanswer', this.AddTest.value.correct_answer);
       formData.append('explanation', this.AddTest.value.description);
       formData.append('image', this.file);
       formData.append('timer', this.AddTest.value.timer)
      this.qbankservice.add_testmode(formData).subscribe((res)=>{
        console.log(res);
        this.toastr.success(this.message,res.Message, {
          positionClass: 'toast-top-center'
        });
        sessionStorage.setItem('modes','testmode');
        this.router.navigate(['/elearning/q_bank_allquestions']);
      },(error)=>{
        console.error(error);
        this.toastr.error(this.message,'somthing went wrong', {
          positionClass: 'toast-top-center'
        });
      })
      }
  }

}
