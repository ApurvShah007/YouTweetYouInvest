import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { StockDataComponent } from './stock-data/stock-data.component';
import { RedditDataComponent } from './reddit-data/reddit-data.component';
import { NewsComponent } from './news/news.component';
import { NewsFeedComponent } from './news-feed/news-feed.component'

@NgModule({
  declarations: [
    AppComponent,
    StockDataComponent,
    RedditDataComponent,
    NewsComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
