import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent} from './@components/header/header.component';
import { HomeComponent } from './@components/home/home.component';
import { AboutComponent } from './@components/about/about.component';
import { AchievementComponent } from './@components/achievement/achievement.component';
import { FooterComponent } from './@components/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        AchievementComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
