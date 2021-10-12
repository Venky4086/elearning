import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/services/question.service';
declare var $:any;
@Component({
  selector: 'app-q-d',
  templateUrl: './q-d.component.html',
  styleUrls: ['./q-d.component.css']
})
export class QDComponent implements OnInit {
  submitted = false;
  updatesubmitted = false;
  file: any;
  filestatus: any;
  filename: any;
  filesize: any;
  message: any;
  allvideos: any;
  qd_id: any;
  title: any;
  video: any;
  constructor(private spinner:NgxSpinnerService,private questionserveice:QuestionService,private toastr:ToastrService,private fb:FormBuilder) { }
  Add_QD = this.fb.group({
    video_title:['',Validators.required],
    video_url:['',Validators.required]
  })
  Update_QD = this.fb.group({
    video_title:['',Validators.required],
    video_url:['',Validators.required]
  })
  ngOnInit(): void {
    this.getallvideos();
  }
get f(){
  return this.Add_QD.controls
}
get u(){
  return this.Update_QD.controls
}
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
  //  this.video_url.setValue(this.file);
  // this.AddShots.value.arr[1].setValue(this.file.name)
  // this.createItem.video_url.setValue(this.file)
  }
}

// all question discusion

getallvideos(){
  this.spinner.show()
  this.questionserveice.list_question_discussion().subscribe((res)=>{
    if(res){
      console.log(res)
      this.allvideos = res;
      this.spinner.hide();
    }
    else(
      console.warn(res)
    )
  })
}

// add question discusion

addvideo(){
  this.submitted = true;
  if(this.Add_QD.invalid){
    return
  }
  else{
    const formData = new FormData
    formData.append('title',this.Add_QD.value.video_title);
    formData.append('video',this.file)
    this.questionserveice.add_question_discussion(formData).subscribe((res)=>{
      console.log(formData)
      this.toastr.success(this.message,res.Message,{
        positionClass: 'toast-top-center'
      });
      this.getallvideos();
    },(error)=>{
      console.error(error);
      this.toastr.error(this.message,'Somthing went wrong',{
        positionClass: 'toast-top-center'
      });
    })
  }
}

// update question discussion
editvideo(qd_id:any,qd_title:any,qd_video:any){
$('#editvideo').show()
  this.qd_id = qd_id;
  this.title = qd_title;
  this.video = qd_video
$('#editvideo').modal('show')
}
update(){
this.updatesubmitted = true;
  if(this.Update_QD.invalid){
    return
  }
  else{
    const formData = new FormData
    formData.append('title',this.Update_QD.value.video_title);
    formData.append('video',this.file)
    this.questionserveice.update_question_discussion(this.qd_id,formData).subscribe((res)=>{
      console.log(formData)
      this.toastr.success(this.message,'Successfully update the video',{
        positionClass: 'toast-top-center'
      });
      this.getallvideos();
      $('#editvideo').modal('hide')
    },(error)=>{
      console.error(error);
      this.toastr.error(this.message,'Somthing went wrong',{
        positionClass: 'toast-top-center'
      });
      $('#editvideo').modal('hide')
    })
  }
}
closeeditvideo(){
$('#editvideo').modal('hide')
}

// delete video

delete_video(qd_id:any){
  $('#deletevideo').show()
  this.qd_id = qd_id;
  $('#deletevideo').modal('show')
}

closedeletevideo(){
  $('#deletetvideo').modal('hide')
}

delete(){
  this.questionserveice.delete_question_discussion(this.qd_id).subscribe((res)=>{
    this.toastr.success(this.message,'Successfully delete the video',{
      positionClass: 'toast-top-center'
    });
    this.getallvideos();
  $('#deletevideo').modal('hide')
  },(error)=>{
    console.error(error);
    this.toastr.error(this.message,'Somthing went wrong',{
      positionClass: 'toast-top-center'
    });
  $('#deletevideo').modal('hide')
  })
}

}
