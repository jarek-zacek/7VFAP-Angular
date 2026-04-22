import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';

interface OrderItem {
  itemId: string;
  itemName: string;
}

interface UserOrder {
  items: readonly OrderItem[];
  orderDate: string;
  orderDescription: string;
  orderId: string;
}

interface User {
  age: number;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  orders: readonly UserOrder[];
  password: string;
  username: string;
}

@Component({
  selector: 'app-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
  ],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private readonly http = inject(HttpClient);
  private readonly usersEndpoint = '/api/test/users';

  protected readonly buttonText = signal('Load users');
  protected readonly displayedColumns = [
    'firstName',
    'lastName',
    'email',
    'username',
    'age',
    'ordersCount',
  ];
  protected readonly usersDataSource = signal<readonly User[]>([]);

  protected onClick(): void {
    this.http
      .get<readonly User[]>(this.usersEndpoint)
      .subscribe((users) => this.usersDataSource.set(users));
  }
}
