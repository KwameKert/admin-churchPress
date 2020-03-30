import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {SermonService} from '../../service/sermon.service';
import {CrudService} from '../../../../shared/service/crud.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-add-sermon',
  templateUrl: './add-sermon.component.html',
  styleUrls: ['./add-sermon.component.scss']
})
export class AddSermonComponent implements OnInit {

  responseData: any;
  SermonForm: any;
  constructor(private _fb: FormBuilder, private _sermonService: SermonService, private _toastr: ToastrService, private _crudService: CrudService) { }

  ngOnInit() {
   this.loadSermon();
  }


  loadSermon(){
    this.SermonForm = this._fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      speaker: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      stat : new FormControl('')
    })
  }


  saveSermon(){

  
    this._crudService.addItem(this.SermonForm.value,"sermon").subscribe(data=>{
        this.responseData = data;
        this._toastr.success("Sermon saved 🙂","",{
          timeOut:2000
        })

        this.SermonForm.reset();
  
    }, error=>{
      this._toastr.info("Oops an error. 🥺","",{
        timeOut:2000
      })
    })


   }




}
