import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  filter: string;
  filteredList: string[];
  list = ['martin', 'denis', 'edoardo', 'andrea', 'franco', 'mauro', 'pietro'];
  constructor() {}

  getFilteredList() {
    for (let i of this.list) {
      if (i.startsWith(this.filter)) {
        this.filteredList.push(i);
      }
    }
    return this.filteredList;
  }
}
