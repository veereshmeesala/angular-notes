import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AngularrModule } from './angular/angularr.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AngularrModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
