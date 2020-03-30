import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {SermonService} from '../../service/sermon.service';
import { ToastrService } from 'ngx-toastr';
import {Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-update-sermons',
  templateUrl: './update-sermons.component.html',
  styleUrls: ['./update-sermons.component.scss']
})
export class UpdateSermonsComponent implements OnInit {

  
  sermonId: any;
  SermonForm: any;
  constructor(private _fb: FormBuilder, private _sermonService: SermonService, private _toastr: ToastrService, private route: ActivatedRoute, private  _router: Router) { }


  ngOnInit() {
    this.sermonId = this.route.snapshot.paramMap.get('id');
    this.loadForm();
  }

  loadForm(){
    this.SermonForm = this._fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      speaker: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      stat : new FormControl('')
    })
  }

  getSermon(id){
    
  }

}
