import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {}

