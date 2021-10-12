import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/services/question.service';
declare var $: any;
@Component({
  selector: 'app-dailyboost',
  templateUrl: './dailyboost.component.html',
  styleUrls: ['./dailyboost.component.css']
})
export class DailyboostComponent implements OnInit {
  number_of_questions:any;
  allbannerlist: any;
  submitted = false;
  main_submitted = false;
  file: any;
  filename: any;
  filesize: any;
  message: any;
  filestatus:any;
  allmainlist: any;
  allquestions: any;
  a_one = "";
  a_two = ""
  a_three = ""
  a_four = ""
  deleteqns_id: any;
  question_id: any;
  singlequestion: any;
  singleanswer_one: any;
  singleanswer_two: any;
  singleanswer_three: any;
  singleanswer_four: any;
  singleexplanation: any;
  singleimage: any;
  single_correct_answer: any;
  updatesubmitted = false;
  daily_booster_id: any;
  no_data = false;
  constructor(private toastr:ToastrService,private questionservice:QuestionService ,private spinner:NgxSpinnerService,private fb: FormBuilder) {
   }
   MainDailyboots = this.fb.group({
     banner:['', Validators.required],
     timer :['',  Validators.required],
     title:['',Validators.required],
     no_of_questions:['', Validators.required],
  });
  AddQns = this.fb.group({
    dailyboostdetail:['', Validators.required],
    question: ['', Validators.required],
    answer_one : ['', Validators.required],
    answer_two : ['', Validators.required],
    answer_three : ['', Validators.required],
    answer_four: ['', Validators.required],
    correct_answer:['', Validators.required],
    description: ['', Validators.required],
    image:['', Validators.required]
  })
  UpdateQns = this.fb.group({
    question: ['', Validators.required],
    answer_one : ['', Validators.required],
    answer_two : ['', Validators.required],
    answer_three : ['', Validators.required],
    answer_four: ['', Validators.required],
    correct_answer:['', Validators.required],
    description: ['', Validators.required],
    image:['', Validators.required]
  })
  ngOnInit(): void {
    this.getallbannerlist();
    this.getall_main_boots();
    this.getallquestions();
  }
  get m() { return this.MainDailyboots.controls; }

  get f() { return this.AddQns.controls; }

  get u(){
    return this.UpdateQns.controls
  }

  getall_main_boots(){
    // this.spinner.show()
    this.questionservice.list_of_dailyboostmain().subscribe((res)=>{
      if(res){
      console.log(res);
      this.allmainlist = res
      // this.spinner.hide()
      }
      else{
        console.warn(res)
      }
    })
  }

  add_main_boots(){
    this.main_submitted = true;
    if(this.MainDailyboots.invalid){
      return
    }
    else{
      console.log(this.MainDailyboots.value.banner);
      console.log(this.MainDailyboots.value.timer);
      console.log(this.MainDailyboots.value.title);
      console.log(this.MainDailyboots.value.no_of_questions);
      const formData = new FormData
      formData.append('banner', this.MainDailyboots.value.banner)
      formData.append('timer', this.MainDailyboots.value.timer)
      formData.append('title', this.MainDailyboots.value.title)
      formData.append('no_of_mcq', this.MainDailyboots.value.no_of_questions)
      this.questionservice.add_dailyboostmain(formData).subscribe((res)=>{
        console.log(res);
        this.getall_main_boots();
        this.toastr.success(this.message, res.Message, {
          positionClass: 'toast-top-center'
        });
      },(error)=>{
        console.log(error);
        this.toastr.error(this.message, 'Somthing went wrong', {
          positionClass: 'toast-top-center'
        });
      })
    }
  }

