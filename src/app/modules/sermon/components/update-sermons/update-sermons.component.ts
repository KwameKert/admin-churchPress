import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CrudService} from '../../../../shared/service/crud.service';
import { ToastrService } from 'ngx-toastr';
import {Router, ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-update-sermons',
  templateUrl: './update-sermons.component.html',
  styleUrls: ['./update-sermons.component.scss']
})
export class UpdateSermonsComponent implements OnInit {

  sermonUrl : any ;
  responseData: any;
  sermonId: any;
  SermonForm: any;
  constructor(private _fb: FormBuilder, private _crudService: CrudService, private _toastr: ToastrService, private route: ActivatedRoute, private ngxService: NgxUiLoaderService,  private _sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.sermonId = this.route.snapshot.paramMap.get('id');
    this.loadForm();
    this.getSermon(this.sermonId);
    console.log(this.sermonUrl)

  }

  loadForm(){
    this.SermonForm = this._fb.group({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      speaker: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      stat : new FormControl('')
    })
  }

  getSermon(id: any){

    this._crudService.fetchItem({id, module:"sermon"}).subscribe(data=>{
        this.responseData = data;
        this.sermonUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.responseData.data.url);
        this.patchSermon(this.responseData.data);
    }, error=>{
      console.warn(error)
    })

  }


  patchSermon(sermon: any ){

    this.SermonForm.patchValue({
      id:  sermon.id,
      title: sermon.title,
      description: sermon.description,
      speaker: sermon.speaker,
      url: sermon.url,
      category: sermon.category,
      stat : sermon.stat == 'true'? true : false
    })

  }


  loadVideo(){
    this.sermonUrl =  this._sanitizer.bypassSecurityTrustResourceUrl(this.SermonForm.value.url);
  }


  updateSermon(){

    this.ngxService.startLoader('loader-02');
    this._crudService.updateItem({data: this.SermonForm.value, module:"sermon"})
    .subscribe(data=>{
      this._toastr.success("Sermon updated 🙂","",{
        timeOut:2000
      })
    }, error=>{
      this._toastr.info("Oops an error. 🥺","",{
        timeOut:2000
      })
    })

    this.ngxService.stopLoader('loader-02');
  }


 
}
