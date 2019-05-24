import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';
import { RoomsComponent } from './rooms/rooms.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecoverComponent } from './recover/recover.component';
import { ReqRoomComponent } from './req-room/req-room.component';
import { EntriesExitsComponent } from './entries-exits/entries-exits.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{
		path: 'users',
		component: UsersComponent,
		canActivate: [
			AuthGuard
		]
	},
	{ path: 'salas', component: RoomsComponent },
	{ path: 'perfil', component: PerfilComponent },
	{ path: 'recover', component: RecoverComponent },
	{ path: 'reqroom', component: ReqRoomComponent },
	{ path: 'entry-exit', component: EntriesExitsComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
