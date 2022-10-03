import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  filter: string;
  constructor(private listService: ListService) {}

  ngOnInit() {}

  getFilter() {
    this.listService.filter = this.filter;
  }
}
