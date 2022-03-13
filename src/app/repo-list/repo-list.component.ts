import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { RepoDetailComponent } from '../repo-detail/repo-detail.component';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  items:any = [];
  page = 1;
  pageSize =10;

  modalRef: BsModalRef;
  constructor(private http: HttpClient, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    const url ='https://api.github.com/users/aguspuryanto/repos';
    this.http.get(url).subscribe((res)=>{
      // console.log(JSON.stringify(res), 'res');
      this.items =  res;
    })
  }

  openModal(item: any) {
    // this.modalRef = this.modalService.show(template);
    const initialState: ModalOptions = {
      initialState: {
        list: item,
        title: 'Modal with component'
      }
    };
    this.modalRef = this.modalService.show(RepoDetailComponent, initialState);
    this.modalRef.content.closeBtnName = 'Close';
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
 }

}
