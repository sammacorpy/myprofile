import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireStorageModule } from '@angular/fire/storage';


import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { MyskillComponent } from './myskill/myskill.component';
import { HiremeComponent } from './hireme/hireme.component';
import { MyexperiencesComponent } from './myexperiences/myexperiences.component';
import { PreviewComponent } from './preview/preview.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    HomeComponent,
    MainComponent,
    AboutmeComponent,
    MyprojectsComponent,
    MyskillComponent,
    HiremeComponent,
    MyexperiencesComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,  
    MatAutocompleteModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
