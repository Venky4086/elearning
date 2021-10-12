import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/services/question.service';
declare var $:any;
@Component({
  selector: 'app-liveclass-banner',
  templateUrl: './liveclass-banner.component.html',
  styleUrls: ['./liveclass-banner.component.css']
})
export class LiveclassBannerComponent implements OnInit {
  submitted = false
  updatesubmitted = false;
  file: any;
  message: any;
  filestatus: any;
  filesize:any;
  filename: any;
  allbannerlist: any;
  banner_id: any;
  banner_title: any;
  banner_image: any;
  constructor(private spinner:NgxSpinnerService,private questionserveice:QuestionService,private toastr:ToastrService,private fb:FormBuilder) { }
  Addbanner = this.fb.group({
    banner_title:['', Validators.required],
    banner_image:['', Validators.required]
  })
  Updatebanner = this.fb.group({
    banner_title:['', Validators.required],
    banner_image:['', Validators.required]
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
      // this.Icards.value.upload_pdf.setValue(this.file);
    //  this.Icards.controls[1].get('arr').patchValue(this.file);
    }
  }

  // allbanner list

  getallbannerlist(){
   this.spinner.show();
   this.questionserveice.list_liveclass_banner().subscribe((res)=>{
     if(res){
      console.log(res)
      this.allbannerlist = res;
      this.spinner.hide();
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
      formData.append('title',this.Addbanner.value.banner_title);
      formData.append('bannerimage',this.file);
      this.questionserveice.add_liveclass_banner(formData).subscribe((res)=>{
        this.toastr.success(this.message,res.Message, {
          positionClass: 'toast-top-center'
        });
        this.getallbannerlist();
        $('#addbannerimage').hide();
      },(error)=>{
        this.toastr.error(this.message,'Somthing went wrong', {
          positionClass: 'toast-top-center'
        });
        $('#addbannerimage').hide();
      })
    }
  }

// updatebanner

  editbanner(banner_id:any,banner_title:any,banner_image:any){
    $('#editbannerimage').show()
    this.banner_id = banner_id;
    this.banner_title = banner_title;
    this.banner_image = banner_image
    $('#editbannerimage').modal('show')
  }
  updatebanner(){
    this.updatesubmitted = true;
    if(this.Updatebanner.invalid){
      return
    }
    else{
      const formData = new FormData
      formData.append('title',this.Updatebanner.value.banner_title);
      formData.append('image',this.file);
      this.questionserveice.update_liveclass_banner(this.banner_id,formData).subscribe((res)=>{
        this.toastr.success(this.message,'Successfully Update the banner image', {
          positionClass: 'toast-top-center'
        });
        this.getallbannerlist();
        $('#editbannerimage').hide();
      },(error)=>{
        this.toastr.error(this.message,'Somthing went wrong', {
          positionClass: 'toast-top-center'
        });
        $('#editbannerimage').hide();
      })
    }
  }
 
  closeeditbanner(){
    $('#editbannerimage').modal('hide')
  }

// deletebanner
deletebanner(banner_id:any){
  $('#deletebannerimage').show()
  this.banner_id = banner_id;
  $('#deletebannerimage').modal('show')
}

closedeletebanner(){
  $('#deletebannerimage').modal('hide')
}

delete(){
  this.questionserveice.delete_liveclass_banner(this.banner_id).subscribe((res)=>{
    this.toastr.success(this.message,'Successfully delete the banner image', {
      positionClass: 'toast-top-center'
    });
    this.getallbannerlist();
    $('#deletebannerimage').hide();
  },(error)=>{
    this.toastr.error(this.message,'Somthing went wrong', {
      positionClass: 'toast-top-center'
    });
    $('#deletebannerimage').hide();
  })
}

}
