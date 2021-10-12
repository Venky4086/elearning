import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ElearningService } from 'src/services/elearning.service';
import { QuestionService } from 'src/services/question.service';
declare var $: any;

@Component({
  selector: 'app-primesubcategory',
  templateUrl: './primesubcategory.component.html',
  styleUrls: ['./primesubcategory.component.css']
})
export class PrimesubcategoryComponent implements OnInit {

  submitted=false;
  message:any;
  category_name:any;
  subcategory_name:any;
  filename: any;
  filesize: any;
  filestatus:any;
  allcategroys: any;
  allsubcategroys: any;
  file: any;
  maincategory_name="";
  scategory_name="";
  subcategory_image:any;
  subcategory_id: any;
  constructor(private questionserveice:QuestionService,private spinner: NgxSpinnerService,private fb:FormBuilder,private toastr: ToastrService,private elearningservice:ElearningService) {
   }
   Addsubcategory = this.fb.group({
    category_name : ['',Validators.required],
    subcategory_name:['',Validators.required],
  })
  Updatesubcategory = this.fb.group({
    subcategoryname:['',Validators.required],
  })
  ngOnInit(): void {
   this.getallcategorys();
   this.getallsubcategory();
  }
  get f(){
    return this.Addsubcategory.controls
  }
  get u(){
    return this.Updatesubcategory.controls
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
       this.file = event.target.files[0];
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
    //  this.category_image.setValue(this.file);
    }
  }

  // all categories
 
  getallcategorys(){
    // this.spinner.show();
    this.questionserveice.list_prime_category().subscribe((res)=>{
      if(res){
        // this.spinner.hide();
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
 
  // all subcategories
  getallsubcategory(){
    this.spinner.show();
    this.questionserveice.list_prime_subcategory().subscribe((res)=>{
     if(res){
      this.spinner.hide();
      console.log(res);
      this.allsubcategroys = res;
     }
    },(error)=>{
      console.log(error);
    })
  }

// add subcategories
  addsubcategory(){
    this.submitted = true;
    if(this.Addsubcategory.invalid){
      return
    }
    else{
      const data = {
        category:this.Addsubcategory.value.category_name,
        name:this.Addsubcategory.value.subcategory_name
      }
      console.log(data);
      this.questionserveice.add_prime_subcategory(data).subscribe((res)=>{
        if(res){
        console.log(res);
        this.toastr.success(this.message,res.Message,{
          positionClass: 'toast-top-center'
        });
        this.getallsubcategory();
        $('#addsubcategory').hide();
        }
        else{
          console.warn(res)
        }
      },(error)=>{
        console.log(error);
          this.toastr.error(this.message,'Somthing went wrong',{
            positionClass: 'toast-top-center'
          });
        $('#addsubcategory').hide();
      })
    }
  }

  // update subcategory

  editsubcategory(id:any,subcategory_name:any,category_name:any){
    $('#editsubcategory').show();
    this.subcategory_id = id;
    this.scategory_name = subcategory_name;
    this.maincategory_name = category_name;
    $('#editsubcategory').modal('show');
  }
  closeeditsubcatecory(){
    $('#editsubcategory').modal('hide');
  }
  updatesubcategory(){
    this.submitted = true
    if(this.Updatesubcategory.invalid){
      return
    }
    else{
      const data = {
        // category:this.Updatesubcategory.value.categoryname,
        name:this.Updatesubcategory.value.subcategoryname
      }
      console.log(data);
      this.questionserveice.update_prime_subcategory(this.subcategory_id,data).subscribe((res)=>{
        if(res){
        console.log(res);
        this.toastr.success(this.message,'Successfull subcategory updated',{
          positionClass: 'toast-top-center'
        });
        this.getallsubcategory();
        $('#editsubcategory').hide();
        }
        else{
          console.warn(res)
        }
      },(error)=>{
        console.log(error);
          this.toastr.error(this.message,'Somthing went wrong',{
            positionClass: 'toast-top-center'
          });
        $('#editsubcategory').hide();
      })
    }
  }
  // delete subcategory

  delete_subcategory(subcategory_id:any){
    $('#deletesubcategory').show();
    this.subcategory_id = subcategory_id
    $('#deletesubcategory').modal('show');
  }
  closedeletesubcategory(){
    $('#deletesubcategory').hide();

  }
  deletesubcategory(){
    this.questionserveice.delete_prime_subcategory(this.subcategory_id).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'Successfull subcategory deleted',{
        positionClass: 'toast-top-center'
      });
      this.getallsubcategory();
      $('#deletesubcategory').hide();
    },(error)=>{
      console.log(error);
      this.toastr.error(this.message,'Smothing went wrong',{
        positionClass: 'toast-top-center'
      });
      $('#deletesubcategory').hide();
    })
    // $('#editsubcategory').modal('show');
  }

}
