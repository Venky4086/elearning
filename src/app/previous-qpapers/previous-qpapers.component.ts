import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ElearningService } from 'src/services/elearning.service';
import { QuestionService } from 'src/services/question.service';
declare var $: any;
@Component({
  selector: 'app-previous-qpapers',
  templateUrl: './previous-qpapers.component.html',
  styleUrls: ['./previous-qpapers.component.css']
})
export class PreviousQpapersComponent implements OnInit {
  submitted = false;
  // AddShots: FormGroup;
  pdf_title:any;
  pdf_url:any;
  topic_name:any;
  shot_subcategory_name:any;
  category_name:any;
  message:any;
  filename: any;
  filesize: any;
  filestatus:any;
  file: any;
  allsubcategorys: any;
  all_previous_qpapers: any;
  previous_qpaper_id: any;
  updatefile: any;
  editsubcategory: any;
  editpdf_title: any;
  editpdf_url: any;
  sub_category_id: any;
  no_data = false;
  constructor(private questionservice:QuestionService,private spinner: NgxSpinnerService,private http:HttpClient,private fb:FormBuilder,private toastr: ToastrService,private elearningservice:ElearningService) {
  }
  Add_previous_qpaper = this.fb.group({
    subcategory_name:['',Validators.required],
    pdf_title:['',[Validators.required]],
    pdf_url:['',[Validators.required]],
    // arr: this.fb.array([this.createItem()],[Validators.required]),
 })
 Update_previous_qpaper = this.fb.group({
  pdf_title:['',[Validators.required]],
  pdf_url:['',[Validators.required]],
  // arr: this.fb.array([this.createItem()],[Validators.required]),
})
  ngOnInit(): void {
   this.all_previous_qpaper_list()
   this.subcategroy();
  }
  get f(){
    return this.Add_previous_qpaper.controls
  }
  get u(){
    return this.Update_previous_qpaper.controls
  }
  createItem() {
    return this.fb.group({
      pdf_title:['',[Validators.required]],
       pdf_url:['',[Validators.required]],
    });
  }
  get addmorevideos () : FormArray {
    return  this.Add_previous_qpaper.get("arr") as FormArray;
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
    //  this.pdf_url.setValue(this.file);
    // this.AddPdf.value.arr[1].setValue(this.file.name)
    // this.createItem.pdf_url.setValue(this.file)
    // this.Add_previous_qpaper.value.pdf_url.setValue(this.file)
    }
  }
  add_more_videos(){
    this.addmorevideos.push(this.createItem())
  }
  removeImage(i: number) {
    this.addmorevideos.removeAt(i);
  }
  
 subcategroy(){
  this.questionservice.list_previous_qpaper_subcategory().subscribe((res)=>{
    // this.spinner.show()
    if(res){
      // this.spinner.hide()
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

  all_previous_qpaper_list(){
    this.spinner.show()
    this.questionservice.list_previous_qpaper().subscribe((res)=>{
      if(res){
        if(res == 0){
          this.spinner.hide()
          console.log(res);
          this.all_previous_qpapers = res
          this.no_data = true;
        }
        else{
          this.spinner.hide()
          console.log(res);
          this.all_previous_qpapers = res
          this.no_data = false;
        }
      }
      else{
        console.warn(res)
      }
  },(error)=>{
    console.error(error);
  })
  }

// AddPdf

  add_previous_qpaper(){
    this.submitted = true
    if(this.Add_previous_qpaper.invalid){
      console.log('invalid');
      return 
    }
  else{
    const formData = new FormData();
    formData.append('sub_category', this.Add_previous_qpaper.value.subcategory_name);
    formData.append('title', this.Add_previous_qpaper.value.pdf_title);
    formData.append('pdf', this.file);
    console.log(formData)
    this.questionservice.add_previous_qpaper(formData).subscribe((res)=>{
    console.log(res);
    this.toastr.success(this.message,res.Message,{
      positionClass: 'toast-top-center'
    });
    this.all_previous_qpaper_list();
    $('#addpdf').hide();
  },(error)=>{
    console.log(error)
    this.toastr.error(this.message,'Somthing went wrong',{
      positionClass: 'toast-top-center'
    });
    $('#addpdf').hide();
  })
  }
  }

// update shots

  edit_previous_qpaper(previous_qpaper_id:any,subcategory_name:any,sub_category_id:any,pdf_title:any,pdf_url:any){
    $('#editpdf').show();
    this.previous_qpaper_id = previous_qpaper_id
    this.sub_category_id = sub_category_id
    this.editsubcategory = subcategory_name,
    this.editpdf_title = pdf_title
    this.editpdf_url = pdf_url
    console.log(this.editpdf_url);
    $('#editpdf').modal('show');
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
    //  this.pdf_url.setValue(this.file);
    }
  }
  update_previous_qpaper(){
  this.submitted = true;
  if(this.Update_previous_qpaper.invalid){
  return
  }
   else{
    const formData = new FormData();
    formData.append('sub_category', this.sub_category_id );
    formData.append('title',this.Update_previous_qpaper.value.pdf_title);
    formData.append('pdf', this.updatefile);
    console.log(formData)
    this.questionservice.update_previous_qpaper(this.previous_qpaper_id,formData).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'Recent Updates successfully updated',{
        positionClass: 'toast-top-center'
      });
      this.all_previous_qpaper_list();
      // window.location.reload();
      $('#editpdf').hide();
    },(error)=>{
      console.log(error)
      this.toastr.error(this.message,error.error.message,{
        positionClass: 'toast-top-center'
      });
    $('#editpdf').modal('hide');
    })
   }
  }
  close_previous_qpaper(){
    $('#editpdf').modal('hide');
  }


  // deleteshot
  delete_previous_qpaper(previous_qpaper_id:any){
    $('#deletepdf').show();
    this.previous_qpaper_id = previous_qpaper_id
    $('#deletepdf').modal('show');
  }
  closedelete_previous_qpaper(){
    $('#deletepdf').modal('hide');
  }
  deleterecentupdate(){
    this.questionservice.delete_previous_qpaper(this.previous_qpaper_id).subscribe((res)=>{
      console.log(res)
      this.toastr.success(this.message,'Recent Updates successfully deleted',{
        positionClass: 'toast-top-center'
      });
      this.all_previous_qpaper_list();
      // window.location.reload();
    $('#deletepdf').hide();
    },(error)=>{
      console.log(error)
      this.toastr.success(this.message,error.error.message,{
        positionClass: 'toast-top-center'
      });
    $('#deletepdf').hide();
    })
  }
}
