import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QBankserviceService } from 'src/services/q-bankservice.service';
import { QuestionService } from 'src/services/question.service';
declare var $: any;

@Component({
  selector: 'app-testedit',
  templateUrl: './testedit.component.html',
  styleUrls: ['./testedit.component.css']
})
export class TesteditComponent implements OnInit {
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
  qbank_id: any;
  // level = "";
  qbankmodes:any
  sub_category_id: any;
  constructor(private activaterouter: ActivatedRoute,private router:Router,private qbankservice:QBankserviceService,private toastr:ToastrService,private questionservice:QuestionService ,private spinner:NgxSpinnerService,private fb: FormBuilder) {
   }
   EditQbank = this.fb.group({
    level:['', Validators.required],
    exam:['', Validators.required],
    // subcategory_name:['', Validators.required],
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
    this.getallsubcategory();
    // this.qubank_id = this.activaterouter.snapshot.paramMap.get('id');
    // console.log(this.qubank_id)
    this.activaterouter.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.qbank_id = params.get('id');
    })
    this.getallqbankmode();
  }
  get q(){
    return this.EditQbank.controls
  }

  //  all qbank mode

  getallqbankmode(){
    this.spinner.show();
    this.qbankservice.single_data_testmode(this.qbank_id).subscribe((res)=>{
      console.log(res);
      if(res){
        this.qbankmodes = res
      for (let index = 0; index < this.qbankmodes.length; index++) {
        this.sub_category_id = res[index].sub_category_id
        console.log(this.sub_category_id); 
      }
        this.spinner.hide();
      }
      else{
        console.warn(res);
      }
    })
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

  editqbank(){
    this.submitted = true;
    if(this.EditQbank.invalid){
      return
    }
      else{
       const formData = new FormData();
       formData.append('level',this.EditQbank.value.level);
       formData.append('sub_category',this.sub_category_id);
       formData.append('examtype',this.EditQbank.value.exam);
       formData.append('question', this.EditQbank.value.question);
       formData.append('answer1', this.EditQbank.value.answer_one);
       formData.append('answer2', this.EditQbank.value.answer_two);
       formData.append('answer3', this.EditQbank.value.answer_three);
       formData.append('answer4', this.EditQbank.value.answer_four);
       formData.append('correctanswer', this.EditQbank.value.correct_answer);
       formData.append('explanation', this.EditQbank.value.description);
       formData.append('image', this.file);
      this.qbankservice.update_testmode(this.qbank_id,formData).subscribe((res)=>{
        console.log(res);
        this.toastr.success(this.message,'Sucessfully update the testmode', {
          positionClass: 'toast-top-center'
        });
        sessionStorage.setItem('modes','test');
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
