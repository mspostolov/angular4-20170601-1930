import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public name: FormControl;
  public fullname: FormGroup;
  public userlistForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.name = new FormControl('Alice', [myValidator], myAsyncValidator);
    //this.name.valueChanges.subscribe(console.log)
    this.name.statusChanges.subscribe(() => {
      console.log(this.name.errors);
    })
    //this.name.value;
    //this.name.valid;

    this.fullname = new FormGroup({
      first: new FormControl('Alice'),
      last: new FormControl('Brown')
    });

    //console.log(this.fullname.value);
    //this.fullname.valueChanges.subscribe(console.log);

    this.userlistForm = new FormGroup({
      users: new FormArray([
        new FormControl('Alice'),
        new FormControl('Bob'),
        new FormControl('Jack')
      ])
    });

    //this.userlistForm.valueChanges.subscribe(console.table);

    this._formBuilder.group({
      name: [''],
      users: this._formBuilder.array([])
    });
  }

  addUser() {
    (this.userlistForm.controls['users'] as FormArray).push(new FormControl(''));

  }

  removeUser(index) {
    (this.userlistForm.controls['users'] as FormArray).removeAt(index);
  }

}


function myValidator(formControl: FormControl) {
  if(!formControl.value){
    return { myValidator : { error : 'error message'} }
  }
  return null;
}

function myAsyncValidator(formControl: FormControl) {
  if(!formControl.value){
    return Observable.of({ myAsyncValidator : { error : 'error message'} });
  }
  return Observable.of(null);
}

/*
- FormControl
- FormGroup
- FormArray
- FormBuilder
*/


