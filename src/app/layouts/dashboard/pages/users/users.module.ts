import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './users.component';

// ENVOLTURA DE INPUT
import { MatFormFieldModule } from '@angular/material/form-field';
// INPUT
import { MatInputModule } from '@angular/material/input';
// SELECT
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [UsersComponent, UserFormComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [UsersComponent],
  providers: [
    // UsersService,
    // {
    //   provide: UsersService,
    //   useClass: UsersMockService,
    // },
  ],
})
export class UsersModule {}