import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-sermons',
  templateUrl: './list-sermons.component.html',
  styleUrls: ['./list-sermons.component.scss']
})
export class ListSermonsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'speaker', 'uploaded'];
  dataSource : any;;
  constructor() { }

  ngOnInit() {
    
  }

}
