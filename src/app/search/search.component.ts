import {DataService} from './../data-service'
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gifs: any;
  searchQuery: string | undefined
  notfound =false

  constructor() { }

  ngOnInit(): void {
  }

}
