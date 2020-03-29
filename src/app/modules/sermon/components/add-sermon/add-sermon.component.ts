import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {SermonService} from '../../service/sermon.service';




@Component({
  selector: 'app-add-sermon',
  templateUrl: './add-sermon.component.html',
  styleUrls: ['./add-sermon.component.scss']
})
export class AddSermonComponent implements OnInit {

  responseData: any;
  SermonForm: any;
  constructor(private _fb: FormBuilder, private _sermonService: SermonService) { }

  ngOnInit() {
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

  
    this._sermonService.addSermon(this.SermonForm.value).subscribe(data=>{
        this.responseData = data;
        console.log(this.responseData);
    }, error=>{
      console.warn(error)
    })


   }




}
