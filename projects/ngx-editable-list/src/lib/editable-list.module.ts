import { NgModule } from '@angular/core';
import { EditableListComponent } from './components/editable-list/editable-list.component';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [EditableListComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    EditableListComponent,
  ]
})
export class EditableListModule {
}
