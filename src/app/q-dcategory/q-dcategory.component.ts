import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { shareReplay } from 'rxjs/operators';
import { ElearningService } from 'src/services/elearning.service';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-q-dcategory',
  templateUrl: './q-dcategory.component.html',
  styleUrls: ['./q-dcategory.component.css']
})
export class QDcategoryComponent implements OnInit {

  submitted = false;
  AddCategory: FormGroup;
  category_name:any;
  category_image:any;
  message:any;
  filename: any;
  filesize: any;
  filestatus:any;
  allcategroys: any;
  categroy_id: any;
  file: any;
  editcategory_name:any;
  editcategory_image:any;
  category_uid: any;
  constructor(private http:HttpClient,private fb:FormBuilder,private toastr: ToastrService,private elearningservice:ElearningService) {
    this.AddCategory = this.fb.group({
      categoryname:['', Validators.required],
      categoryimage:['', Validators.required]
   })
  }
  ngOnInit(): void {
    this.elearningservice.allcategory().subscribe((res)=>{
      console.log(res.data);
      this.allcategroys = res.data
      this.getallcategories();
    },(error)=>{
      console.log(error);
    })
    this.AddCategory = this.fb.group({
       categoryname:['', Validators.required],
       categoryimage:['', Validators.required]
    })
  }
  get f(){
    return this.AddCategory.controls
  }
  getallcategories(){
    this.elearningservice.allcategory().subscribe((res)=>{
      console.log(res.data);
      this.allcategroys = res.data
    },(error)=>{
      console.log(error);
    })
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

  addcategory(){
    this.submitted = true
    if(this.AddCategory.invalid){
      return 
    }
   else{
    // const data = {
    //   name : this.category_name,
    //   file: this.category_image
    // }
    const formData = new FormData();
    formData.append('name', this.category_name);
    formData.append('file', this.file);
    console.log(formData)
    const headers= new HttpHeaders()
    .set('content-type', 'multipart/form-data')
    .set('Access-Control-Allow-Origin', '*')
    // this.elearningservice.addcategory(data).subscribe((res)=>{
    this.http.post<any>('http://54.254.40.192:8000/api/v1/create_category',formData).subscribe((res)=>{
     console.log(res);
     this.toastr.success(this.message,res.message,{
      positionClass: 'toast-top-center'
    });
    window.location.reload();
    $('#addcategory').modal('hide');
   },(error)=>{
     console.log(error)
     $('#addcategory').modal('hide');
     this.toastr.error(this.message,error.error.message,{
      positionClass: 'toast-top-center'
    });
   })
   }
  }
  editcategory(categroy_id:any,category_name:any,categroy_image:any){
    console.log(categroy_id)
    this.category_uid = categroy_id;
    this.editcategory_name = category_name;
    this.editcategory_image = categroy_image;
    console.log(this.editcategory_image);
    $('#editcategory').modal('show');

  }
  closeeditcatecory(){
    $('#editcategory').modal('hide');
  }
  // updatecategory(){

  // }
  deletemodalcategory(categroy_id:any){
    this.categroy_id = categroy_id
    console.log(categroy_id)
    $('#deletecategory').modal('show');
  }
  deletecategory(){
    this.elearningservice.deletecategory(this.categroy_id).subscribe((res)=>{
      console.log(res)
      this.toastr.success(this.message,res.message,{
        positionClass: 'toast-top-center'
      });
    $('#deletecategory').modal('hide');
    },(error)=>{
      console.log(error);
      this.toastr.success(this.message,error.error.message,{
        positionClass: 'toast-top-center'
      });
    $('#deletecategory').modal('hide');
    })
  }
  closedeletecatecory(){
    $('#deletecategory').modal('hide');
  }

}
