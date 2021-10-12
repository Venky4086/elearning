import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ElearningService } from 'src/services/elearning.service';
declare var $:any;

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  submitted = false;
  file: any;
  message: any;
  filename: any;
  filesize: any;
  filestatus: any;
  i: any;
  allicards: any;
  allsubcategorys: any;
  icards_id: any;
  sub_category: any;
  url: any;
  title: any;
  sub_category_id: any;
  no_data = false;
  constructor(private spinner:NgxSpinnerService,private fb:FormBuilder,private toastr: ToastrService,private elearningservice:ElearningService) { 
  }
  Icards = this.fb.group({
    Subcategoryname:["",[Validators.required]],
    pdf_title:["",[Validators.required]],
    pdf_url:["",[Validators.required]],
    // arr:this.fb.array([this.addimages()],[Validators.required])
  })
  UpdateIcards = this.fb.group({
    pdf_title:["",[Validators.required]],
    pdf_url:["",[Validators.required]],
    // arr:this.fb.array([this.addimages()],[Validators.required])
  })
  ngOnInit(): void {
   this.getallsubcategory();
   this.all_list_icards();
  }
  addimages(){
   return this.fb.group({
    title:['', [Validators.required]],
    upload_pdf:['', [Validators.required]]
   })
  }
  get f(){
    return this.Icards.controls
  }
  get u(){
    return this.UpdateIcards.controls
  }
  get arr() : FormArray {
    return  this.Icards.get("arr") as FormArray;
  }


  onFileSelect(event:any) {
    // console.log(event);
    if (event.target.files.length > 0) {
       this.file = event.target.files[0];  
       console.log(this.file)
    
      //  for(let f of this.file){
      //    console.log(f);
      //   this.arr.value[0].upload_pdf.setValue(f)
      //   this.i.upload_pdf.setValue(f)
      //   this.arr.push(this.addimages())
      //  }
       
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
      this.Icards.value.upload_pdf.setValue(this.file);
    //  this.Icards.controls[1].get('arr').patchValue(this.file);

     
    }
  }


  add_more_images(i:any){
    console.log(this.arr)
    console.log(i)
    this.arr.push(this.addimages())
    this.i = this.arr.value[i]
  }
  removeImage(i: number) {
    this.arr.removeAt(i);
  }

// all subcategory

getallsubcategory(){
  // this.spinner.show();
  this.elearningservice.audio_subcategory_list().subscribe((res)=>{
   if(res){
    console.log(res);
    this.allsubcategorys = res;
    // this.spinner.hide();
   }
  },(error)=>{
    console.log(error);
  })
}

// all icards

  all_list_icards(){
    this.spinner.show();
    this.elearningservice.audio_list().subscribe((res)=>{
      if(res){
       if(res == 0 ){
        this.spinner.hide();
        console.log(res);
        this.allicards = res
        this.no_data = true;
       }
       else{
        this.spinner.hide();
        console.log(res);
        this.allicards = res
        this.no_data = false;
       }
      }
      else{
        console.warn(res)
      }
    },(error)=>{
      console.log(error)
    })
  }

// add icards

  add_icards(){
    this.submitted = true;
    if(this.Icards.invalid){
      console.log('In valid data');
      return;
    }
    else{
      const formData = new FormData();
      formData.append('sub_category', this.Icards.value.Subcategoryname);
      formData.append('title', this.Icards.value.pdf_title);
      formData.append('audio', this.file);
      console.log(formData)
      this.elearningservice.add_audio(formData).subscribe((res)=>{
        this.toastr.success(this.message,res.Message,{
          positionClass: 'toast-top-center'
        });
        $('#addicards').hide();
        this.all_list_icards()
      },(error)=>{
        console.error(error);
        this.toastr.error(this.message,'Somthing went wrong',{
          positionClass: 'toast-top-center'
        });
        $('#addicards').hide();
      })
    }
  }


// edit icards

  editicards(icard_id:any,sub_category:any,sub_category_id:any,title:any,url:any){
    $('#editicards').show();
    this.icards_id = icard_id,
    this.sub_category = sub_category,
    this.sub_category_id = sub_category_id
    this.title = title,
    this.url = url
    $('#editicards').modal('show');
  }
  updateicarde(){ 
   this.submitted = true
   if(this.UpdateIcards.invalid){
     return
   }
   else{
    const formData = new FormData();
    formData.append('sub_category', this.sub_category_id);
    formData.append('title', this.UpdateIcards.value.pdf_title);
    formData.append('audio', this.file);
    console.log(formData)
    this.elearningservice.update_audio(this.icards_id,formData).subscribe((res)=>{
      this.toastr.success(this.message,'Successfully icard updated',{
        positionClass: 'toast-top-center'
      });
      $('#editicards').hide();
      this.all_list_icards()
    },(error)=>{
      console.error(error);
      this.toastr.error(this.message,'Somthing went wrong',{
        positionClass: 'toast-top-center'
      });
      $('#editicards').hide();
    })
  }
  }
  cancelediticards(){
    $('#editicards').modal('hide'); 
  }
// delete icards
  delete_icards(icard_id:any){
    $('#deleteicards').show();
    this.icards_id = icard_id
    $('#deleteicards').modal('show');
  }
  deleteicards(){
    this.elearningservice.delete_icard(this.icards_id).subscribe((res)=>{
      this.toastr.success(this.message,'Sucessfully icard deleted',{
        positionClass: 'toast-top-center'
      });
      $('#deleteicards').hide();
      this.all_list_icards();
    },(error)=>{
      console.error(error);
      this.toastr.error(this.message,'Somthing went wrong',{
        positionClass: 'toast-top-center'
      });
      $('#deleteicards').hide();
    })
  }
  canceldeleteicards(){
    $('#deleteicards').modal('hide');
  }

}
