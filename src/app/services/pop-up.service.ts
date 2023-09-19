import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  private static instance: PopUpService | undefined = undefined;

  constructor(private matDialog: MatDialog) {
    console.log("PopUpService.constructor");
    PopUpService.instance = this;
  }

  public static getInstance(): PopUpService | undefined {
    return PopUpService.instance;
  }


  openDialog<T>(component: ComponentType<T>, data: any, width: string): Observable<boolean> {
    return this.matDialog.open(component, {
      data: data,
      disableClose: true,
      width: width,
    }).afterClosed();
  }
}
