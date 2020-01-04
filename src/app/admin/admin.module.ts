import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import {PostPageComponent} from '../post-page/post-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/services/auth.service';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    EditPageComponent,
    DashboardPageComponent,
    CreatePageComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          { path: 'login', component: LoginPageComponent},
          { path: 'dashboard', component: DashboardPageComponent},
          { path: 'create', component: CreatePageComponent},
          { path: 'post/:id/edit', component: EditPageComponent}

        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AdminModule {
}