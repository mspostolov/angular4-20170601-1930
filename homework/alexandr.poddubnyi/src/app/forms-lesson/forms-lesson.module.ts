import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from 'app/users-currency/user.service';
import { FormsLessonRoutingModule } from 'app/forms-lesson/forms-lesson-routing.module';
import { FormsLessonComponent } from './forms-lesson.component';
import { FormsModule } from '@angular/forms';
import { EmailValidationDirective } from './shared/email-validation.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsLessonRoutingModule,
    FormsModule
  ],
  declarations: [UsersListComponent, UserFormComponent, FormsLessonComponent, EmailValidationDirective],
  providers: [UserService]
})
export class FormsLessonModule { }
