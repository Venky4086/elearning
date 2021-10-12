import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/services/question.service';
declare var $:any;
@Component({
  selector: 'app-dailyboostbanners',
  templateUrl: './dailyboostbanners.component.html',
  styleUrls: ['./dailyboostbanners.component.css']
})
export class DailyboostbannersComponent implements OnInit {
  submitted = false
  file: any;
  filename: any;
  message: any;
  filestatus = false;
  filesize: any;
  allbannerlist: any;
  banner_id: any;
  banner_title: any;
  banner_image: any;
  delete_id: any;
  no_data = false;
  constructor(private spinner:NgxSpinnerService,private fb:FormBuilder,private toastr:ToastrService,private questionserveice:QuestionService) { }
  Addbanner = this.fb.group({
    banner_title:['', Validators.required],
    banner_image:['', Validators.required],
  })
  Updatebanner = this.fb.group({
    banner_title:['', Validators.required],
    banner_image:['', Validators.required],
  })
  ngOnInit(): void {
    this.getallbannerlist();
  }
  get f(){
    return this.Addbanner.controls
  }
  get u(){
    return this.Updatebanner.controls
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
      this.Addbanner.value.banner_image.setValue(this.file);
    //  this.Icards.controls[1].get('arr').patchValue(this.file);

     
    }
  }

  // all banner list

  getallbannerlist(){
    this.spinner.show()
    this.questionserveice.list_of_dailyboostbanner().subscribe((res)=>{
      if(res){
        if(res.length == 0){
          this.allbannerlist = res
          this.spinner.hide()
          this.no_data = true;
        }
        else{
          console.log(res);
          this.allbannerlist = res
          this.spinner.hide()
          this.no_data = false;
        }
      }
      else{
        console.warn(res)
      }
    })
  }

  // add banner

  addbanner(){
    this.submitted = true;
    if(this.Addbanner.invalid){
      return
    }
    else{
      const formData = new FormData
      formData.append('title',this.Addbanner.value.banner_title)
      formData.append('banner',this.file)
      this.questionserveice.add_dailyboostbanner(formData).subscribe((res)=>{
        console.log(res)
        this.toastr.success(this.message,res.Message,{
          positionClass: 'toast-top-center'
        });
        this.getallbannerlist();
        $('#addbanner').hide();
      },(error)=>{
        console.error(error)
        this.toastr.error(this.message,'somthing went wrong',{
          positionClass: 'toast-top-center'
        });
        $('#addbanner').hide();
      })
    }
  }

  // edit banner

  editbanner(id:any,banner_title:any,banner_image:any){
    $('#editbanner').show();
    this.banner_id = id
    this.banner_title = banner_title
    this.banner_image = banner_image
    $('#editbanner').modal('show');
  }

  updatebanner(){
  this.submitted = true;
  if(this.Updatebanner.invalid){
    return
  }
  else{
    const formData = new FormData
    formData.append('title',this.Updatebanner.value.banner_title)
    formData.append('banner',this.file)
    this.questionserveice.update_dailyboostbanner(this.banner_id,formData).subscribe((res)=>{
      console.log(res)
      this.toastr.success(this.message,'successfully update the banner image',{
        positionClass: 'toast-top-center'
      });
      this.getallbannerlist();
      window.location.reload();
      $('#editbanner').hide();
    },(error)=>{
      console.error(error)
      this.toastr.error(this.message,'somthing went wrong',{
        positionClass: 'toast-top-center'
      });
      $('#editbanner').hide();
    })
  }
  }

  closebanner(){
    $('#editbanner').modal('hide');
  }

  // delete banner

  delete_banner(id:any){
    $('#deletebanner').show();
    this.delete_id = id
    $('#deletebanner').modal('show');
  }
  colsebannerdelete(){
    $('#deletebanner').modal('hide');
  }
  deletebanner(){
    this.questionserveice.delete_dailyboostbanner(this.delete_id).subscribe((res=>{
      this.toastr.success(this.message,'Successfully update the banner image',{
        positionClass: 'toast-top-center'
      });
      this.getallbannerlist();
      // window.location.reload();
      $('#deletebanner').hide();
    }),(error)=>{
      console.error(error)
      this.toastr.error(this.message,'somthing went wrong',{
        positionClass: 'toast-top-center'
      });
      $('#deletebanner').hide();
    })
  }
}
