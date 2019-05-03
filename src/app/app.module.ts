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

@NgModule({
	declarations: [AppComponent, LoginComponent, RegisterComponent, UsersComponent, HomeComponent],
	imports: [
	BrowserModule,
	AppRoutingModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
	NgbModule.forRoot(),
	FormsModule,
	HttpClientModule
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
