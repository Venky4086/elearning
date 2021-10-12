import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestdiscussionService } from 'src/services/testdiscussion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ElearningService } from 'src/services/elearning.service';
declare var $: any;
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  submitted = false
  message: any;
  alldiscussion: any;
  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService,private testdiscussionservice:TestdiscussionService,private fb:FormBuilder) { }
    AddDiscussion = this.fb.group({
      subcategory_name : ['', Validators.required],
      d_video: ['', Validators.required],
      d_notes: ['', Validators.required],
      d_image: ['', Validators.required]
    })
  ngOnInit(): void {
    // this.getalldisscussion();
  }
get f(){
  return this.AddDiscussion.controls
}

// all discussion

  getalldisscussion(){
    this.spinner.show();
    this.testdiscussionservice.discussion_list().subscribe((res)=>{
      console.log(res)
      if(res){
      this.spinner.hide(); 
        this.alldiscussion = res
      }
      else{
        console.warn(res);
      }
    })
  }


// add discussion

  Add_disscussion(){
    this.submitted = true
    if(this.AddDiscussion.invalid){
    return
    }
    else{
      const formData = new FormData
      formData.append('test_sub_category',this.AddDiscussion.value.subcategory_name)
      formData.append('video',this.AddDiscussion.value.subcategory_name)
      formData.append('image',this.AddDiscussion.value.subcategory_name)
      formData.append('notes',this.AddDiscussion.value.subcategory_name)
      this.testdiscussionservice.add_discussion(formData).subscribe((res)=>{
        this.toastr.success(this.message,res.Message,{
          positionClass: 'toast-top-center'
        });
        $('#adddiscussion').hide();
        this.getalldisscussion();
      },(error)=>{
        console.error(error);
        this.toastr.error(this.message,'Somthing went wrong',{
          positionClass: 'toast-top-center'
        });
        $('#adddiscussion').hide();
        this.getalldisscussion();
      })
    }
  }


}
