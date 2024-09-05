import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes ,withViewTransitions()),
     provideClientHydration(),
     provideHttpClient(withFetch(),withInterceptors([headerInterceptor,errorsInterceptor,loadingInterceptor])),
     //this use to import carousel module
    provideAnimations(),
    provideToastr(),
    provideHttpClient(),
    importProvidersFrom( NgxSpinnerModule,BrowserModule, NgxPaginationModule , BrowserAnimationsModule ,SweetAlert2Module)
    ]
};
