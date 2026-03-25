import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-left',
  imports: [
    MatButton
  ],
  templateUrl: './left.html',
  styleUrl: './left.css',
})
export class Left {
  protected readonly title = signal('Angular2');
  protected readonly buttonText = signal('Text');

  onClick(): void {
    console.log('Left button clicked');
    this.buttonText.set('Another text');
  }
}
