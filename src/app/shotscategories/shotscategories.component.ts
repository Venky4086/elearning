import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { shareReplay } from 'rxjs/operators';
import { ElearningService } from 'src/services/elearning.service';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-shotscategories',
  templateUrl: './shotscategories.component.html',
  styleUrls: ['./shotscategories.component.css']
})
export class ShotscategoriesComponent implements OnInit {

  submitted = false;
  AddCategory: FormGroup;
  category_name: any;
  category_image: any;
  message: any;
  filename: any;
  filesize: any;
  filestatus: any;
  allcategroys: any;
  categroy_id: any;
  shots_category_name: any;
  constructor(private spinner: NgxSpinnerService,private http: HttpClient, private fb: FormBuilder, private toastr: ToastrService, private elearningservice: ElearningService) {
    this.AddCategory = this.fb.group({
      categoryname: ['', Validators.required],
      //  categoryimage:['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.allshot_category_list();
    this.createForm();
  }

  createForm() {
    this.AddCategory = this.fb.group({
      categoryname: ['', Validators.required],
      //  categoryimage:['', Validators.required]
    })
  }

 

  get f() {
    return this.AddCategory.controls
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file.name);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      this.filestatus = true;
      this.filename = file.name;
      this.filesize = file.size;
      if (this.filesize > 2097152) {
        this.filestatus = false;
        this.toastr.error(this.message, 'File size should not be larger than 2 mb', {
          positionClass: 'toast-top-center'
        });
      } else {
        this.filestatus = true;
      }
      this.category_image = file.name;
    }
  }

  allshot_category_list() {
    this.spinner.show()
    this.elearningservice.shot_category_list().subscribe((res) => {
      if (res) {
       this.spinner.hide()
        this.allcategroys = res
      } else {
        console.warn(res)
      }
    }, (error) => {
      console.error(error);
    })
  }

  addshotcategory() {
    this.submitted = true
    if (this.AddCategory.invalid) {
      return
    }
    else {
      const data = {
        name: this.category_name,
      }
      // console.log(this.AddCategory.get('categoryname').value)
      this.elearningservice.add_shots_category(data).subscribe((res) => {
        console.log(res);
        this.toastr.success(this.message, res.Message, {
          positionClass: 'toast-top-center'
        });
        this.allshot_category_list();
        // window.location.reload();
        $('#addcategory').hide();
      }, (error) => {
        console.log(error)
        this.toastr.error(this.message, error.error.message, {
          positionClass: 'toast-top-center'
        });
        $('#addcategory').hide();
      })
    }
  }

  // editcategory

  editcategory(categroy_id: any, categroy_name: any) {
    $('#editcategory').show();
    console.log(categroy_id)
    this.categroy_id = categroy_id
    this.shots_category_name = categroy_name
    $('#editcategory').modal('show');
    // this.elearningservice.view_shot_category(categroy_id).subscribe((res)=>{
    //   console.log(res.data)
    //   this.shots_category_name = res.data.name
    // })
  }
  
  closeeditcatecory() {
    $('#editcategory').modal('hide');
  }
  updatecategory(name: any) {
    const data = {
      name: name,
    }
    console.log(data);
    this.elearningservice.update_shot_category(this.categroy_id, data).subscribe((res) => {
      console.log(res)
      this.toastr.success(this.message, 'Category successfully updated', {
        positionClass: 'toast-top-center'
      });
      this.allshot_category_list();
      $('#editcategory').hide();
      // window.location.reload();
    }, (error) => {
      console.log(error)
      this.toastr.error(this.message, error.error.message, {
        positionClass: 'toast-top-center'
      });
      $('#editcategory').hide();
    })
  }
  // deletecategory

  delete_shots_category(categroy_id: any) {
    $('#deletecategory').show();
    console.log(categroy_id)
    this.categroy_id = categroy_id;
    $('#deletecategory').modal('show');
  }
  delete_category() {
    this.elearningservice.delete_shot_category(this.categroy_id).subscribe((res) => {
      console.log(res)
      this.toastr.success(this.message, 'Category successfully dateted', {
        positionClass: 'toast-top-center'
      });
      this.allshot_category_list();
      // window.location.reload();
      $('#deletecategory').hide();
    }, (error) => {
      console.log(error);
      this.toastr.error(this.message, error.error.message, {
        positionClass: 'toast-top-center'
      });
      $('#deletecategory').hide();
    })
  }
  delete_close() {
    $('#deletecategory').modal('hide');

  }
}
