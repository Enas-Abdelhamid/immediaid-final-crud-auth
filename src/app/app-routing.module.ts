
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from "./shared/auth.guard";


 





import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AidProviderCreateComponent } from './components/aid-provider-create/aid-provider-create.component';
import { AidProviderListComponent } from './components/aid-provider-list/aid-provider-list.component';
import { AidProviderEditComponent } from './components/aid-provider-edit/aid-provider-edit.component';
const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'create-aidprovider', component: AidProviderCreateComponent },
  { path: 'edit-aidprovider/:id', component: AidProviderEditComponent },
  { path: 'aidproviders-list', component: AidProviderListComponent },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }