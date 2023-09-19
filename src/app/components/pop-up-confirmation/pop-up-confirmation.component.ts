import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmPopUpData } from 'src/app/interfaces/confirm-pop-up-data';

@Component({
  selector: 'app-pop-up-confirmation',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule, MatButtonModule],
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.css']
})
export class PopUpConfirmationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmPopUpData) { }
}
