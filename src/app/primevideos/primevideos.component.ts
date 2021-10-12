import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/services/question.service';
declare var $:any;

@Component({
  selector: 'app-primevideos',
  templateUrl: './primevideos.component.html',
  styleUrls: ['./primevideos.component.css']
})
export class PrimevideosComponent implements OnInit {

  submitted = false
  updatesubmitted = false
  file: any;
  filestatus: any;
  filename: any;
  filesize: any;
  message: any;
  allsubcategroys: any;
  allbannerlist: any;
  allvideos: any;
  prime_id:any;
  prime_subcategory: any;
  prime_title: any;
  prime_video: any;
  prime_sub_id: any;
  no_data = false;
  constructor(private spinner:NgxSpinnerService,private questionservice:QuestionService,private fb:FormBuilder,private toastr:ToastrService) { }
  Addvideo = this.fb.group({
    subcategory:['', Validators.required],
    title:['', Validators.required],
    video_url:['', Validators.required]
  })
  Updatevideo = this.fb.group({
    title:['', Validators.required],
    video_url:['', Validators.required]
  })
 get f(){
   return this.Addvideo.controls
 }
 get u(){
  return this.Updatevideo.controls
}
  ngOnInit(): void {
    this.getallsubcategory();
    this.getallvideos()
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file.name);
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
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
    //  this.category_image = this.category_image.setValue(this.file);
    }
  }

  // all video list



  getallsubcategory(){
    // this.spinner.show();
    this.questionservice.list_prime_subcategory().subscribe((res)=>{
     if(res){
      // this.spinner.hide();
      console.log(res);
      this.allsubcategroys = res;
     }
     else{
      console.warn(res);
     }
    },(error)=>{
      console.log(error);
    })
  }

  getallvideos(){
    this.spinner.show();
    this.questionservice.list_prime().subscribe((res)=>{
     if(res){
        if(res == 0){
          console.log(res);
          this.allvideos = res;
          this.spinner.hide();
          this.no_data = true;
        }
        else{
          console.log(res);
          this.allvideos = res;
          this.spinner.hide();
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

  // add video

  addvideo(){
  console.log(this.Addvideo.value.subcategory)
  this.submitted = true;
  if(this.Addvideo.invalid){
    return
  }
  else{
    console.log(this.Addvideo.value.subcategory);
    const formData = new FormData
  formData.append('sub_category',this.Addvideo.value.subcategory)
  formData.append('title', this.Addvideo.value.title)
  formData.append('video',this.file)
  this.questionservice.add_prime(formData).subscribe((res)=>{
    console.log(res)
    this.toastr.success(this.message, res.Message, {
      positionClass: 'toast-top-center'
    });
    this.getallvideos();
    $('#addvideo').hide();
  },(error)=>{
    console.error(error)
    this.toastr.error(this.message, 'Somthing went wrong', {
      positionClass: 'toast-top-center'
    });
    $('#addvideo').hide();
  })
  }
  }

  // update video

  editvideo(prime_id:any,prime_sub_id:any,prime_sub_category_name:any,prime_title:any,prime_video:any){
    $('#editvideo').show();
    this.prime_id = prime_id;
    this.prime_sub_id = prime_sub_id
    this.prime_subcategory = prime_sub_category_name;
    this.prime_title = prime_title;
    this.prime_video = prime_video
    $('#editvideo').modal('show');
  }

  updatevideo(){
   this.updatesubmitted = true
   if(this.Updatevideo.invalid){
     return
   }
   else{
    const formData = new FormData
  formData.append('sub_category',this.prime_sub_id)
  formData.append('title', this.Updatevideo.value.title)
  formData.append('video',this.file)
  this.questionservice.update_prime(this.prime_id,formData).subscribe((res)=>{
    console.log(res)
    this.toastr.success(this.message, 'Successfully updated prime video', {
      positionClass: 'toast-top-center'
    });
    this.getallvideos();
    window.location.reload();
    $('#editvideo').hide();
  },(error)=>{
    console.error(error)
    this.toastr.error(this.message, 'Somthing went wrong', {
      positionClass: 'toast-top-center'
    });
    $('#editvideo').hide();
  })
  }
  }

  closeeditvideo(){
    $('#editvideo').modal('hide');
  }

  // delete video

  delete_video(prime_id:any){
    $('#deletevideo').show();
    this.prime_id = prime_id
    $('#deletevideo').modal('show');
  }
  deletevideo(){
    this.questionservice.delete_prime(this.prime_id).subscribe((res)=>{
      console.log(res)
      this.toastr.success(this.message, 'Successfully deleted prime video', {
        positionClass: 'toast-top-center'
      });
      this.getallvideos();
      $('#deletevideo').hide();
    },(error)=>{
      console.error(error)
      this.toastr.error(this.message, 'Somthing went wrong', {
        positionClass: 'toast-top-center'
      });
      $('#deletevideo').hide();
    })
  }
  closedeletevideo(){
    $('#deletevideo').modal('hide');
  }

}
