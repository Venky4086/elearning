import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ElearningService } from 'src/services/elearning.service';
import { QuestionService } from 'src/services/question.service';
declare var $: any;

@Component({
  selector: 'app-question-of-the-day',
  templateUrl: './question-of-the-day.component.html',
  styleUrls: ['./question-of-the-day.component.css']
})
export class QuestionOfTheDayComponent implements OnInit {
 
  submitted = false;
  file: any;
  filestatus:any;
  filesize: any;
  filename: any;
  message:any;
  a_one = "";
  allquestions: any;
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
  constructor(private questionservice:QuestionService,private spinner: NgxSpinnerService,private http:HttpClient,private fb:FormBuilder,private toastr: ToastrService,private elearningservice:ElearningService,private router:Router) {
  }
  AddQns = this.fb.group({
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
    this.getallquestions();
  }
  get f(){
    return this.AddQns.controls
  }
  get u(){
    return this.UpdateQns.controls
  }
  
    one(event:any){
    this.a_one = event.target.value
    for(let i=0;i<this.data.length;i++){
     if(i===0) {
       this.data[i].optionName = event.target.value
     }
    }
    console.log("  array  - - >" , this.data)
    }
    two(event:any){
      this.a_two = event.target.value
      for(let i=0;i<this.data.length;i++){
        if(i===1) {
          this.data[i].optionName = event.target.value
        }
       }
       console.log("  array  - - >" , this.data)
    }
   three(event:any){
    this.a_three = event.target.value
    for(let i=0;i<this.data.length;i++){
      if(i===2) {
        this.data[i].optionName = event.target.value
      }
     }
     console.log("  array  - - >" , this.data)
   }
   four(event:any){
    this.a_four = event.target.value
    for(let i=0;i<this.data.length;i++){
      if(i===3) {
        this.data[i].optionName = event.target.value
      }
     }
     console.log("  array  - - >" , this.data)
   }
 
  data:any[] = [
      {id:1},
      {id:2},
      {id:3},
      {id:4},
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

// all questions

  getallquestions(){
    this.spinner.show();
    this.questionservice.list_of_question().subscribe((res)=>{
      if(res){
          console.log(res)
          this.allquestions = res;
          this.spinner.hide();
      }
      else{
        console.warn(res);
      }
    },(error)=>{
      console.log(error);
      this.toastr.error(this.message,error.error.message, {
        positionClass: 'toast-top-center'
      });
    })
  }

// add question

  addqns(){
     this.submitted = true;
     if(this.AddQns.invalid){
       return
     }
     else{
       if(this.allquestions.length !=0){
         console.log('if')
        for(let i=0;i<this.allquestions.length;i++){
            if(i === 0){
               this.deleteqns_id = this.allquestions[i].id 
               this.questionservice.delete_question(this.deleteqns_id).subscribe((res)=>{
                console.log(res);
                const formData = new FormData();
                formData.append('Question', this.AddQns.value.question);
                formData.append('Answer1', this.AddQns.value.answer_one);
                formData.append('Answer2', this.AddQns.value.answer_two);
                formData.append('Answer3', this.AddQns.value.answer_three);
                formData.append('Answer4', this.AddQns.value.answer_four);
                formData.append('CorrectAnswer', this.AddQns.value.correct_answer);
                formData.append('Explanation', this.AddQns.value.description);
                formData.append('Image', this.file);
                this.questionservice.add_question(formData).subscribe((res)=>{
                 console.log(res);
                 this.toastr.success(this.message,res.Message, {
                   positionClass: 'toast-top-center'
                 });
                 this.getallquestions();
                 $('#addQns').hide();
               },(error)=>{
                 console.error(error);
                 this.toastr.success(this.message,'somthing went wrong', {
                   positionClass: 'toast-top-center'
                 });
                 $('#addQns').hide();
               })
                // this.toastr.success(this.message,'Sucessfully deleted the question', {
                //   positionClass: 'toast-top-center'
                // });
                // this.getallquestions();
                // $('#deleteQns').hide();
              },(error)=>{
                console.error(error);
                  this.toastr.error(this.message,'Somthing went wrong', {
                  positionClass: 'toast-top-center'
                });
                $('#deleteQns').hide();
              })
              
            }
         }
       }
       else{
         console.log('else')
        const formData = new FormData();
        formData.append('Question', this.AddQns.value.question);
        formData.append('Answer1', this.AddQns.value.answer_one);
        formData.append('Answer2', this.AddQns.value.answer_two);
        formData.append('Answer3', this.AddQns.value.answer_three);
        formData.append('Answer4', this.AddQns.value.answer_four);
        formData.append('CorrectAnswer', this.AddQns.value.correct_answer);
        formData.append('Explanation', this.AddQns.value.description);
        formData.append('Image', this.file);
       this.questionservice.add_question(formData).subscribe((res)=>{
         console.log(res);
         this.toastr.success(this.message,res.Message, {
           positionClass: 'toast-top-center'
         });
         this.getallquestions();
         $('#addQns').hide();
       },(error)=>{
         console.error(error);
         this.toastr.success(this.message,'somthing went wrong', {
           positionClass: 'toast-top-center'
         });
         $('#addQns').hide();
       })
       }
     }
  }

// update the question

  editqns(question_id:any,Question:any,Answer1:any,Answer2:any,Answer3:any,Answer4:any,correct_answer:any,Explanation:any,image:any){
       $('#editQns').modal('show');       
        this.question_id = question_id
        this.singlequestion = Question
        console.log(this.singlequestion)
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
    this.submitted = true;
    if(this.UpdateQns.invalid){
      return
    }
    else{
       const formData = new FormData();
       formData.append('Question', this.UpdateQns.value.question);
       formData.append('Answer1', this.UpdateQns.value.answer_one);
       formData.append('Answer2', this.UpdateQns.value.answer_two);
       formData.append('Answer3', this.UpdateQns.value.answer_three);
       formData.append('Answer4', this.UpdateQns.value.answer_four);
       formData.append('CorrectAnswer', this.UpdateQns.value.correct_answer);
       formData.append('Explanation', this.UpdateQns.value.description);
       formData.append('Image', this.file);
      this.questionservice.update_question(this.question_id,formData).subscribe((res)=>{
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
    this.questionservice.delete_question(this.deleteqns_id).subscribe((res)=>{
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

  // view question

  questionview(id:any){
   this.router.navigate(['/view_question'])
  }

}