  createItem() {
    return this.fb.group({
      enter_question: ['',Validators.required],
      option1: ['',Validators.required],
      option2:['',Validators.required],
      option3:['',Validators.required],
      option4:['',Validators.required],
      description:['',Validators.required]
    });
  }
  get addmorequestions () : FormArray {
    return  this.MainDailyboots.get("arr") as FormArray;
  }
  add_number_of_questions(){
    this.number_of_questions =!this.number_of_questions
  }
  add_more_questions(no_of_questions:any){
    console.log(no_of_questions);
    let i;
    for(i=0; i<no_of_questions; i++){
      this.addmorequestions.push(this.createItem())
    }
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
    // get all banner list 

  getallbannerlist(){
    // this.spinner.show()
    this.questionservice.list_of_dailyboostbanner().subscribe((res)=>{
      if(res){
      console.log(res);
      this.allbannerlist = res
      // this.spinner.hide()
      }
      else{
        console.warn(res)
      }
    })
  }


// all questions

getallquestions(){
  this.spinner.show();
  this.questionservice.list_of_daily_question().subscribe((res)=>{
    console.log(res);
    if(res){
      if(res.length == 0){
        this.allquestions = res
        this.spinner.hide()
        this.no_data = true;
      }
      else{
        console.log(res);
        this.allquestions = res
        this.spinner.hide()
        this.no_data = false;
      }
    }
    else{
      console.warn(res);
    }
  },(error)=>{
    console.log(error);
  })
}

// add question

addqns(){
   this.submitted = true;
   if(this.AddQns.invalid){
     return
   }
     else{
       console.log(this.AddQns.value.dailyboostdetail);
      const formData = new FormData();
      formData.append('dailyboostdetail',this.AddQns.value.dailyboostdetail)
      formData.append('question', this.AddQns.value.question);
      formData.append('answer1', this.AddQns.value.answer_one);
      formData.append('answer2', this.AddQns.value.answer_two);
      formData.append('answer3', this.AddQns.value.answer_three);
      formData.append('answer4', this.AddQns.value.answer_four);
      formData.append('correctanswer', this.AddQns.value.correct_answer);
      formData.append('explanation', this.AddQns.value.description);
      formData.append('image', this.file);
     this.questionservice.add_daily_question(formData).subscribe((res)=>{
       console.log(res);
       this.toastr.success(this.message,res.Message, {
         positionClass: 'toast-top-center'
       });
       this.getallquestions();
     },(error)=>{
       console.error(error);
       this.toastr.success(this.message,'somthing went wrong', {
         positionClass: 'toast-top-center'
       });
     })
     }
   }

// update the question

editqns(question_id:any,daily_booster_id:any,Question:any,Answer1:any,Answer2:any,Answer3:any,Answer4:any,correct_answer:any,Explanation:any,image:any){
     $('#editQns').show();
      this.question_id = question_id
      this.daily_booster_id = daily_booster_id
      this.singlequestion = Question
      this.singleanswer_one = Answer1
      this.singleanswer_two = Answer2
      this.singleanswer_three = Answer3
      this.singleanswer_four = Answer4
      this.single_correct_answer = correct_answer
      this.singleexplanation = Explanation
      this.singleimage = image
  $('#editQns').modal('show');
}
canceleditqns(){
  $('#editQns').modal('hide');
}
updateqns(){
  this.updatesubmitted = true;
  if(this.UpdateQns.invalid){
    return
  }
  else{
     const formData = new FormData();
     formData.append('dailyboostdetail',this.daily_booster_id)
     formData.append('question', this.UpdateQns.value.question);
     formData.append('answer1', this.UpdateQns.value.answer_one);
     formData.append('answer2', this.UpdateQns.value.answer_two);
     formData.append('answer3', this.UpdateQns.value.answer_three);
     formData.append('answer4', this.UpdateQns.value.answer_four);
     formData.append('correctanswer', this.UpdateQns.value.correct_answer);
     formData.append('explanation', this.UpdateQns.value.description);
     formData.append('image', this.file);
    this.questionservice.update_daily_question(this.question_id,formData).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'Sucessfully updated the question', {
        positionClass: 'toast-top-center'
      });
      this.getallquestions();
      window.location.reload();
      $('#editQns').hide();
    },(error)=>{
      console.error(error);
      this.toastr.error(this.message,'somthing went wrong', {
        positionClass: 'toast-top-center'
      });
      // window.location.reload();
      $('#editQns').hide();
    })
  }
}
// delete question

delete_qns(deleteqns_id:any){
$('#deleteQns').show();
this.deleteqns_id = deleteqns_id
$('#deleteQns').show();
}
canceldeletqns(){
$('#deleteQns').hide();
}
deletqns(){
  this.questionservice.delete_daily_question(this.deleteqns_id).subscribe((res)=>{
    console.log(res);
    this.toastr.success(this.message,'Sucessfully deleted the question', {
      positionClass: 'toast-top-center'
    });
    this.getallquestions();
    $('#deleteQns').hide();
  },(error)=>{
    console.error(error);
      this.toastr.error(this.message,'Somthing went wrong', {
      positionClass: 'toast-top-center'
    });
    $('#deleteQns').hide();
  })
}
}

