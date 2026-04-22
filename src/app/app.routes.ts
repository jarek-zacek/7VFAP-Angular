import { Routes } from '@angular/router';
import { Orders } from './orders/orders';
import { Users } from './users/users';

export const routes: Routes = [
  { path: 'users', component: Users },
  { path: 'orders', component: Orders },
];
