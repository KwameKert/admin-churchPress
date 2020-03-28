import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-sermon',
  templateUrl: './add-sermon.component.html',
  styleUrls: ['./add-sermon.component.scss']
})
export class AddSermonComponent implements OnInit {

  SermonForm: any;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.SermonForm = this._fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      speaker: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      serviceType: new FormControl('', Validators.required),
      isLive : new FormControl('')
    })
  }


  saveSermon(){
    console.log(this.SermonForm.value);
  }
}
