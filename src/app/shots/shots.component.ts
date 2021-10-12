import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ElearningService } from 'src/services/elearning.service';
declare var $: any;
@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css']
})
export class ShotsComponent implements OnInit {

  submitted = false;
  // AddShots: FormGroup;
  video_title:any;
  video_url:any;
  topic_name:any;
  shot_subcategory_name:any;
  category_name:any;
  message:any;
  filename: any;
  filesize: any;
  filestatus:any;
  file: any;
  allsubcategorys: any;
  allshots: any;
  shots_id: any;
  updatefile: any;
  editsubcategory_shot: any;
  editvideo_title: any;
  editvideo_url: any;
  sub_category_id: any;
  no_data = false;
  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private fb:FormBuilder,private toastr: ToastrService,private elearningservice:ElearningService) {
  }
  AddShots = this.fb.group({
    subcategory_name:['',Validators.required],
    video_title:['',[Validators.required]],
    video_url:['',[Validators.required]],
    // arr: this.fb.array([this.createItem()],[Validators.required]),
 })
 UpdateShots = this.fb.group({
  // subcategory_name:['',Validators.required],
  video_title:['',[Validators.required]],
  video_url:['',[Validators.required]],
  // arr: this.fb.array([this.createItem()],[Validators.required]),
})
  ngOnInit(): void {
    console.log(this.AddShots);
    this.allshot_list();
    this.subcategory_list()
  }
  get f(){
    return this.AddShots.controls
  }
  get u(){
    return this.UpdateShots.controls
  }
  createItem() {
    return this.fb.group({
       video_title:['',[Validators.required]],
       video_url:['',[Validators.required]],
    });
  }
  get addmorevideos () : FormArray {
    return  this.AddShots.get("arr") as FormArray;
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
  add_more_videos(){
    this.addmorevideos.push(this.createItem())
  }
  removeImage(i: number) {
    this.addmorevideos.removeAt(i);
  }
  subcategory_list(){
    // this.spinner.show()
    this.elearningservice.shot_subcategory_list().subscribe((res)=>{
     if(res){
      //  this.spinner.hide()
      console.log(res);
      this.allsubcategorys = res
     }
     else{
       console.warn(res)
     }
    },(error)=>{
      console.log(error);
    })
  }
  allshot_list(){
    this.spinner.show()
    this.elearningservice.shot_list().subscribe((res)=>{
      if(res){
         if(res == 0){
          this.spinner.hide()
          console.log(res);
          this.allshots = res
          this.no_data = true;
         }
         else{
          this.spinner.hide()
          console.log(res);
          this.allshots = res
          this.no_data = false
         }
      }
      else{
        console.warn(res)
      }
    },(error)=>{
      console.log(error);
    })
  }

// addshots

  addshots(){
    this.submitted = true
    if(this.AddShots.invalid){
      console.log('invalid');
      return 
    }
  else{
    // console.log(this.AddShots.value.subcategory_name);
    // console.log(this.AddShots.value.video_title);
    const formData = new FormData();
    formData.append('sub_category', this.AddShots.value.subcategory_name);
    formData.append('title', this.AddShots.value.video_title);
    formData.append('video', this.file);
    console.log(formData)
    this.elearningservice.add_shots(formData).subscribe((res)=>{
    // this.http.post<any>('http://54.254.40.192:8000/api/v1/create_shot',formData).subscribe((res)=>{
    console.log(res);
    this.toastr.success(this.message,'Shots successfully created',{
      positionClass: 'toast-top-center'
    });
    this.allshot_list();
    $('#addshots').hide();
  },(error)=>{
    console.log(error)
    this.toastr.error(this.message,error.error.message,{
      positionClass: 'toast-top-center'
    });
    $('#addshots').hide();
  })
  }
  }

// update shots

  editshots(shot_id:any,subcategory_name:any,sub_category_id:any,video_title:any,video_url:any){
    $('#editshots').show();
    this.shots_id = shot_id
    this.sub_category_id = sub_category_id
    this.editsubcategory_shot = subcategory_name,
    this.editvideo_title = video_title
    this.editvideo_url = video_url
    console.log(this.editvideo_url);
    // this.elearningservice.viewshot(this.shots_id).subscribe((res)=>{
    //   console.log(res.data);
    //   this.editvideo_url = res.data.thump_url
    //   console.log(this.editvideo_url);
    // })
    $('#editshots').modal('show');
  }
  update(event:any) {
    if (event.target.files.length > 0) {
      this.updatefile = event.target.files[0];
      console.log(this.updatefile);

      console.log(this.updatefile);

      // reader.readAsDataURL(file);
      this.filestatus = true;
      this.filename = this.updatefile.name;
      this.filesize = this.updatefile.size;
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
    }
  }
  updateshots(){
    this.submitted = true;
    if(this.UpdateShots.invalid){
      return
    }
    else{
    const formData = new FormData();
    formData.append('sub_category', this.sub_category_id);
    formData.append('title', this.UpdateShots.value.video_title);
    formData.append('video', this.updatefile);
    console.log(formData)
    this.elearningservice.updateshot(this.shots_id,formData).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'Shots successfully updated',{
        positionClass: 'toast-top-center'
      });
      this.allshot_list();
      window.location.reload();
      $('#editshots').hide();
    },(error)=>{
      console.log(error)
      this.toastr.error(this.message,'Somthing went wrong',{
        positionClass: 'toast-top-center'
      });
    $('#editshots').modal('hide');
    })
    }
  }
  closeshots(){
    $('#editshots').modal('hide');
  }


  // deleteshot
  delete_shots(shots_id:any){
    $('#deleteshots').show();
    this.shots_id = shots_id
    $('#deleteshots').modal('show');
  }
  closedeleteshots(){
    $('#deleteshots').modal('hide');
  }
  deleteshots(){
    this.elearningservice.deleteshot(this.shots_id).subscribe((res)=>{
      console.log(res)
      this.toastr.success(this.message,'Shots successfully deleted',{
        positionClass: 'toast-top-center'
      });
      this.allshot_list();
      // window.location.reload();
    $('#deleteshots').hide();
    },(error)=>{
      console.log(error)
      this.toastr.success(this.message,'Somthing went wrong',{
        positionClass: 'toast-top-center'
      });
    $('#deleteshots').hide();
    })
  }
}
