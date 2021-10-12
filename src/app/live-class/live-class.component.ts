import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/services/question.service';
declare var $:any;
@Component({
  selector: 'app-live-class',
  templateUrl: './live-class.component.html',
  styleUrls: ['./live-class.component.css']
})
export class LiveClassComponent implements OnInit {
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
  liveclass_id:any;
  liveclass_banner: any;
  liveclass_subcategory: any;
  liveclass_title: any;
  liveclass_video: any;
  liveclass_sub_id: any;
  banner_id: any;
  no_data = false;
  constructor(private spinner:NgxSpinnerService,private questionservice:QuestionService,private fb:FormBuilder,private toastr:ToastrService) { }
  Addvideo = this.fb.group({
    banner : ['', Validators.required],
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
    this.getallvideos();
    this.getallbannerlist();
    this.getallsubcategory();
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
  getallvideos(){
    this.spinner.show();
    this.questionservice.list_liveclass().subscribe((res)=>{
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

  getallbannerlist(){
    // this.spinner.show();
    this.questionservice.list_liveclass_banner().subscribe((res)=>{
      if(res){
       console.log(res)
       this.allbannerlist = res;
      //  this.spinner.hide();
      }
      else{
        console.warn(res)
      }
    })
  }

  getallsubcategory(){
    // this.spinner.show();
    this.questionservice.list_liveclass_subcategory().subscribe((res)=>{
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



  // add video

  addvideo(){
  this.submitted = true;
  if(this.Addvideo.invalid){
    return
  }
  else{
    const formData = new FormData
  formData.append('banner', this.Addvideo.value.banner)
  formData.append('sub_category',this.Addvideo.value.subcategory)
  formData.append('title', this.Addvideo.value.title)
  formData.append('video',this.Addvideo.value.video_url)
  this.questionservice.add_liveclass(formData).subscribe((res)=>{
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

  editvideo(liveclass_id:any,liveclass_banner:any,banner_id:any,liveclass_sub_id:any,liveclass_sub_category_name:any,liveclass_title:any,liveclass_video:any){
    $('#editvideo').show();
    this.liveclass_id = liveclass_id;
    this.banner_id = banner_id
    console.log(this.banner_id)
    console.log(this.liveclass_sub_id)
    this.liveclass_banner = liveclass_banner;
    this.liveclass_sub_id = liveclass_sub_id
    this.liveclass_subcategory = liveclass_sub_category_name;
    this.liveclass_title = liveclass_title;
    this.liveclass_video = liveclass_video
    $('#editvideo').modal('show');
  }

  updatevideo(){
   this.updatesubmitted = true
   if(this.Updatevideo.invalid){
     return
   }
   else{
    const formData = new FormData
  formData.append('banner', this.banner_id)
  formData.append('sub_category',this.liveclass_sub_id)
  formData.append('title', this.Updatevideo.value.title)
  formData.append('video',this.Updatevideo.value.video_url)
  this.questionservice.update_liveclass(this.liveclass_id,formData).subscribe((res)=>{
    console.log(res)
    this.toastr.success(this.message, 'Successfully updated video', {
      positionClass: 'toast-top-center'
    });
    this.getallvideos();
    // window.location.reload();
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

  delete_video(liveclass_id:any){
    $('#editvideo').show();
    this.liveclass_id = liveclass_id
    $('#deletevideo').modal('show');
  }
  deletevideo(){
    this.questionservice.delete_liveclass(this.liveclass_id).subscribe((res)=>{
      console.log(res)
      this.toastr.success(this.message, 'Successfully deleted video', {
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
