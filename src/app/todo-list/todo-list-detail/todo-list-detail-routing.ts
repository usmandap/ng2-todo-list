import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListDetailComponent } from './todo-list-detail.component';

const routes: Routes = [
    { path: '', component: TodoListDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
