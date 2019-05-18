import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { filter, tap } from 'rxjs/operators';

export interface EditableListItem {
  id: number;
  category?: string;
  value: string;
}

@Component({
  selector: 'ngx-editable-list',
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableListComponent {
  editingItem: EditableListItem;
  addingItem: EditableListItem;
  // todo change editing item,adding item to formcontrols
  @Input() title: string;
  @Input() items: EditableListItem[] = [];
  @Input() labelAdd = 'Add item';
  @Input() labelEdit = 'Edit';
  @Input() labelRemove = 'Remove';
  @Input() labelConfirm = 'Confirm';
  @Input() labelCancel = 'Cancel';
  @Input() removeModalQuestion = 'Remove item?';
  @Input() confirmItemRemoval = true;
  @Input() enableCategories = false;
  @Output() edited: EventEmitter<EditableListItem> = new EventEmitter();
  @Output() removed: EventEmitter<EditableListItem> = new EventEmitter();
  @Output() added: EventEmitter<EditableListItem> = new EventEmitter();
  @ViewChild('removeModal') removeModal: TemplateRef<any>;

  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) {
  }

  onEdit(item: EditableListItem): void {
    this.items.map(val => {
      if (val.id === item.id) {
        val = this.editingItem;
      }
    });
    this.edited.emit(this.editingItem);
    this.editingItem = null;
  }

  onRemove(item: EditableListItem): void {
    if (this.confirmItemRemoval) {
      const dialogRef = this.dialog.open(this.removeModal);
      dialogRef.afterClosed().pipe(
        filter(result => result),
        tap(() => this.items = this.items.filter(val => val.id !== item.id)),
        tap(() => this.removed.emit(item)),
        tap(() => this.cdr.markForCheck())
      ).subscribe();
    } else {
      this.items = this.items.filter(val => val.id !== item.id);
      this.removed.emit(item);
    }
  }

  requestAddingItem(): void {
    let maxId = 0;
    this.items.map(item => item.id > maxId ? maxId = item.id : false);
    this.addingItem = {
      id: maxId + 1,
      category: '',
      value: ''
    };
  }

  onAdd(): void {
    if (this.addingItem.value.trim().length > 0) {
      this.added.emit(this.addingItem);
      this.items.push(this.addingItem);
      this.addingItem = null;
    }
  }
}
