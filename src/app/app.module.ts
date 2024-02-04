// Import Angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";


// Import Angular material modules
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet } from '@angular/router';

// Import Angular routing and components
import { LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';

// Import locale data
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';

// Import custom injection tokens
import { MY_USER_TOKEN } from './core/injection-tokens';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


registerLocaleData(es);
registerLocaleData(esAR);

@NgModule({
  declarations: [AppComponent],
  imports: [
    
  FormsModule,
   BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   MatNativeDateModule,
    MatProgressSpinnerModule,
    RouterModule,
    FormsModule,ReactiveFormsModule,
  
  
  RouterOutlet,
    
 
   
      ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
      },
    },
    {
      provide: MY_USER_TOKEN,
      useValue: 'ldsjdm348342kjewkjksfdmsakjdsad',
    },
    {
      provide: 'API_URL',
      useValue: 'http://localhost:5000/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
