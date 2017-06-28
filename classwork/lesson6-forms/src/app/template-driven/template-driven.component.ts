import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  public user = {
    name: 'Bob',
    age: 50
  }

  constructor() { }

  onSubmit(form: NgForm) {
    debugger
    console.log(form);
  }

  ngOnInit() {
  }

}

// exportAs
