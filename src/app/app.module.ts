import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { RoomComponent } from './rooms/room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';


@NgModule({
	declarations: [AppComponent, LoginComponent, RegisterComponent, UsersComponent, HomeComponent, RoomComponent, RoomsComponent, RoomListComponent],
	imports: [
	BrowserModule,
	AppRoutingModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
	NgbModule.forRoot(),
	FormsModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MaterialModule
	],
	providers: [
	AuthService,
	AuthGuard,
	UserService,
	{
	provide: HTTP_INTERCEPTORS,
	useClass: TokenInterceptorService,
	multi: true
	}
	],
	bootstrap: [AppComponent]
	})
export class AppModule {}
