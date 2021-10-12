import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ElearningService } from 'src/services/elearning.service';
declare var $: any;

@Component({
  selector: 'app-shotssubcategories',
  templateUrl: './shotssubcategories.component.html',
  styleUrls: ['./shotssubcategories.component.css']
})
export class ShotssubcategoriesComponent implements OnInit {

  submitted=false;
  message:any;
  category_name:any;
  subcategory_name:any;
  category_image:any;
  filename: any;
  filesize: any;
  filestatus:any;
  allcategroys: any;
  allsubcategroys: any;
  subcategory_id: any;
  main_category_name:any;
  edit_subcategory_name:any;
  constructor(private spinner: NgxSpinnerService,private router:Router,private fb:FormBuilder,private toastr: ToastrService,private elearningservice:ElearningService) {
   }
   Addsubcategory = this.fb.group({
    category_name : ['',Validators.required],
    subcategory_name:['',Validators.required],
    // category_image:['',Validators.required]
  })
  ngOnInit(): void {
  this.allcategory_list();
  this.allsubcategory_list()
  }
  get f(){
    return this.Addsubcategory.controls
  }
  // onFileSelect(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     console.log(file.name);

  //     reader.readAsDataURL(file);
  //     this.filestatus = true;
  //     this.filename = file.name;
  //     this.filesize = file.size;
  //     if (this.filesize > 2097152) {
  //       this.filestatus = false;
  //       this.toastr.error(this.message, 'File size should not be larger than 2 mb', {
  //         positionClass: 'toast-top-center'
  //       });
  //     }
  //     else {
  //       this.filestatus = true;
  //     }
  //    this.category_image.setValue(file);
  //   }
  // }
  allcategory_list(){
    // this.spinner.show()
    this.elearningservice.shot_category_list().subscribe((res)=>{
     if(res){
      //  this.spinner.hide()
      console.log(res);
      this.allcategroys = res
     }
     else{
       console.warn(res)
     }
    },(error)=>{
      console.log(error);
    })
  }
  allsubcategory_list(){
    this.spinner.show()
    this.elearningservice.shot_subcategory_list().subscribe((res)=>{
     if(res){
       this.spinner.hide()
      console.log(res);
      this.allsubcategroys = res
     }
     else{
       console.warn(res)
     }
    },(error)=>{
      console.log(error);
    })
  }
  add_shots_subcategory(){
  this.submitted = true;
  if(this.Addsubcategory.invalid){
    return
  }
  else{
    const data = {
      category:this.category_name,
      name:this.subcategory_name,
      // file:this.category_image
    }
    this.elearningservice.add_shots_subcategory(data).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,res.Message,{
        positionClass: 'toast-top-center'
      });
      this.allsubcategory_list()
      // this.router.navigate(['/shotssubcategories'])
      $('#addsubcategory').hide();
    },(error)=>{
      console.log(error);
         this.toastr.error(this.message,error.error.message,{
      positionClass: 'toast-top-center'
    });
    $('#addsubcategory').modal('hide');
    })
  }
  }

  // delete subcategory
  deletesubcategory(subcategory_id:any){
    $('#deletesubcategory').show();
    this.subcategory_id = subcategory_id;
    $('#deletesubcategory').modal('show');
  }
  delete_subcategory(){
    this.elearningservice.delete_shot_subcategory(this.subcategory_id).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'Subcategory sucessfully deleted',{
        positionClass: 'toast-top-center'
      });
      this.allsubcategory_list();
     $('#deletesubcategory').modal('hide');
    },(error)=>{
      console.log(error);
      this.toastr.error(this.message,error.error.message,{
        positionClass: 'toast-top-center'
      });
     $('#deletesubcategory').modal('hide');
    })
  }
  closedeletesubcatecory(){
    $('#deletesubcategory').modal('hide');
  }

  // update subcategory
  editsubcategory(subcategory_id:any,subcategory_name:any,subcategory_category:any){
    $('#editsubcategory').show();
    this.subcategory_id = subcategory_id
    this.edit_subcategory_name = subcategory_name
    this.main_category_name = subcategory_category
    $('#editsubcategory').modal('show');
  }
  update_shot_subcategory(subcategory_name:any){
    const data = {
      // category:category_name,
      name:subcategory_name,
    }
    this.elearningservice.update_shot_subcategory(this.subcategory_id,data).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'Subcategory successfully updated',{
        positionClass: 'toast-top-center'
      });
      // window.location.reload();
     this.allsubcategory_list()
    $('#editsubcategory').modal('hide');
    },(error)=>{
      console.log(error);
      this.toastr.error(this.message,error.error.message,{
        positionClass: 'toast-top-center'
      });
    $('#editsubcategory').modal('hide');
    })
  }
  closeeditsubcatecory(){
    $('#editsubcategory').modal('hide');
  }
}
