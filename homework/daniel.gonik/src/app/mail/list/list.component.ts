import { Component, Input, OnInit } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
  selector: 'dg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() emails = [];
  @Input() authors: Object = {}

  constructor(private swal: SweetAlertService) {
  }

  ngOnInit() {
  }

  removeEmail(index) {
    this.swal.confirm({
      title: 'Are you sure?',
      text: 'You are about to delete this email',
      confirmButtonText: 'Yes, please',
      cancelButtonText: 'No!'
    })
    .then(res => {
      if (res === true) {
        this.emails.splice(index, 1);
      }
      document.querySelector('.swal2-container').remove();
    })
    .catch(e => {
      console.log(e);
      document.querySelector('.swal2-container').remove();
    });
    document.body.style.paddingRight = '';
  }

  bookmark(index) {
    this.emails[index].bookmarked = !this.emails[index].bookmarked;
  }
}
