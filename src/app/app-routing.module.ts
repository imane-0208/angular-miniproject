import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent} from './movie/movie.component';






const routes: Routes = [
  {path :'' , redirectTo : 'login' , pathMatch : 'full'},
  {path : 'login', component: LoginComponent},
  {path : 'home', component: HomeComponent},
  {path : 'movie', component: MovieComponent  },
  { path : '**' , component : LoginComponent }
]



@NgModule({
  declarations: [],
  exports : [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
