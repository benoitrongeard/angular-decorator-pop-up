import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(private matDialog: MatDialog) { }


  openDialog<T>(component: ComponentType<T>, data: any) : MatDialogRef<T> {
    return this.matDialog.open(component, {
      data: data,
      disableClose: true
    });
  }
}
