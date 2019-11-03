import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  ApiPrefixInterceptor,
  AuthenticationInterceptor,
  LoaderInterceptor,
  LoadingService,
  AuthenticationGuard,
  AuthenticationService,
  CredentialsService,
  EnvironmentServiceProvider,
  DataService
} from '.';
import { SnackBarComponent } from './components/snack-bar';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    LoadingService,
    DataService,
    AuthenticationGuard,
    AuthenticationService,
    CredentialsService,
    EnvironmentServiceProvider
  ],
  declarations: [SnackBarComponent],
  entryComponents: [SnackBarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import into AppModule
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}
