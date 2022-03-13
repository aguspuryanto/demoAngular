import { Component, OnInit } from '@angular/core';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss']
})
export class RepoDetailComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  // list: any[] = [];

  constructor(public bsModalRef: BsModalRef, public options: ModalOptions) {
    console.log(this.options.initialState);
  }

  ngOnInit(): void {
    // this.list.push('PROFIT!!!');
  }

}
