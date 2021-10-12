import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GroupdiscussionService } from 'src/services/groupdiscussion.service';
declare var $:any
@Component({
  selector: 'app-group-discussion',
  templateUrl: './group-discussion.component.html',
  styleUrls: ['./group-discussion.component.css']
})
export class GroupDiscussionComponent implements OnInit {
 submitted = false
  file: any;
  filestatus = false;
  filesize: any;
  message: any;
  filename: any;
  Update_submitted = false;
  allgroupdiscussion: any;
  gd_id:any;
  group_name: any;
  group_image: any;
  no_data = false;
  constructor(private spinner:NgxSpinnerService,private groupdiscussionservice:GroupdiscussionService,private toastr:ToastrService,private fb:FormBuilder) { }
  Addgroupdiscusion = this.fb.group({
    group_name:['', Validators.required],
    group_image:['', Validators.required]
  })
  Updategroupdiscusion = this.fb.group({
    update_group_name:['', Validators.required],
    update_group_image:['', Validators.required]
  })
  ngOnInit(): void {
    this.getallgroupdiscussion();
  }
get f(){
  return this.Addgroupdiscusion.controls
}
get u(){
  return this.Updategroupdiscusion.controls
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
    // this.Addgroupdiscusion.value.upload_pdf.setValue(this.file);
  //  this.Icards.controls[1].get('arr').patchValue(this.file); 
  }
}

// get all group discussion

getallgroupdiscussion(){
  this.spinner.show();
  this.groupdiscussionservice.list_group_discussion().subscribe((res)=>{
    if(res){
        if(res == 0){
          console.log(res)
          this.allgroupdiscussion = res;
          this.spinner.hide();
          this.no_data = true;
        }
        else{
          this.allgroupdiscussion = res;
          this.spinner.hide();
          this.no_data = false;
        }
    }
    else{
      console.warn(res);
    }
  },(error)=>{
    console.log(error);
  })
}

// add group discussion

addg_d(){
  this.submitted = true;
  if(this.Addgroupdiscusion.invalid){
    return
  }
  else{
    const formData = new FormData
    formData.append('groupname',this.Addgroupdiscusion.value.group_name);
    formData.append('image',this.file)
    console.log(formData);
    this.groupdiscussionservice.add_group_discussion(formData).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,res.Message, {
        positionClass: 'toast-top-center'
      });
      this.getallgroupdiscussion();
    },(error)=>{
      console.error(error);
      this.toastr.error(this.message,'Somthing went wrong', {
        positionClass: 'toast-top-center'
      });
    })
  }
}

// update discussion
editg_b(gd_id:any,group_name:any,group_image:any){
  $('#editgroupdiscussion').show()
  this.gd_id = gd_id
  this.group_name = group_name
  this.group_image = group_image
  $('#editgroupdiscussion').modal('show')
}
updateg_d(){
  this.Update_submitted = true;
  if(this.Updategroupdiscusion.invalid){
    return
  }
  else{
    const formData = new FormData
    formData.append('groupname',this.Updategroupdiscusion.value.update_group_name);
    formData.append('image',this.file)
    console.log(formData);
    this.groupdiscussionservice.update_group_discussion(this.gd_id,formData).subscribe((res)=>{
      console.log(res);
      this.toastr.success(this.message,'Sucessfully update the Group Discussion', {
        positionClass: 'toast-top-center'
      });
      this.getallgroupdiscussion();
      $('#editgroupdiscussion').hide()
    },(error)=>{
      console.error(error);
      this.toastr.error(this.message,'Somthing went wrong', {
        positionClass: 'toast-top-center'
      });
      $('#editgroupdiscussion').hide()
    })
  }
}
closeeditg_b(){
  $('#editgroupdiscussion').modal('hide')
}

// delete discusstion

delete_g_b(gd_id:any){
  $('#deletegroupdiscussion').show()
  this.gd_id = gd_id
  $('#deletegroupdiscussion').modal('show')
}
closedelete(){
  $('#deletegroupdiscussion').modal('hide')
}
deleteg_b(){
  this.groupdiscussionservice.delete_group_discussion(this.gd_id).subscribe((res)=>{
    console.log(res);
    this.toastr.success(this.message,'Sucessfully delete the Group Discussion', {
      positionClass: 'toast-top-center'
    });
    this.getallgroupdiscussion();
    $('#deletegroupdiscussion').hide()
  },(error)=>{
    console.error(error);
    this.toastr.error(this.message,'Somthing went wrong', {
      positionClass: 'toast-top-center'
    });
    $('#deletegroupdiscussion').hide()
  })
}

}
