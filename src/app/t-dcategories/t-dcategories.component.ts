import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { shareReplay } from 'rxjs/operators';
import { ElearningService } from 'src/services/elearning.service';
import { TestdiscussionService } from 'src/services/testdiscussion.service';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-t-dcategories',
  templateUrl: './t-dcategories.component.html',
  styleUrls: ['./t-dcategories.component.css']
})
export class TDcategoriesComponent implements OnInit {
  submitted = false;
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
  category_id: any;
  constructor(private testdiscussion:TestdiscussionService,private spinner: NgxSpinnerService,private http:HttpClient,private fb:FormBuilder,private toastr: ToastrService,private elearningservice:ElearningService) {
  }
  AddCategory = this.fb.group({
    categoryname:['', Validators.required],
  })
  UpdateCategory = this.fb.group({
    categoryname:['', Validators.required],
  })
  ngOnInit(): void {
   this.getallcategories()
  }

  get f(){
    return this.AddCategory.controls
  }
  get u(){
    return this.UpdateCategory.controls
  }


  getallcategories(){
    this.spinner.show();
    this.testdiscussion.td_category_list().subscribe((res)=>{
        if(res){
          this.spinner.hide();
          console.log(res);
          this.allcategroys = res
        }else{
          console.warn(res);
        }
    },(error)=>{
      console.error(error);
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
//  add category

  addcategory(){
    this.submitted = true
    if(this.AddCategory.invalid){
      return 
    }
   else{
    const formData = new FormData();
    formData.append('title', this.category_name);
    console.log(formData)
    this.testdiscussion.add_td_category(formData).subscribe((res)=>{
     console.log(res);
     this.toastr.success(this.message,res.Message,{
      positionClass: 'toast-top-center'
     });
    this.getallcategories()
    $('#addcategory').hide();
   },(error)=>{
     console.log(error)
     this.toastr.error(this.message,'Somthing went wrong',{
      positionClass: 'toast-top-center'
     });
    $('#addcategory').hide();
   })
   }
  }
 
//  upadete category

  editcategory(categroy_id:any,category_name:any){
    $('#editcategory').show();
    console.log(categroy_id)
    this.category_id = categroy_id;
    this.editcategory_name = category_name;
    $('#editcategory').modal('show');
  }

  closeeditcatecory(){
    $('#editcategory').modal('hide');
  }

  updatecategory(){
     this.submitted = true
     if(this.UpdateCategory.invalid){
       return
     }
     else{
      const data = {
        title:this.UpdateCategory.value.categoryname
      }
       this.testdiscussion.update_td_category(this.category_id,data).subscribe((res)=>{
         if(res){
          console.log(res)
          this.toastr.success(this.message,'Category successfully updated',{
            positionClass: 'toast-top-center'
           });
          this.getallcategories()
          $('#editcategory').hide();
         }
         else{
           console.warn(res)
         }
       },(error)=>{
         console.error(error)
         this.toastr.error(this.message,'Somthing went wrong',{
          positionClass: 'toast-top-center'
         });
        $('#editcategory').hide();
       })
     }
  }
// delete category

  deletemodalcategory(categroy_id:any){
    $('#deletecategory').show();
    this.categroy_id = categroy_id
    console.log(categroy_id)
    $('#deletecategory').modal('show');
  }

  deletecategory(){
    this.testdiscussion.delete_td_category(this.categroy_id).subscribe((res)=>{
      console.log(res)
      this.toastr.success(this.message,'Category successfully deleted',{
        positionClass: 'toast-top-center'
      });
    this.getallcategories();
    $('#deletecategory').hide();
    },(error)=>{
      console.log(error);
      this.toastr.error(this.message,'Somthing went wrong',{
        positionClass: 'toast-top-center'
      });
      $('#deletecategory').hide();
    })
  }

  closedeletecatecory(){
    $('#deletecategory').modal('hide');
  }


}
