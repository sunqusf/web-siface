import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'paging',
  providers: [],
  template: `<nav>
  <ul class="pagination justify-content-center">
      <li class="page-item" [ngClass]="{'active': currentPage==page}" *ngFor="let page of pages"><a class="page-link" href="#" (click)="onClickPage(page)">{{page+1}}</a></li>
  </ul>
  </nav>`
})
export class PagingComponent implements OnInit {
  @Input() currentPage:number;
  @Input() totalPages:number;
  @Input() pageSize:number;
  @Output() goto:EventEmitter<any> = new EventEmitter();
  pages:number[];

  constructor() {}

  ngOnInit() {
    this.pages = [];
    this.currentPage = this.currentPage*1;
    this.totalPages = this.totalPages*1;

    let minPage = this.currentPage -10 <= 0 ? 0 : this.currentPage -10;
    let maxPage = this.currentPage +10 >= this.totalPages ? this.totalPages : this.currentPage +10;
    for (let i = minPage; i < maxPage; i++) {
      this.pages.push(i);
    }
    console.log(this.currentPage, minPage, maxPage, this.pages);
  }

  onClickPage(toPage) {
    this.goto.next(toPage);
    return false;
  }
}
