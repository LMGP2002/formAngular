import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { TextComponent } from './text/text.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'', component:FormComponent},
  {path:'image', component:ImageComponent},
  {path:'text', component:TextComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ImageComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
