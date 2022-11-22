import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../core/services/data.service';
@Component({
  selector: 'app-panigation',
  templateUrl: './panigation.component.html',
  styleUrls: ['./panigation.component.scss'],
})
export class PanigationComponent implements OnInit {
  @Input() totalAccounts: number = 0;
  @Input() currentPage: number = 0;
  @Input() totalPage: number = 0;
  @Input() active: number = 0;
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();
  @Output() item = new EventEmitter();
  @Output() itemPerPage = new EventEmitter();
  itemPage = new FormControl(25);
  itemAccounts = [5, 10, 25, 50];

  items: number = 0;
  constructor(private itemData: DataService) {}

  ngOnInit(): void {}
  prevPage() {
    this.currentPage--;
    this.currentPage < 1 ? (this.currentPage = 1) : this.currentPage;
    this.prev.emit(this.currentPage);
  }
  nextPage() {
    this.currentPage++;
    this.currentPage > this.totalPage
      ? (this.currentPage = this.totalPage)
      : this.currentPage;
    this.next.emit(this.currentPage);
  }
  changeItem(item: any) {
    const itemNumber = parseInt(item);
    this.itemData.getItemPage(itemNumber);
    this.itemPerPage.emit(itemNumber);
    // this.load.emit();
  }
}
