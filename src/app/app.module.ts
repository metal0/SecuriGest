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
import { PerfilComponent } from './perfil/perfil.component';
import { RecoverComponent } from './recover/recover.component';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarProfileComponent } from './calendar-profile/calendar-profile.component';
import { EntriesExitsComponent } from './entries-exits/entries-exits.component';

@NgModule({
	declarations: [AppComponent, LoginComponent, RegisterComponent, UsersComponent, HomeComponent, RecoverComponent, RoomComponent, RoomsComponent, RoomListComponent, PerfilComponent, CalendarProfileComponent, EntriesExitsComponent],
	imports: [
	BrowserModule,
	AppRoutingModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
	NgbModule.forRoot(),
	FormsModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MaterialModule,
	FormsModule, 
	FlatpickrModule.forRoot(),
	CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
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
	bootstrap: [AppComponent],
	exports: [CalendarProfileComponent]
	})
export class AppModule {}
