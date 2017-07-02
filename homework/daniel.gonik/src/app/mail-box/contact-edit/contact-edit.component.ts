import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/pluck'

import { ContactsService } from '../_services/contacts.service';
import { User } from '../../_models/user';

@Component({
  selector: 'dg-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  public contact;
  public contactModel: FormGroup;
  public isLoading: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService,
    private _formBuilder: FormBuilder,
    public snackBar: MdSnackBar
  ) {
    this.contact = new User();
  }

  ngOnInit() {
    this.route.params.pluck('contactId').subscribe(contactId => {
      const id = +contactId;
      this.contactsService.getUserById(id)
        .subscribe(contact => {
          this.contact = contact;
          this._initFormGroup();
          this.isLoading = false;
        });
    });
  }

  public onSave({ value, valid, errors }: { value: User, valid: boolean, errors: Object }) {
    const contact = value;
    contact.id = this.contact.id;
    if (valid) {
      this.contactsService.saveContact(contact)
        .subscribe(
          () => {
            this.router.navigate(['/app/contacts']);
            // TODO: 'Undo' - action
            this.snackBar.open('Contact changes has been saved!', '', {
              duration: 2000
            });
          },
          (error) => this.snackBar.open(error)
        );
    }
  }

  public undo() {
    console.log('undo');
  }

  private _initFormGroup() {
    this.contactModel = new FormGroup({
      firstName: new FormControl(this.contact.firstName, [Validators.required, Validators.minLength(2)]),
      surname: new FormControl(this.contact.surname, [Validators.required]),
      country: new FormControl(this.contact.country, null, this._countryAsyncValidator.bind(this)),
      email: new FormControl(this.contact.email, null, this._uniqueEmail.bind(this))
    });

    // this.contactModel.valueChanges.subscribe(console.log);
    this.contactModel.statusChanges.subscribe(() => console.log(this.contactModel.errors))
  }

  private _countryAsyncValidator(formControl: FormControl) {
    if(!formControl.value){
      return Observable.of({ country: { error: 'Country field cannot be empty!' } });
    }
    return Observable.of(null);
  }

  private _uniqueEmail(formControl: FormControl) {
    if(this.contactsService && !this.contactsService.isEmailUnique(formControl.value)) {
      return Observable.of({ uniqueEmail: { error: 'Email has to be unique!' } });
    }
    return Observable.of(null);
  }


}
