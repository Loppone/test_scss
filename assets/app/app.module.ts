import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

import { ToasterModule } from "angular2-toaster";

import { HelperService } from './common/helper.service';
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ToasterModule,
        FormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent],
    providers: [
        HelperService
    ]
})
export class AppModule {

}